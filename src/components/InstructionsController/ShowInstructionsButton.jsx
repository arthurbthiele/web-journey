import { Button } from "@material-ui/core";

export const ShowInstructionsButton = ({ onClick, pressed }) => (
  <Button
    onClick={onClick}
    variant="outlined"
    margin="normal"
    style={{ backgroundColor: pressed ? "#AECEDF" : "#C7EBFF" }}
  >
    Instructions
  </Button>
);
