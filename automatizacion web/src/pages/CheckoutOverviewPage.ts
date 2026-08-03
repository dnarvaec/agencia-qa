import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  private readonly orderItems      = this.page.locator('.cart_item');
  private readonly itemTotalLabel  = this.page.locator('.summary_subtotal_label');
  private readonly taxLabel        = this.page.locator('.summary_tax_label');
  private readonly totalLabel      = this.page.locator('.summary_total_label');
  private readonly finishBtn       = this.page.locator('[data-test="finish"]');
  private readonly cancelBtn       = this.page.locator('[data-test="cancel"]');

  constructor(page: Page) {
    super(page);
  }

  async getItemTotal(): Promise<number> {
    const text = (await this.itemTotalLabel.textContent()) ?? '';
    return parseFloat(text.replace(/[^0-9.]/g, ''));
  }

  async getTax(): Promise<number> {
    const text = (await this.taxLabel.textContent()) ?? '';
    return parseFloat(text.replace(/[^0-9.]/g, ''));
  }

  async getOrderTotal(): Promise<number> {
    const text = (await this.totalLabel.textContent()) ?? '';
    return parseFloat(text.replace(/[^0-9.]/g, ''));
  }

  async getItemCount(): Promise<number> {
    return this.orderItems.count();
  }

  async finishOrder(): Promise<void> {
    await this.finishBtn.click();
  }

  async cancel(): Promise<void> {
    await this.cancelBtn.click();
  }

  async expectOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-step-two/);
  }
}
