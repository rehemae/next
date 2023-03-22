import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

/* const Layout = ({ children, ...props }) => { */
const Layout = ({ children }) => {
  /*   return <div {...props}>{children}</div>; */
  return (
    <>
      <Header />
      <Box className="">{children}</Box>
      {/*  <Footer /> */}
    </>
  );
};

export default Layout;
