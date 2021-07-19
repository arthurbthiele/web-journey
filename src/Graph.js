import GraphVis from "react-graph-vis";
import React, { useState } from "react";

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

export const Graph = ({ graph, setSelectedWord, selectedWord, style }) => {
  const [network, setNetwork] = useState();
  const setNetworkInstance = (nw) => {
    setNetwork(nw);
  };

  const events = {
    select: (event) => {
      if (event.nodes[0]?.id || event.nodes[0])
        setSelectedWord(event.nodes[0]?.id || event.nodes[0]);
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
        selectedNodes={[selectedWord]}
        getNetwork={setNetworkInstance}
        id={graph.edges.length}
      />
    </div>
  );
};
