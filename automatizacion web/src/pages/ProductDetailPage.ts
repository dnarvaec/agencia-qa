import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
  private readonly productName    = this.page.locator('.inventory_details_name');
  private readonly productDesc    = this.page.locator('.inventory_details_desc');
  private readonly productPrice   = this.page.locator('.inventory_details_price');
  private readonly addToCartBtn   = this.page.locator('[data-test^="add-to-cart"]');
  private readonly removeBtn      = this.page.locator('[data-test^="remove"]');
  private readonly backBtn        = this.page.locator('[data-test="back-to-products"]');

  constructor(page: Page) {
    super(page);
  }

  async getProductName(): Promise<string> {
    return (await this.productName.textContent()) ?? '';
  }

  async getProductDescription(): Promise<string> {
    return (await this.productDesc.textContent()) ?? '';
  }

  async getProductPrice(): Promise<number> {
    const text = (await this.productPrice.textContent()) ?? '$0';
    return parseFloat(text.replace('$', ''));
  }

  async addToCart(): Promise<void> {
    await this.addToCartBtn.click();
  }

  async removeFromCart(): Promise<void> {
    await this.removeBtn.click();
  }

  async goBack(): Promise<void> {
    await this.backBtn.click();
  }

  async isAddToCartVisible(): Promise<boolean> {
    return this.addToCartBtn.isVisible();
  }

  async expectOnProductPage(productName: string): Promise<void> {
    await expect(this.productName).toHaveText(productName);
  }
}
