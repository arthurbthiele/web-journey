import { useState } from "react";
import { Instructions } from "./Instructions";
import { ShowInstructionsButton } from "./ShowInstructionsButton";

export const InstructionsController = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const onClick = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div style={{ position: "absolute", left: 16, bottom: 16 }}>
      {showInstructions && <Instructions />}
      <ShowInstructionsButton onClick={onClick} pressed={showInstructions} />
    </div>
  );
};
