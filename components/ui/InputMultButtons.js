import { Box } from "@chakra-ui/react";
import { useState } from "react";
import UiButton from "./Button";

const InputMultButtons = ({ formState, setFormState, data }) => {
  const [active, setActive] = useState("");

  function handleClickOption(e) {
    setActive(e.target.value);
    console.log(e.target.value);
    setFormState({ ...formState, [`${data}`]: e.target.value });
  }
  return (
    <Box margin="">
      <Box visibility="hidden" h="1px">
        <input
          required
          defaultValue={formState[`${data}`]}
          style={{ height: "1px" }}
        />
      </Box>
      <Box
        display="flex"
        className="group-response-buttons"
        justifyContent="center"
      >
        <UiButton
          className={active === "YES" ? "selected" : ""}
          type="button"
          value="YES"
          onClick={(e) => handleClickOption(e)}
        />
        <UiButton
          className={active === "NO" ? "selected" : ""}
          type="button"
          value="NO"
          onClick={(e) => handleClickOption(e)}
        />
        <UiButton
          className={active === "UNSURE" ? "selected" : ""}
          type="button"
          value="UNSURE"
          onClick={(e) => handleClickOption(e)}
        />
      </Box>
    </Box>
  );
};

export default InputMultButtons;
