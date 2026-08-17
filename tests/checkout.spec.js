const { test, expect } = require('@playwright/test');

test('Completar una compra correctamente', async ({ page }) => {

    // 1. Abrir SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // 2. Iniciar sesión
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // 3. Agregar un producto al carrito
    await page.locator(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    // 4. Verificar que el carrito tenga 1 producto
    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('1');

    // 5. Entrar al carrito
    await page.locator('.shopping_cart_link').click();

    // 6. Presionar Checkout
    await page.locator('#checkout').click();

    // 7. Completar datos de envío
    await page.locator('#first-name').fill('Yimmy');
    await page.locator('#last-name').fill('Moya');
    await page.locator('#postal-code').fill('0000');

    // 8. Continuar
    await page.locator('#continue').click();

    // 9. Finalizar la compra
    await page.locator('#finish').click();

    // 10. Verificar mensaje de compra exitosa
    await expect(
        page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');

});