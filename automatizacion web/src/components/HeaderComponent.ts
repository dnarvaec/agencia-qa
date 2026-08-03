import { Page, expect } from '@playwright/test';

export class HeaderComponent {
  private readonly cartLink    = this.page.locator('.shopping_cart_link');
  private readonly cartBadge   = this.page.locator('.shopping_cart_badge');
  private readonly menuBtn     = this.page.locator('#react-burger-menu-btn');
  private readonly logoutLink  = this.page.locator('#logout_sidebar_link');
  private readonly resetLink   = this.page.locator('#reset_sidebar_link');
  private readonly closeMenuBtn = this.page.locator('#react-burger-cross-btn');

  constructor(private readonly page: Page) {}

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async getCartItemCount(): Promise<number> {
    if (!(await this.cartBadge.isVisible())) return 0;
    return parseInt((await this.cartBadge.textContent()) ?? '0');
  }

  async logout(): Promise<void> {
    await this.menuBtn.click();
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }

  async resetAppState(): Promise<void> {
    await this.menuBtn.click();
    await this.resetLink.waitFor({ state: 'visible' });
    await this.resetLink.click();
    await this.closeMenuBtn.click();
  }

  async expectCartCount(count: number): Promise<void> {
    if (count === 0) {
      await expect(this.cartBadge).not.toBeVisible();
    } else {
      await expect(this.cartBadge).toHaveText(String(count));
    }
  }
}
