import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    showPanel: false
  }
});

addDecorator(
  withInfo({
    inline: true,
    maxPropsIntoLine: 1
  })
);

configure(loadStories, module);
