import React from "react";
import {
  PageContainer,
  Instructions,
  Graph,
  WordInput,
  TargetWord,
  GraphProvider,
} from "./components";

function App() {
  // const [graph, setGraph] = useState({
  //   nodes: [{ id: "a", label: "a" }],
  //   edges: [],
  // });
  // const depths = useRef({}).current;

  // updateDepths(depths, graph.nodes);

  return (
    <PageContainer>
      <GraphProvider>
        <Graph />
        <WordInput />
        <TargetWord />
        <Instructions />
      </GraphProvider>
    </PageContainer>
  );
}

export default App;
