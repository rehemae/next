import { Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const IncrementChildrenU5Input = ({ formState, setFormState }) => {
  function increment() {
    return setFormState({
      ...formState,
      childrenUnder5: formState.childrenUnder5 + 1,
    });
  }

  function decrement() {
    if (formState.childrenUnder5 <= 0) {
      setFormState({ ...formState, childrenUnder5: 0 });
      return;
    }
    return setFormState({
      ...formState,
      childrenUnder5: formState.childrenUnder5 - 1,
    });
  }
  return (
    <Box
      display="flex"
      height="45px"
      border="1px solid black"
      alignItems="center"
      padding=" 1em"
      fontSize="2em"
    >
      <Input
        className="no-border"
        placeholder="0"
        required
        onChange={(e) =>
          setFormState({ ...formState, childrenUnder5: e.target.value })
        }
        value={formState.childrenUnder5}
      />
      <Box
        fontSize="30px"
        fontWeight="900"
        w="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button type="button" onClick={increment}>
          +
        </button>
      </Box>
      <Box
        fontSize="30px"
        fontWeight="900"
        w="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button type="button" onClick={decrement}>
          -
        </button>
      </Box>
    </Box>
  );
};

export const IncrementPeopleInput = ({ formState, setFormState }) => {
  function increment() {
    return setFormState({
      ...formState,
      totalPeople: formState.totalPeople + 1,
    });
  }

  function decrement() {
    if (formState.totalPeople <= 0) {
      console.log("menos de cero mano");
      setFormState({ ...formState, totalPeople: 0 });
      return;
    }
    return setFormState({
      ...formState,
      totalPeople: formState.totalPeople - 1,
    });
  }
  return (
    <Box
      display="flex"
      height="45px"
      border="1px solid black"
      alignItems="center"
      padding=" 1em"
      fontSize="2em"
    >
      <Input
        className="no-border"
        placeholder="0"
        required
        onChange={(e) =>
          setFormState({ ...formState, totalPeople: e.target.value })
        }
        value={formState.totalPeople}
      />
      <Box
        fontSize="30px"
        fontWeight="900"
        w="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button type="button" onClick={increment}>
          +
        </button>
      </Box>
      <Box
        fontSize="30px"
        fontWeight="900"
        w="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button type="button" onClick={decrement}>
          -
        </button>
      </Box>
    </Box>
  );
};

export const IncrementChildrenInput = ({ formState, setFormState }) => {
  function increment() {
    return setFormState({
      ...formState,
      totalChildren: formState.totalChildren + 1,
    });
  }

  function decrement() {
    if (formState.totalChildren <= 0) {
      return setFormState({ ...formState, totalChildren: 0 });
    }
    return setFormState({
      ...formState,
      totalChildren: formState.totalChildren - 1,
    });
  }
  return (
    <Box
      display="flex"
      height="45px"
      border="1px solid black"
      alignItems="center"
      padding=" 1em"
      fontSize="2em"
    >
      <Input
        className="no-border"
        placeholder="0"
        required
        onChange={(e) =>
          setFormState({ ...formState, totalChildren: e.target.value })
        }
        value={formState.totalChildren}
      />
      <Box
        fontSize="30px"
        fontWeight="900"
        w="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button type="button" onClick={increment}>
          +
        </button>
      </Box>
      <Box
        fontSize="30px"
        fontWeight="900"
        w="45px"
        height="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button type="button" onClick={decrement}>
          -
        </button>
      </Box>
    </Box>
  );
};
