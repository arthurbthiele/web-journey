import { wordGraph } from "../dictionaryData";
import queue from "queue";

export const updateDepths = (depths, currentGraphNodes) => {
  const nodesToVisit = queue();
  currentGraphNodes.forEach((node) => {
    const word = node.id;
    depths[word] = 0;
    nodesToVisit.push(word);
  });

  while (nodesToVisit.length > 0) {
    const currentWord = nodesToVisit.shift();
    const currentDepth = depths[currentWord];
    const adjacentWords = getAdjacentWords(currentWord);
    adjacentWords.forEach((word) => {
      if (!(word in depths) || depths[word] > currentDepth + 1) {
        depths[word] = currentDepth + 1;
        nodesToVisit.push(word);
      }
    });
  }
};

const getAdjacentWords = (currentWord) => {
  return wordGraph[currentWord];
};
