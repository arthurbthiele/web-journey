import React, { useState } from "react";
import { Button } from '@material-ui/core';


export const TargetWord = ({ depths, graph }) => {
  const [target, setTarget] = useState();
  const [difficultyLevel, setDifficultyLevel] = useState(3);

  const updateTarget = (difficultyLevel) => {
    console.log(difficultyLevel);
    const wordsOfThisDepth = Object.keys(depths).filter(
      (word) => depths[word] === difficultyLevel
    );
    if (wordsOfThisDepth.length > 0) {
      const choiceIndex = Math.floor(Math.random() * wordsOfThisDepth.length);
      setTarget(wordsOfThisDepth[choiceIndex]);
    } else {
      setTarget("There are no words of this depth");
    }
  };

  if (!target || graph.nodes.map((n) => n.id).includes(target)) {
    updateTarget(difficultyLevel);
  }

  const onPlus = () => {
    if (difficultyLevel < 15) {
      updateTarget(difficultyLevel + 1);
      setDifficultyLevel(difficultyLevel + 1);
    }
  };
  const onMinus = () => {
    if (difficultyLevel > 1) {
      updateTarget(difficultyLevel - 1);
      setDifficultyLevel(difficultyLevel - 1);
    }
  };
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
          display: "inline-flex"
        }}
      >
        <div>
          <Button onClick={onMinus}
            variant="outlined"
            color="primary"
            style={{ margin: 8 }}
            size='small'
          >
            -
        </Button>
        </div>
        <div
          variant="outlined"
          color="primary"
          style={{ margin: 8, fontFamily: 'verdana', fontSize: 16 }}>
          Current difficulty: {difficultyLevel}
        </div>
        <div>
          <Button onClick={onPlus}
            variant="outlined"
            color="primary"
            style={{ margin: 8 }}
            size='small'
          >
            +
        </Button>
        </div>

      </div>
      <div
        style={{ textAlign: 'center', fontFamily: 'verdana', fontSize: 12 }}
      >
        Try finding the word:
        <div style={{ color: '#d63e13', fontFamily: 'verdana', fontSize: 16, textTransform: 'uppercase' }}>{target}</div>
      </div>
    </div >
  );
};
