import { EditUser } from "../src/Client/EditUser";
import ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";
import { ListUsers } from "../src/Client/ListUsers";

describe("edit user page", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => ({}),
    })
  );

  it("Snapshot", () => {
    const container = document.createElement("div");
    act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <EditUser />
        </MemoryRouter>,
        container
      );
    });

    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should call fetch", () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("should show an error if api is down", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    const container = document.createElement("div");
    await act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <ListUsers />
        </MemoryRouter>,
        container
      );
    });
    expect(container.querySelector("div").textContent).toContain(
      "An error has occurred:"
    );
  });
});
