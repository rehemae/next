import { Button, ButtonGroup } from "@chakra-ui/react";

const UiButton = ({ value, children, ...props }) => {
  return (
    <Button value={value} {...props} w="20vw" m="15px">
      {children || value}
    </Button>
  );
};

export default UiButton;
