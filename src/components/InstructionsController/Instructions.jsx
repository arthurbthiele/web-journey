import { fonts } from "../../assets";
import { Text } from "../Text";
export const Instructions = () => (
  <div>
    <Text
      style={{
        marginBottom: 8,
        width: 500,
        border: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
        padding: 5,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <p>
        Try starting by clicking the blue 'a' to select it, then typing the word
        'at' in the input field at top left, and pressing enter.{" "}
      </p>
      <p>
        Click any word to select it. You can see that it is selected if the text
        of the word is bold.{" "}
      </p>
      Then type a word that is 'connected' to that word, and press enter. <br />
      Words are deemed 'connected' if they differ by the addition, removal or
      exchange of one letter: <br />
      Art → cart, by addition <br />
      Art → at, by removal <br />
      Art → ant, by exchange <br />
      The goal is to reach the target words (displayed in the top right corner)
      to increase your score. You can adjust the difficulty using the 'plus' and
      'minus' buttons. <br />
      Zoom in and out on the graph by scrolling. If you get lost or want to
      recentre, double click anywhere. <br />
      Your score increases by the square of your current difficulty whenever you
      reach a target word, so challenge yourself! <br />
      You can close these instructions by clicking the instructions button
      below. <br />
      Please send feedback or comments to arthurbthiele@gmail.com, or use{" "}
      <a href="https://forms.gle/KmDLHJ3Mas3kzcjz7">this form</a> to suggest
      word additions or removals:
      <Text style={{ ...fonts.secondary.footer, marginTop: 8 }}>
        Created by Arthur Thiele, © 2021.
      </Text>
    </Text>
  </div>
);
