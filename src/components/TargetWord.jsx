import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import { GraphContext } from "./GraphProvider";

export const TargetWord = () => {
  const [target, setTarget] = useState();
  const [difficultyLevel, setDifficultyLevel] = useState(3);
  const [score, setScore] = useState(0);
  const { graph, depths } = useContext(GraphContext);
  const minDifficulty = 1;
  const maxDifficulty = 15;

  const updateTarget = (difficultyLevel) => {
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

  if (graph.nodes.map((n) => n.id).includes(target)) {
    setScore(score + difficultyLevel ** 2);
  }

  if (!target || graph.nodes.map((n) => n.id).includes(target)) {
    updateTarget(difficultyLevel);
  }

  const onPlus = () => {
    if (difficultyLevel < maxDifficulty) {
      updateTarget(difficultyLevel + 1);
      setDifficultyLevel(difficultyLevel + 1);
    }
  };
  const onMinus = () => {
    if (difficultyLevel > minDifficulty) {
      updateTarget(difficultyLevel - 1);
      setDifficultyLevel(difficultyLevel - 1);
    }
  };

  return (
    <div style={{ position: "absolute", right: 16, top: 16 }}>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
          display: "inline-flex",
        }}
      >
        <div>
          <Button
            onClick={onMinus}
            variant="outlined"
            color="primary"
            style={{ margin: 8 }}
            size="small"
          >
            -
          </Button>
        </div>
        <div
          variant="outlined"
          color="primary"
          style={{ margin: 8, fontFamily: "verdana", fontSize: 16 }}
        >
          Current difficulty: {difficultyLevel}
        </div>
        <div>
          <Button
            onClick={onPlus}
            variant="outlined"
            color="primary"
            style={{ margin: 8 }}
            size="small"
          >
            +
          </Button>
        </div>
      </div>
      <div style={{ textAlign: "center", fontFamily: "verdana", fontSize: 14 }}>
        Try finding the word:
        <div
          style={{
            color: "#d63e13",
            fontFamily: "verdana",
            fontSize: 20,
            textTransform: "uppercase",
            marginTop: 4,
          }}
        >
          {target}
        </div>
        <div>Your score is: {score}</div>
      </div>
    </div>
  );
};
