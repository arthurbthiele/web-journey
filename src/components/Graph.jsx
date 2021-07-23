import GraphVis from "react-graph-vis";
import React, { useState, useContext } from "react";
import { GraphContext } from "./GraphProvider";

const options = {
  edges: {
    arrows: {
      to: false,
    },
  },
  interaction: {
    zoomView: false,
  },
};
const dimensionsToKey = (x, y) => `x${x}y${y}`;

export const Graph = () => {
  const { selectedWord, setSelectedWord, graph } = useContext(GraphContext);

  const [network, setNetwork] = useState();
  const setNetworkInstance = (nw) => {
    setNetwork(nw);
  };
  const events = {
    select: (event) => {
      setSelectedWord(event.nodes[0]);
    },
    afterDrawing: () => {
      if (selectedWord && selectedWord !== network?.getSelectedNodes()[0]) {
        network?.setSelection({ nodes: [selectedWord] });
        network?.fit({
          minZoomLevel: 0.5,
          maxZoomLevel: 2,
          animation: {
            duration: 300,
          },
        });
      }
    },
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GraphVis
        graph={graph}
        options={options}
        events={events}
        getNetwork={setNetworkInstance}
        id={graph.edges.length}
        key={dimensionsToKey(window.innerWidth, window.innerHeight)}
      />
    </div>
  );
};
