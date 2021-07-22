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
