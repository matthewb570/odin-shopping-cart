import { beforeAll, afterEach, afterAll, test, expect, describe } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import server from "./mocks/server";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import RouterConfig from "../router/RouterConfig";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

describe("Shop item card quantity management", () => {
  test("Shop item card quantity increases when clicking the increase quantity button", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);

    const btnIncreaseQuantity = screen.getAllByRole("button", {
      name: "Increase quantity",
    })[0];
    const txtQuantity = screen.getAllByRole("spinbutton", {
      name: "Quantity",
    })[0];

    await user.click(btnIncreaseQuantity);

    expect(txtQuantity).toHaveValue(1);
  });

  test("Shop item card quantity decreases when clicking the decrease quantity button", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);

    const btnIncreaseQuantity = screen.getAllByRole("button", {
      name: "Increase quantity",
    })[0];
    const btnDecreaseQuantity = screen.getAllByRole("button", {
      name: "Decrease quantity",
    })[0];
    const txtQuantity = screen.getAllByRole("spinbutton", {
      name: "Quantity",
    })[0];

    await user.click(btnIncreaseQuantity);
    expect(txtQuantity).toHaveValue(1);

    await user.click(btnDecreaseQuantity);
    expect(txtQuantity).toHaveValue(0);
  });

  test("Shop item card quantity does not decrease when clicking the decrease quantity button when quantity is already 0", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);

    const btnDecreaseQuantity = screen.getAllByRole("button", {
      name: "Decrease quantity",
    })[0];
    const txtQuantity = screen.getAllByRole("spinbutton", {
      name: "Quantity",
    })[0];

    expect(txtQuantity).toHaveValue(0);

    await user.click(btnDecreaseQuantity);
    expect(txtQuantity).toHaveValue(0);
  });
});

describe("Cart management", () => {
  test("Cart button quantity badge indicates no items in cart when the cart is empty", () => {
    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);
    expect(
      screen.getAllByRole("generic", {
        name: /^0 unique products in your cart$/i,
      })[0],
    ).toBeInTheDocument();
  });
  test("Cart header shows 0 items in cart when the cart is empty", () => {
    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);
    expect(
      screen.getByRole("heading", { name: /^shopping cart \(0\)$/i }),
    ).toBeInTheDocument();
  });
  test("Checkout button is hidden when the cart is empty", () => {
    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);
    expect(
      screen.queryByRole("button", { name: /proceed to checkout/i }),
    ).toBeNull();
  });
  //
  test("Cart button displays quantity badge with value 1 when 1 item is added to the cart", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);
    await addFirstProductToCart(user);

    expect(
      screen.getAllByRole("generic", {
        name: /^1 unique product in your cart$/i,
      })[0],
    ).toBeInTheDocument();
  });

  test("Cart header shows 1 item in cart when 1 item is added to the cart", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);
    await addFirstProductToCart(user);

    expect(
      screen.getByRole("heading", { name: /^shopping cart \(1\)$/i }),
    ).toBeInTheDocument();
  });

  test("Shop item is displayed in cart with correct quantity when 1 item is added to the cart", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);
    await addFirstProductToCart(user);

    const listCart = screen.getByRole("list", { name: /^cart items$/i });

    expect(
      within(listCart).getByRole("heading", {
        name: /^bedside table african cherry - \$299.99 each$/i,
      }),
    ).toBeInTheDocument();

    const txtCartItemQuantity = within(listCart).getByRole("spinbutton", {
      name: /^quantity$/i,
    });
    expect(txtCartItemQuantity).toHaveValue(1);
  });

  test("Checkout button displays with correct subtotal when 1 item is added to the cart", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);
    await addFirstProductToCart(user);

    expect(
      screen.getByRole("button", {
        name: /^proceed to checkout \(\$299.99\)$/i,
      }),
    ).toBeInTheDocument();
  });

  test("Checkout button displays with correct subtotal when 1 item is added to the cart with quantity of 2", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={createMemoryRouter(RouterConfig.routes)} />);

    await navigateToShopPage(user);
    await addFirstProductToCart(user, 2);

    expect(
      screen.getByRole("button", {
        name: /^proceed to checkout \(\$599.98\)$/i,
      }),
    ).toBeInTheDocument();
  });
});

async function navigateToShopPage(user) {
  const linkStartShopping = screen.getByRole("link", {
    name: "Start Shopping",
  });
  await user.click(linkStartShopping);
}

async function addFirstProductToCart(user, quantity = 1) {
  const listProducts = screen.getByRole("list", { name: /^shop products$/i });
  const listitemFirstProduct = within(listProducts).getAllByRole("listitem")[0];
  const btnIncreaseQuantity = within(listitemFirstProduct).getByRole("button", {
    name: /^increase quantity$/i,
  });
  const btnAddToCart = within(listitemFirstProduct).getByRole("button", {
    name: /^add to cart$/i,
  });

  for (let i = 0; i < quantity; i++) {
    await user.click(btnIncreaseQuantity);
  }
  await user.click(btnAddToCart);
}
