import ReactDOM from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import { ProfilePage } from "../src/Client/ProfilePage";
import { MemoryRouter } from "react-router";

describe("Loading view", () => {
  it("shows username and email on profile", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <ProfilePage username={"Johannes"} email={"Johannes@mail.com"} />
        </MemoryRouter>,
        container
      );
    });

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelectorAll("div")[1].textContent).toEqual(
      "Johannes"
    );
    expect(container.querySelectorAll("div")[2].textContent).toEqual(
      "Johannes@mail.com"
    );
  });
});
