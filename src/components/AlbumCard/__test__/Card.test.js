import React from "react";
import ReactDOM from "react-dom";
import AlbumCard from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders Album Card wihtout crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AlbumCard></AlbumCard>, div);
});

it("renders Album Card correctly", () => {
  const { getByTestId } = render(
    <AlbumCard
      title="Album Title"
      User={{ name: "album 1", email: "test@test.com", website: "test.com" }}
    />
  );

  expect(getByTestId("album")).toHaveTextContent("Album Title");
});
