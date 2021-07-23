import { Button } from "@material-ui/core";
import { colors } from "../../assets/colors";

export const ShowInstructionsButton = ({ onClick, pressed }) => (
  <Button
    onClick={onClick}
    variant="outlined"
    margin="normal"
    style={{ backgroundColor: pressed ? colors.darkBlue : colors.lightBlue }}
  >
    Instructions
  </Button>
);
