import React, { useState, useRef } from "react";
import { updateDepths } from "../utilities/wordDepths";

export const GraphContext = React.createContext();

export const GraphProvider = ({ children }) => {
  const [selectedWord, setSelectedWord] = useState("a");
  const [graph, setGraph] = useState({
    nodes: [{ id: "a", label: "a" }],
    edges: [],
  });
  const depths = useRef({}).current;

  updateDepths(depths, graph.nodes);

  return (
    <GraphContext.Provider
      value={{ selectedWord, setSelectedWord, graph, setGraph, depths }}
    >
      {children}
    </GraphContext.Provider>
  );
};
