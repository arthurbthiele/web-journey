import { fonts } from "../assets/fonts";

export const Text = ({ style, children }) => (
  <div style={{ ...fonts.primary.small, ...style }}>{children}</div>
);
