import { test, expect } from '@fixtures/pages.fixture';
import { DataLoader } from '@utils/DataLoader';
import type { CheckoutInfo } from '@pages/CheckoutInfoPage';

interface CheckoutEntry extends CheckoutInfo {
  description: string;
}

interface CheckoutData {
  validInfo:   CheckoutEntry[];
  invalidInfo: CheckoutEntry[];
}

const { validInfo, invalidInfo } = DataLoader.load<CheckoutData>('checkout.json');

test.describe('Checkout E2E', () => {
  test.beforeEach(async ({ authenticatedInventoryPage, inventoryPage }) => {
    void authenticatedInventoryPage;
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
  });

  test.describe('Flujo completo de compra', () => {
    for (const info of validInfo) {
      test(info.description, async ({
        header,
        cartPage,
        checkoutInfoPage,
        checkoutOverviewPage,
        checkoutCompletePage,
      }) => {
        await header.openCart();
        await cartPage.proceedToCheckout();
        await checkoutInfoPage.expectOnPage();

        await checkoutInfoPage.submitInfo(info);
        await checkoutOverviewPage.expectOnPage();

        const itemTotal = await checkoutOverviewPage.getItemTotal();
        const tax       = await checkoutOverviewPage.getTax();
        const total     = await checkoutOverviewPage.getOrderTotal();

        expect(itemTotal).toBeGreaterThan(0);
        expect(tax).toBeGreaterThan(0);
        // Validar que el total = subtotal + impuesto (con margen de redondeo)
        expect(total).toBeCloseTo(itemTotal + tax, 2);

        await checkoutOverviewPage.finishOrder();
        await checkoutCompletePage.expectOrderComplete();
      });
    }
  });

  test.describe('Validación de campos obligatorios', () => {
    for (const info of invalidInfo) {
      test(`Error: ${info.description}`, async ({
        header,
        cartPage,
        checkoutInfoPage,
      }) => {
        await header.openCart();
        await cartPage.proceedToCheckout();
        await checkoutInfoPage.submitInfo(info);

        const error = await checkoutInfoPage.getErrorMessage();
        expect(error.length).toBeGreaterThan(0);
      });
    }
  });

  test('Cancelar el checkout regresa al carrito', async ({
    header,
    cartPage,
    checkoutInfoPage,
  }) => {
    await header.openCart();
    await cartPage.proceedToCheckout();
    await checkoutInfoPage.cancel();
    await cartPage.expectCartCount(1);
  });

  test('Cancelar en el resumen regresa al inventario', async ({
    header,
    cartPage,
    checkoutInfoPage,
    checkoutOverviewPage,
    inventoryPage,
  }) => {
    await header.openCart();
    await cartPage.proceedToCheckout();
    await checkoutInfoPage.submitInfo(validInfo[0]);
    await checkoutOverviewPage.expectOnPage();
    await checkoutOverviewPage.cancel();
    await inventoryPage.expectOnInventoryPage();
  });
});
