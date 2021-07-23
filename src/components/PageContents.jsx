import { InstructionsController } from "./InstructionsController";
import { Graph } from "./Graph";
import { WordInput } from "./WordInput";
import { TargetWord } from "./TargetWord";

export const PageContents = () => (
  <>
    <Graph />
    <WordInput />
    <TargetWord />
    <InstructionsController />
  </>
);
