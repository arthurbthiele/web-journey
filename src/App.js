import React, { useState } from "react";
import { Graph } from "./Graph";
import { WordInput } from "./WordInput";
import { Container } from '@material-ui/core'
import { initialiseDepths, updateDepths } from "./wordDepths";
import { TargetWord } from "./TargetWord";



function App() {

  const [graph, setGraph] = useState({
    nodes: [{ id: "a", label: "a" }],
    edges: []
  });
  const [selectedWord, setSelectedWord] = useState("a");

  const [depths, setDepths] = useState(initialiseDepths());
  updateDepths(depths, graph.nodes);

  return (
    <div style={{ width: window.innerWidth, height: window.innerHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <div style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}>
        <Graph
          graph={graph}
          setSelectedWord={setSelectedWord}
          selectedWord={selectedWord}
        />
        <div style={{ position: 'absolute', left: 16, top: 16 }}>
          <WordInput
            setGraph={setGraph}
            graph={graph}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
          />
        </div>

        <div style={{ position: 'absolute', right: 16, top: 16 }}>
          <TargetWord depths={depths} graph={graph} />
        </div>

      </div>
    </div >
  );
}

export default App;
