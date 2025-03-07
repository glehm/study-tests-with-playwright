import { test, expect } from "@playwright/test";

test("Login to SauceDemo website", async ({ page }) => {
  const username = process.env.USER_NAME || 'defaultUsername';
  const password = process.env.PASSWORD || 'defaultPassword';

  // Navegar até a página inicial do site
  await page.goto("https://www.saucedemo.com/");

  // Preencher o campo de login
  await page.fill("input#user-name", username);

  // Preencher o campo de senha
  await page.fill("input#password", password);

  // Clicar no botão de login
  await page.click("input#login-button");

  // Verificar se a URL mudou para a página inicial depois do login
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // Verificar se o título da página contém o texto esperado
  await expect(page).toHaveTitle(/Swag Labs/);

  // Clicar no botão "Adicionar ao carrinho" para o item "Sauce Labs Backpack"
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Clicar no link do carrinho de compras para visualizar os itens adicionados
  await page.click('[data-test="shopping-cart-link"]');

  // Verifica se a URL atual é a página do carrinho
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});