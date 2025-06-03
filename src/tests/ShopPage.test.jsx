import { beforeAll, afterEach, afterAll, test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import server from "./mocks/server";
import { RouterProvider } from "react-router";
import RouterConfig from "../router/RouterConfig";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Test", () => {
  test("Initial test", async () => {
    render(<RouterProvider router={RouterConfig.router} />);
    expect(
      screen.getByRole("link", { name: "Start Shopping", hidden: false }),
    ).toBeInTheDocument();
  });
});
