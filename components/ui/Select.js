import { Box, Select } from "@chakra-ui/react";

const UiSelect = ({ required, placeholder, options, ...props }) => {
  return (
    <Box>
      <label htmlFor={placeholder}>
        {placeholder} {required ? "*" : ""}
        <Select id={placeholder} {...props} required>
          <option defaultValue="">please select an option</option>
          {options.map((opt, i) => {
            return (
              <option key={i} value={opt}>
                {" "}
                {opt}{" "}
              </option>
            );
          })}
        </Select>
      </label>
    </Box>
  );
};

export default UiSelect;
