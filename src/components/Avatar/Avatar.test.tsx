import MuiAvatar, { AvatarProps } from "@material-ui/core/Avatar";
import { configure, mount, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-dom/extend-expect";
import React from "react";
import Avatar from "./Avatar";

configure({ adapter: new Adapter() });

function makeProps({
  classes,
  imgProps,
  ...props
}: Partial<AvatarProps> = {}): AvatarProps {
  return {
    classes: {
      root: "TestRoot",
      colorDefault: "TestColorDefault",
      img: "TestImg",
      ...classes
    },
    src: "TestSrc",
    alt: "TestAlt",
    childrenClassName: "TestChildrenClassName",
    imgProps: {
      title: "TestTitle",
      ...imgProps
    },
    ...props
  };
}

function waitComponentUpdate(wrapper: ReactWrapper): Promise<Element> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(wrapper.update().getDOMNode());
    }, 100);
  });
}

test("drop-in replacement of material-ui Avatar when src is not provided", async () => {
  Image.prototype.decode = jest.fn().mockResolvedValue(null);
  const props = makeProps({ src: undefined });

  const avatarWrapper = mount(<Avatar {...props} />);
  const avatarNode = await waitComponentUpdate(avatarWrapper);

  const muiAvatarWrapper = mount(<MuiAvatar {...props} />);
  const muiAvatarNode = muiAvatarWrapper.getDOMNode();

  expect(avatarNode).toEqual(muiAvatarNode);
});

test("drop-in replacement of material-ui Avatar when src is provided and valid", async () => {
  Image.prototype.decode = jest.fn().mockResolvedValue(null);
  const props = makeProps();

  const avatarWrapper = mount(<Avatar {...props} />);
  const avatarNode = await waitComponentUpdate(avatarWrapper);
  // TODO: match it 100% -- but it should require this class to be removed somehow
  avatarNode.classList.remove(
    "MuiAvatar-colorDefault",
    "MuitoAvatar-colorDefault"
  );

  const muiAvatarWrapper = mount(<MuiAvatar {...props} />);
  const muiAvatarNode = muiAvatarWrapper.getDOMNode();

  expect(avatarNode).toEqual(muiAvatarNode);
});

test("fallbacks to blank when src cannot be loaded", async () => {
  Image.prototype.decode = jest.fn().mockRejectedValue(null);
  const props = makeProps();

  const avatarWrapper = mount(<Avatar {...props} />);
  const avatarNode = await waitComponentUpdate(avatarWrapper);

  const muiAvatarWrapper = mount(<MuiAvatar {...props} src={undefined} />);
  const muiAvatarNode = muiAvatarWrapper.getDOMNode();

  expect(avatarNode).toEqual(muiAvatarNode);
});

test("fallbacks to initials when src cannot be loaded and subject is provided", async () => {
  Image.prototype.decode = jest.fn().mockRejectedValue(null);
  const props = makeProps();
  const subject = { name: "Test Subject" };

  const avatarWrapper = mount(<Avatar {...props} subject={subject} />);
  const avatarNode = await waitComponentUpdate(avatarWrapper);

  const muiAvatarWrapper = mount(
    <MuiAvatar
      {...props}
      src={undefined}
      style={{ backgroundColor: "hsl(262, 50%, 70%)" }}
    >
      {"TS"}
    </MuiAvatar>
  );
  const muiAvatarNode = muiAvatarWrapper.getDOMNode();

  expect(avatarNode).toEqual(muiAvatarNode);
});

// // Let's wait until our mocked `get` request promise resolves and
// // the component calls setState and re-renders.
// // getByTestId throws an error if it cannot find an element with the given ID
// // and waitForElement will wait until the callback doesn't throw an error
// const greetingTextNode = await waitForElement(() =>
//   getByTestId('greeting-text'),
// )

// // Assert
// expect(axiosMock.get).toHaveBeenCalledTimes(1)
// expect(axiosMock.get).toHaveBeenCalledWith(url)
// expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
// expect(getByTestId('ok-button')).toHaveAttribute('disabled')
// // snapshots work great with regular DOM nodes!
// expect(container.firstChild).toMatchSnapshot()
// // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
// expect(asFragment()).toMatchSnapshot()
