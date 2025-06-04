import { beforeAll, afterEach, afterAll, test, expect, describe } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
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

// describe("Cart management", () => {
//   test("", async () => {
//     render(<RouterProvider router={RouterConfig.router} />);
//     expect(
//       screen.getByRole("link", { name: "Start Shopping", hidden: false }),
//     ).toBeInTheDocument();
//   });
// });

async function navigateToShopPage(user) {
  const linkStartShopping = screen.getByRole("link", {
    name: "Start Shopping",
  });
  await user.click(linkStartShopping);
}
