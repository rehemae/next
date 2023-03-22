import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Logo from "./Logo";

const Header = () => {
  return (
    <Flex as="header" alignItems="center">
      <Logo size="8vh" />
      <nav>
        <div>icon</div>
        <div>menudesktop</div>
      </nav>
    </Flex>
  );
};

export default Header;
