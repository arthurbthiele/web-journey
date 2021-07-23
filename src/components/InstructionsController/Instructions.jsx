export const Instructions = () => (
  <div>
    <div
      style={{
        marginBottom: 8,
        fontFamily: "verdana",
        fontSize: 14,
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
      <div style={{ marginTop: 8, color: "#333333", fontSize: 12 }}>
        Created by Arthur Thiele, © 2021.
      </div>
    </div>
  </div>
);
