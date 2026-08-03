import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export interface CheckoutInfo {
  firstName: string;
  lastName: string;
  zipCode: string;
}

export class CheckoutInfoPage extends BasePage {
  private readonly firstNameInput = this.page.locator('[data-test="firstName"]');
  private readonly lastNameInput  = this.page.locator('[data-test="lastName"]');
  private readonly zipCodeInput   = this.page.locator('[data-test="postalCode"]');
  private readonly continueBtn    = this.page.locator('[data-test="continue"]');
  private readonly cancelBtn      = this.page.locator('[data-test="cancel"]');
  private readonly errorMessage   = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async fillInfo(info: CheckoutInfo): Promise<void> {
    await this.firstNameInput.fill(info.firstName);
    await this.lastNameInput.fill(info.lastName);
    await this.zipCodeInput.fill(info.zipCode);
  }

  async continue(): Promise<void> {
    await this.continueBtn.click();
  }

  async cancel(): Promise<void> {
    await this.cancelBtn.click();
  }

  async submitInfo(info: CheckoutInfo): Promise<void> {
    await this.fillInfo(info);
    await this.continue();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.errorMessage.textContent()) ?? '';
  }

  async expectOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-step-one/);
  }

  async expectError(text: string): Promise<void> {
    await expect(this.errorMessage).toContainText(text);
  }
}
