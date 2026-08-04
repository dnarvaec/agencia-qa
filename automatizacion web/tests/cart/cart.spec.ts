import { test, expect } from '@fixtures/pages.fixture';
import { DataLoader } from '@utils/DataLoader';

interface CartScenario {
  scenario: string;
  products: string[];
}

interface ProductsData {
  cartScenarios: CartScenario[];
}

const { cartScenarios } = DataLoader.load<ProductsData>('products.json');

test.describe('Carrito de compras', () => {
  test.beforeEach(async ({ authenticatedInventoryPage }) => {
    void authenticatedInventoryPage;
  });

  test.describe('Agregar productos al carrito', () => {
    for (const scenario of cartScenarios) {
      test(scenario.scenario, async ({ inventoryPage, cartPage, header }) => {
        for (const product of scenario.products) {
          await inventoryPage.addItemToCartByName(product);
        }

        await header.expectCartCount(scenario.products.length);
        await header.openCart();

        for (const product of scenario.products) {
          await cartPage.expectItemInCart(product);
        }
        await cartPage.expectCartCount(scenario.products.length);
      });
    }
  });

  test('Eliminar un producto del carrito', async ({ inventoryPage, cartPage, header }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await header.openCart();
    await cartPage.removeItemByName('Sauce Labs Backpack');
    await cartPage.expectCartEmpty();
    await header.expectCartCount(0);
  });

  test('El contador del carrito se actualiza correctamente al agregar y quitar', async ({
    inventoryPage,
    header,
  }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await header.expectCartCount(1);
    await inventoryPage.addItemToCartByName('Sauce Labs Bike Light');
    await header.expectCartCount(2);
    await inventoryPage.removeItemFromCartByName('Sauce Labs Backpack');
    await header.expectCartCount(1);
    await inventoryPage.removeItemFromCartByName('Sauce Labs Bike Light');
    await header.expectCartCount(0);
  });

  test('Continuar comprando desde el carrito regresa al inventario', async ({
    inventoryPage,
    cartPage,
    header,
  }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Onesie');
    await header.openCart();
    await cartPage.continueShopping();
    await inventoryPage.expectOnInventoryPage();
  });

  test('El precio total en el carrito coincide con el precio del producto', async ({
    inventoryPage,
    cartPage,
    header,
  }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await header.openCart();
    const items = await cartPage.getCartItems();
    expect(items).toHaveLength(1);
    expect(items[0].price).toBe(29.99);
    expect(items[0].quantity).toBe(1);
  });

  test('Eliminar un producto del carrito con múltiples ítems presentes', async ({
    inventoryPage,
    cartPage,
    header,
  }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await inventoryPage.addItemToCartByName('Sauce Labs Bike Light');
    await header.expectCartCount(2);
    await header.openCart();
    await cartPage.removeItemByName('Sauce Labs Bike Light');
    await cartPage.expectItemInCart('Sauce Labs Backpack');
    await cartPage.expectCartCount(1);
    await header.expectCartCount(1);
  });

  test('El contador del carrito no se muestra cuando el carrito está vacío', async ({
    header,
    cartPage,
  }) => {
    await header.expectCartCount(0);
    await header.openCart();
    await cartPage.expectCartEmpty();
  });

  test('El precio y la cantidad del producto en el carrito persisten tras recargar la página', async ({
    inventoryPage,
    cartPage,
    header,
    page,
  }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await header.openCart();
    await page.reload();
    const items = await cartPage.getCartItems();
    expect(items).toHaveLength(1);
    expect(items[0].name).toBe('Sauce Labs Backpack');
    expect(items[0].price).toBe(29.99);
    expect(items[0].quantity).toBe(1);
  });

  test('El contador del carrito se mantiene consistente tras una secuencia de adiciones y eliminaciones', async ({
    inventoryPage,
    cartPage,
    header,
  }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await inventoryPage.addItemToCartByName('Sauce Labs Bike Light');
    await inventoryPage.addItemToCartByName('Sauce Labs Bolt T-Shirt');
    await header.expectCartCount(3);

    await inventoryPage.removeItemFromCartByName('Sauce Labs Bike Light');
    await header.expectCartCount(2);

    await inventoryPage.addItemToCartByName('Sauce Labs Fleece Jacket');
    await header.expectCartCount(3);

    await header.openCart();
    await cartPage.expectItemInCart('Sauce Labs Backpack');
    await cartPage.expectItemInCart('Sauce Labs Bolt T-Shirt');
    await cartPage.expectItemInCart('Sauce Labs Fleece Jacket');
    await cartPage.expectCartCount(3);
  });
});
