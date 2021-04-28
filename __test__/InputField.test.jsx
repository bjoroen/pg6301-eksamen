import ReactDOM from "react-dom";
import React from "react";
import { act, Simulate } from "react-dom/test-utils";
import { InputField } from "../src/Client/InputField";
import { MemoryRouter } from "react-router";

describe("Input fields", () => {
  it("gets loaded", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <InputField label={"age"} />
        </MemoryRouter>,
        container
      );
    });

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelectorAll("input").length).toBe(1);
  });
});
