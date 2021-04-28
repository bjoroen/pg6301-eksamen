import { EditUser } from "../src/Client/EditUser";
import ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";
import { ListUsers } from "../src/Client/ListUsers";

describe("List user tests", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          username: "Thomas",
          password: "Bra",
          email: "hello@world.no",
          id: 1,
        }),
    })
  );

  it("should show error", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    const container = document.createElement("div");
    document.body.appendChild(container);
    await act(async () => {
      ReactDOM.render(
        <MemoryRouter>
          <ListUsers />
        </MemoryRouter>,
        container
      );
    });

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("div").textContent).toContain(
      "An error has occurred:"
    );
  });

  it("should call fetch", () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
