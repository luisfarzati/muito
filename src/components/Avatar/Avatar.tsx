import {
  AvatarProps as MuiAvatarProps,
  default as MuiAvatar
} from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import {
  default as React,
  FunctionComponent,
  useEffect,
  useState
} from "react";

type AvatarProps = MuiAvatarProps & {
  subject?: {
    name: string;
  };
};

function initials(name: string = "") {
  const [first, ...rest] = name
    .toUpperCase()
    .trim()
    .split(" ");
  const last = rest.pop() || "";
  return `${first[0] || " "}${last[0] || " "}`.trim();
}

function toHsl(str = "", s = 50, l = 70) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

const styles = {
  colorDefault: {
    backgroundColor: "inherit"
  }
};

const useStyles = makeStyles(() => styles, { name: "MuitoAvatar" });

const Avatar: FunctionComponent<AvatarProps> = ({
  src,
  alt,
  classes = {},
  imgProps,
  childrenClassName,
  subject = { name: "" },
  ...props
}) => {
  const [showImage, setShowImage] = useState(false);
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    async function load() {
      const image = new Image();

      if (Image.prototype.decode) {
        image.src = src!;
        try {
          await image.decode();
          setShowImage(true);
        } catch (error) {
          setShowInitials(true);
        }
      } else {
        image.onload = () => setShowImage(true);
        image.onerror = () => setShowInitials(true);
        image.src = src!;
      }
    }

    if (src) {
      load();
    } else if (subject) {
      setShowInitials(true);
    }
  }, []);

  const styles = useStyles();

  return (
    <MuiAvatar
      classes={{
        root: classes.root,
        ...(showImage
          ? { colorDefault: styles.colorDefault }
          : { colorDefault: classes.colorDefault })
      }}
      style={
        showImage || !subject.name
          ? {}
          : { backgroundColor: toHsl(subject.name) }
      }
      {...props}
    >
      {showImage && (
        <img
          src={src}
          alt={alt}
          className={`MuiAvatar-img ${classes.img || ""}`}
          {...imgProps}
        />
      )}
      {(showInitials && initials(subject.name)) || null}
    </MuiAvatar>
  );
};

export default Avatar;
