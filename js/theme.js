import { themes } from "mdx-deck";
import produce from "immer";
import { dracula } from "@code-surfer/themes";

const colors = {
  background: "#1c2033",
  primary: "#32C850",
  text: "#fff"
};

export default produce(themes.swiss, draft => {
  draft.colors = colors;

  draft.fonts = {
    body: "Circular Std Book, arial, sans-serif"
  }

  draft.styles = {
    title: {
      color: "primary"
    },
    subtitle: {
      color: "primary"
    }
  }
});

export const veganDracula = produce(dracula, draft => {
  draft.styles.CodeSurfer.pre.backgroundColor = colors.background;
  draft.styles.CodeSurfer.code.backgroundColor = colors.background;
  draft.styles.CodeSurfer.title = {
    overflow: 'visible',
    backgroundColor: colors.background,
    fontStyle: "italic"
  };
  draft.styles.CodeSurfer.subtitle.backgroundColor = colors.background;
});
