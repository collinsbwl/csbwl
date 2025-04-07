import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";
import Click from "@/components/ui/ClickSpark";

import Head from "next/head";

export default function Page() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Head>
        <title>Collin Sobowale</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="me.jpeg" />
      </Head>
      <Click
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <NavBar />

        <Container maxW="3xl" centerContent px={4} pt={20} pb={5} gap={6}>
          <AboutMe />
          <Projects />
          <Awards />
          <Footer />
        </Container>
      </Click>
    </ChakraProvider>
  );
}
