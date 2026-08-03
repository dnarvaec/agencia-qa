import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export type SortOption = 'az' | 'za' | 'lohi' | 'hilo';

export class InventoryPage extends BasePage {
  private readonly pageTitle      = this.page.locator('.title');
  private readonly inventoryItems = this.page.locator('.inventory_item');
  private readonly itemNames      = this.page.locator('.inventory_item_name');
  private readonly itemPrices     = this.page.locator('.inventory_item_price');
  private readonly sortDropdown   = this.page.locator('[data-test="product-sort-container"]');
  private readonly cartBadge      = this.page.locator('.shopping_cart_badge');

  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await super.navigate('/inventory.html');
  }

  async getItemCount(): Promise<number> {
    return this.inventoryItems.count();
  }

  async getItemNames(): Promise<string[]> {
    return this.itemNames.allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const texts = await this.itemPrices.allTextContents();
    return texts.map((t) => parseFloat(t.replace('$', '')));
  }

  async addItemToCartByName(productName: string): Promise<void> {
    await this.inventoryItems
      .filter({ hasText: productName })
      .locator('button')
      .click();
  }

  async removeItemFromCartByName(productName: string): Promise<void> {
    await this.inventoryItems
      .filter({ hasText: productName })
      .locator('button')
      .click();
  }

  async openProductByName(productName: string): Promise<void> {
    await this.itemNames.filter({ hasText: productName }).click();
  }

  async sortBy(option: SortOption): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }

  async getCartBadgeCount(): Promise<number> {
    if (!(await this.cartBadge.isVisible())) return 0;
    return parseInt((await this.cartBadge.textContent()) ?? '0');
  }

  async expectOnInventoryPage(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory/);
    await expect(this.pageTitle).toHaveText('Products');
  }
}
