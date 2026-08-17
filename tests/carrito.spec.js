const { test, expect } = require('@playwright/test');

test('Agregar dos productos, eliminar uno y verificar carrito en 1', async ({ page }) => {

    // Abrir la página
    await page.goto('https://www.saucedemo.com/');

    // Iniciar sesión
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Agregar primer producto
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Agregar segundo producto
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Verificar que hay 2 productos
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // Entrar al carrito
    await page.locator('.shopping_cart_link').click();

    // Eliminar un producto
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Verificar que quede solamente 1
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});