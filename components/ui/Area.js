import { Textarea } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const UiArea = ({ required, label, children, ...props }) => {
  return (
    <Box h="45px" mb="15px">
      <label>
        {" "}
        {label}
        <Textarea required {...props}>
          {children}
        </Textarea>
      </label>
    </Box>
  );
};

export default UiArea;
