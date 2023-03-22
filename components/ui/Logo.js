import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ size }) => {
  return (
    <Box p="1em">
      <Link href="/">
        <Box w={size} h={size} position="relative">
          <Image
            style={{ objectFit: "contain" }}
            fill
            src="/logo.png"
            alt="logo"
            sizes={size}
            priority
          />
        </Box>
      </Link>
    </Box>
  );
};

export default Logo;
