import { test, expect } from '@fixtures/pages.fixture';
import { DataLoader } from '@utils/DataLoader';

interface Product {
  name: string;
  expectedPrice: number;
}

interface SortScenario {
  option: 'az' | 'za' | 'lohi' | 'hilo';
  description: string;
  expectedOrder: string;
}

interface ProductsData {
  all: Product[];
  sortScenarios: SortScenario[];
}

const { all: products, sortScenarios } = DataLoader.load<ProductsData>('products.json');

test.describe('Inventario de productos', () => {
  test.beforeEach(async ({ authenticatedInventoryPage }) => {
    // authenticatedInventoryPage ya tiene sesión activa (fixture)
    void authenticatedInventoryPage;
  });

  test('Debe mostrar exactamente 6 productos', async ({ inventoryPage }) => {
    const count = await inventoryPage.getItemCount();
    expect(count).toBe(6);
  });

  test('Todos los precios deben ser mayores a cero', async ({ inventoryPage }) => {
    const prices = await inventoryPage.getItemPrices();
    prices.forEach((price) => expect(price).toBeGreaterThan(0));
  });

  test.describe('Ordenamiento de productos', () => {
    for (const scenario of sortScenarios) {
      test(scenario.description, async ({ inventoryPage }) => {
        await inventoryPage.sortBy(scenario.option);

        if (scenario.expectedOrder === 'ascending') {
          const prices = await inventoryPage.getItemPrices();
          expect(prices).toEqual([...prices].sort((a, b) => a - b));
        } else if (scenario.expectedOrder === 'descending') {
          const prices = await inventoryPage.getItemPrices();
          expect(prices).toEqual([...prices].sort((a, b) => b - a));
        } else if (scenario.expectedOrder === 'az') {
          const names = await inventoryPage.getItemNames();
          expect(names).toEqual([...names].sort());
        } else if (scenario.expectedOrder === 'za') {
          const names = await inventoryPage.getItemNames();
          expect(names).toEqual([...names].sort().reverse());
        }
      });
    }
  });

  test.describe('Agregar productos al carrito', () => {
    for (const product of products) {
      test(`Agregar "${product.name}" al carrito`, async ({ inventoryPage, header }) => {
        await inventoryPage.addItemToCartByName(product.name);
        await header.expectCartCount(1);
        await inventoryPage.removeItemFromCartByName(product.name);
        await header.expectCartCount(0);
      });
    }
  });

  test('Abrir detalle de producto y verificar precio', async ({ inventoryPage, productDetailPage }) => {
    const firstProduct = products[0];
    await inventoryPage.openProductByName(firstProduct.name);
    await productDetailPage.expectOnProductPage(firstProduct.name);
    const price = await productDetailPage.getProductPrice();
    expect(price).toBe(firstProduct.expectedPrice);
  });
});
