import React, { useState, useRef } from "react";
import { wordGraph } from "./graphEntries";
import { wordsAreConnected } from "./wordAreConnected";
import { TextField, Button } from '@material-ui/core';


export const WordInput = ({
    setGraph, graph, selectedWord, setSelectedWord, createNode
}) => {
    const [value, setValue] = useState("");
    const ref = useRef();
    const wordIsValid = value in wordGraph;
    const message = wordIsValid
        ? "This word is in the dictionary"
        : "This word is not in the dictionary";
    const onClick = () => {
        const newNode = { id: value, label: value };
        const newEdge = { from: selectedWord, to: value };
        if (selectedWord && wordIsValid && wordsAreConnected(value, selectedWord)) {
            setGraph({
                nodes: [...graph.nodes, newNode],
                edges: [...graph.edges, newEdge]
            })
            setSelectedWord(newNode.id);
        }
        ref.current.blur();
        ref.current.focus();
    };

    return (
        <div>
            <TextField
                margin='normal'
                type='string'
                placeholder="Please enter a word..."
                fullWidth='true'
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                onKeyPress={(ev) => {
                    console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                        onClick();
                        ev.preventDefault();
                    }
                }}
                onFocus={event => {
                    event.target.select();
                }}
                inputRef={ref}
            />
            <div style={{ color: wordIsValid ? "green" : '#d63e13', marginBottom: 8, fontFamily: 'verdana', fontSize: 12 }}>
                {message}
            </div>

            <Button onClick={onClick} variant="outlined" margin='normal'>
                Input node and edge
            </Button>
        </div >
    )
}