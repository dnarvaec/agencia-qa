import { test as base } from '@playwright/test';
import { env }                    from '@utils/env';
import { LoginPage }             from '@pages/LoginPage';
import { InventoryPage }         from '@pages/InventoryPage';
import { ProductDetailPage }     from '@pages/ProductDetailPage';
import { CartPage }              from '@pages/CartPage';
import { CheckoutInfoPage }      from '@pages/CheckoutInfoPage';
import { CheckoutOverviewPage }  from '@pages/CheckoutOverviewPage';
import { CheckoutCompletePage }  from '@pages/CheckoutCompletePage';
import { HeaderComponent }       from '@components/HeaderComponent';

interface PageFixtures {
  loginPage:            LoginPage;
  inventoryPage:        InventoryPage;
  productDetailPage:    ProductDetailPage;
  cartPage:             CartPage;
  checkoutInfoPage:     CheckoutInfoPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
  header:               HeaderComponent;
}

/** Fixture extendido con sesión autenticada lista para usar */
interface AuthFixtures extends PageFixtures {
  authenticatedInventoryPage: InventoryPage;
}

export const test = base.extend<AuthFixtures>({
  loginPage:            async ({ page }, use) => use(new LoginPage(page)),
  inventoryPage:        async ({ page }, use) => use(new InventoryPage(page)),
  productDetailPage:    async ({ page }, use) => use(new ProductDetailPage(page)),
  cartPage:             async ({ page }, use) => use(new CartPage(page)),
  checkoutInfoPage:     async ({ page }, use) => use(new CheckoutInfoPage(page)),
  checkoutOverviewPage: async ({ page }, use) => use(new CheckoutOverviewPage(page)),
  checkoutCompletePage: async ({ page }, use) => use(new CheckoutCompletePage(page)),
  header:               async ({ page }, use) => use(new HeaderComponent(page)),

  // Inicia sesión como standard_user y navega al inventario antes del test
  authenticatedInventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(env.defaultUser, env.defaultPassword);
    await inventoryPage.expectOnInventoryPage();
    await use(inventoryPage);
  },
});

export { expect } from '@playwright/test';
