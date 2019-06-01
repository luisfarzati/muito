import { storiesOf } from "@storybook/react";
import React from "react";
import Avatar from "../components/Avatar/Avatar";

const stories = storiesOf("Avatar", module);

stories.add("default", () => {
  return <Avatar />;
});

stories.add("with valid src", () => {
  return <Avatar src="https://avatars2.githubusercontent.com/u/107509?v=4" />;
});

stories.add("with broken src", () => {
  return <Avatar src="invalid.png" />;
});

stories.add("with initials", () => {
  return <Avatar src="invalid.png" subject={{ name: "Sarah Connor" }} />;
});
