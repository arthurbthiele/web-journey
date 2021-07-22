export const Instructions = () => (
  <div style={{ position: "absolute", left: 16, bottom: 16 }}>
    <div
      style={{
        marginBottom: 8,
        fontFamily: "verdana",
        fontSize: 14,
        width: 228,
      }}
    >
      Select a word, and type in a 'connected' word - one which differs by the
      adding, removing or swapping of one letter. <br />
      Art → cart by addition <br />
      Art → at by removal <br />
      Art → ant by swap <br />
      Try starting by inserting the word 'at'!
      <div style={{ marginTop: 8, color: "#333333", fontSize: 12 }}>
        Created by Arthur Thiele, © 2021.
      </div>
    </div>
  </div>
);
