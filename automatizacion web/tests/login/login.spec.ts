import { test, expect } from '@fixtures/pages.fixture';
import { DataLoader } from '@utils/DataLoader';

interface User {
  username: string;
  password: string;
  description: string;
}

interface UsersData {
  valid:   User[];
  locked:  User[];
  invalid: User[];
}

const { valid, locked, invalid } = DataLoader.load<UsersData>('users.json');

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test.describe('Login exitoso', () => {
    for (const user of valid) {
      test(user.description, async ({ loginPage }) => {
        await loginPage.login(user.username, user.password);
        await loginPage.expectLoginSuccess();
      });
    }
  });

  test.describe('Usuario bloqueado', () => {
    for (const user of locked) {
      test(user.description, async ({ loginPage }) => {
        await loginPage.login(user.username, user.password);
        await loginPage.expectLoginError('Sorry, this user has been locked out');
      });
    }
  });

  test.describe('Credenciales inválidas', () => {
    for (const user of invalid) {
      test(user.description, async ({ loginPage }) => {
        await loginPage.login(user.username, user.password);
        expect(await loginPage.isErrorVisible()).toBe(true);
      });
    }
  });

  test('Logout después de iniciar sesión', async ({ page, loginPage, header }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectLoginSuccess();
    await header.logout();
    await expect(page).toHaveURL('/');
  });
});
