import React from "react";
import ReactDOM from "react-dom";
import AlbumImages from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders Album Images wihtout crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AlbumImages></AlbumImages>, div);
});

it("renders Album Images correctly", () => {
  const { getByTestId } = render(
    <AlbumImages thumbnailUrl="https://via.placeholder.com/150/92c952" />
  );

  expect(getByTestId("albumImages")).toBeVisible();
});
