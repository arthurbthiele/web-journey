# Word Journey

A simple game implemented as an exercise to learn React.

Currently hosted at [Github Pages](https://arthurbthiele.github.io/word-journey/)

## Getting Started

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `yarn deploy`

Uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package to deploy the project to Github.

## Project Design

The game centres around word 'connections'. Two words are deemed 'connected' if one can be transformed into the other by:

- removing a letter (for example, cat → at)
- adding a letter (for example, cat → cart)
- exchanging a letter for a different letter (for example, cat → bat)

The symmetric relation 'connected' creates a graph structure on arbitrary collections of words. The source dictionary for this particular game comes from the [List of the Most Common English Words](https://github.com/dolph/dictionary). I chose this dictionary to include most common words while excluding obvious non-words, like 'nonly'. This does mean, however, that some reasonably common words, like 'badger' or 'hexagon' may not be in this dictionary. Suggestions for how to include all 'real words' while not including obvious non-words are appreciated.

Since the game centres around connections, I have only included words that are reachable by some chain of connections from the letter 'a'. This is the largest connected component of the graph defined by the 'connected' relation and the chosen dictionary, and contains 9423 words. Trivia: the shortest word which is not in this cluster is the word 'ebb', which is the only unreachable word with 3 letters.

The list of words I am using in this project is in the `dictionaryData` folder, in the form of a JavaScript object with keys being the word, and values being all words which are connected to the key by the relation described above. For compatibility with some packages, this dictionary is stored in 26 sub-files, organised by first letter.

## Package Choices

The core component of this project is rendered with the [`react-graph-vis`](https://www.npmjs.com/package/react-graph-vis) package.
Buttons and text-fields are build with the [`material-ui`](https://material-ui.com/) framework.
