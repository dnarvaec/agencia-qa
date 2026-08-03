import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export class CartPage extends BasePage {
  private readonly cartItems           = this.page.locator('.cart_item');
  private readonly checkoutBtn         = this.page.locator('[data-test="checkout"]');
  private readonly continueShoppingBtn = this.page.locator('[data-test="continue-shopping"]');

  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await super.navigate('/cart.html');
  }

  async getCartItems(): Promise<CartItem[]> {
    const count = await this.cartItems.count();
    const items: CartItem[] = [];

    for (let i = 0; i < count; i++) {
      const item     = this.cartItems.nth(i);
      const name     = (await item.locator('.inventory_item_name').textContent()) ?? '';
      const priceStr = (await item.locator('.inventory_item_price').textContent()) ?? '$0';
      const qtyStr   = (await item.locator('.cart_quantity').textContent()) ?? '0';
      items.push({ name, price: parseFloat(priceStr.replace('$', '')), quantity: parseInt(qtyStr) });
    }
    return items;
  }

  async getItemCount(): Promise<number> {
    return this.cartItems.count();
  }

  async removeItemByName(productName: string): Promise<void> {
    await this.cartItems
      .filter({ hasText: productName })
      .locator('[data-test^="remove"]')
      .click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingBtn.click();
  }

  async expectItemInCart(productName: string): Promise<void> {
    await expect(this.cartItems.filter({ hasText: productName })).toBeVisible();
  }

  async expectCartEmpty(): Promise<void> {
    await expect(this.cartItems).toHaveCount(0);
  }

  async expectCartCount(count: number): Promise<void> {
    await expect(this.cartItems).toHaveCount(count);
  }
}
