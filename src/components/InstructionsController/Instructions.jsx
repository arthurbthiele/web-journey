import { fonts } from "../../assets";
import { Text } from "../Text";
export const Instructions = () => (
  <div>
    <Text
      style={{
        marginBottom: 8,
        width: 228,
      }}
    >
      Try starting by clicking the blue 'a' to select it, then typing the word
      'at' in the input field at top left. <br />
      You can input other words by clicking the source word to select it. <br />
      Words are deemed 'connected' if they differ by the addition, removal or
      exchange of one letter. <br />
      Art → cart, by addition <br />
      Art → at, by removal <br />
      Art → ant, by exchange <br />
      <Text style={{ ...fonts.secondary.footer, marginTop: 8 }}>
        Created by Arthur Thiele, © 2021.
      </Text>
    </Text>
  </div>
);
