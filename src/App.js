import React, { useState, useMemo } from "react";
import { Graph } from "./Graph";
import { WordInput } from "./WordInput";
import { initialiseDepths, updateDepths } from "./wordDepths";
import { TargetWord } from "./TargetWord";

function App() {
  const [graph, setGraph] = useState({
    nodes: [{ id: "a", label: "a" }],
    edges: [],
  });
  const [selectedWord, setSelectedWord] = useState("a");
  const depths = useMemo(initialiseDepths, []);

  updateDepths(depths, graph.nodes);

  return (
    <div
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <Graph
          graph={graph}
          setSelectedWord={setSelectedWord}
          selectedWord={selectedWord}
        />
        <div style={{ position: "absolute", left: 16, top: 16 }}>
          <WordInput
            setGraph={setGraph}
            graph={graph}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
          />
        </div>

        <div style={{ position: "absolute", right: 16, top: 16 }}>
          <TargetWord depths={depths} graph={graph} />
        </div>

        <div style={{ position: "absolute", left: 16, bottom: 16 }}>
          <div
            style={{
              marginBottom: 8,
              fontFamily: "verdana",
              fontSize: 14,
              width: 228,
            }}
          >
            Select a word, and type in a 'connected' word - one which differs by
            the adding, removing or swapping of one letter. <br />
            Art → cart by addition <br />
            Art → at by removal <br />
            Art → ant by swap <br />
            Try starting by inserting the word 'at'!
            <div style={{ marginTop: 8, color: "#333333", fontSize: 12 }}>
              Created by Arthur Thiele, © 2021.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
