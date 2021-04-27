import { LoadingView } from "../src/Client/LoadingView";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";

describe("Loading view", () => {
  it("shows loading view", () => {
    const view = TestRenderer.create(<LoadingView />);
    expect(view.toJSON()).toMatchSnapshot();
  });

  it("shows loading view on dom", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<LoadingView />, container);
    });

    expect(container.innerHTML).toMatchSnapshot();
  });
});
