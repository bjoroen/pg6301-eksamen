import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router";
import { FrontPage } from "../src/Client/FrontPage";

describe("should show error when api is down", () => {
  global.fetch = jest.fn();

  it("should show loading view ", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <FrontPage />
        </MemoryRouter>,
        container
      );

      expect(container.innerHTML).toMatchSnapshot();
      expect(container.querySelector("div").textContent).toContain(
        "Loading..."
      );
    });
  });
});
