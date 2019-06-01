import { storiesOf } from "@storybook/react";
import React from "react";
import Avatar from "../components/Avatar/Avatar";

const stories = storiesOf("Avatar", module);

stories.add("default", () => {
  return <Avatar />;
});

stories.add("with valid src", () => {
  return (
    <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABkCAMAAACCTv/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA5ubmSUUG+gAAAAJ0Uk5T/wDltzBKAAAAPklEQVR42uzYQQ0AAAgDseHfNC4IyVoD912WAACUm3uampqampqamq+aAAD+IVtTU1NTU1NT0z8EAFBsBRgAX+kR+Qam138AAAAASUVORK5CYII=" />
  );
});

stories.add("with broken src", () => {
  return <Avatar src="invalid.png" />;
});

stories.add("with initials", () => {
  return <Avatar src="invalid.png" subject={{ name: "Sarah Connor" }} />;
});
