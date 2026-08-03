import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  private readonly completeHeader = this.page.locator('.complete-header');
  private readonly completeText   = this.page.locator('.complete-text');
  private readonly backHomeBtn    = this.page.locator('[data-test="back-to-products"]');

  constructor(page: Page) {
    super(page);
  }

  async getSuccessHeader(): Promise<string> {
    return (await this.completeHeader.textContent()) ?? '';
  }

  async getSuccessText(): Promise<string> {
    return (await this.completeText.textContent()) ?? '';
  }

  async backToProducts(): Promise<void> {
    await this.backHomeBtn.click();
  }

  async expectOrderComplete(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-complete/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
