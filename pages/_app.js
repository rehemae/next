import "../styles/globals.css";
import Layout from "../components/ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    // no hay surveys en localstorage => crea el array
    if (localStorage.getItem("surveys")) {
      //...
    } else {
      const nextSurveys = surveys;
      localStorage.setItem("surveys", JSON.stringify(nextSurveys));
    }
    // array existente
  }, [surveys]);

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
