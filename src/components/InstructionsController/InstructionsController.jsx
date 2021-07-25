import { useState } from "react";
import { Instructions } from "./Instructions";
import { ShowInstructionsButton } from "./ShowInstructionsButton";

export const InstructionsController = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const toggleShowInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div style={{ position: "absolute", left: 16, bottom: 16 }}>
      {showInstructions && <Instructions />}
      <ShowInstructionsButton
        onClick={toggleShowInstructions}
        pressed={showInstructions}
      />
    </div>
  );
};
