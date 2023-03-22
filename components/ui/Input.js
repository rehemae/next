import { Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const UiInput = ({ required, label, children, ...props }) => {
  return (
    <Box h="45px" mb="15px">
      <label>
        {" "}
        {label}
        <Input required {...props}>
          {children}
        </Input>
      </label>
    </Box>
  );
};

export default UiInput;
