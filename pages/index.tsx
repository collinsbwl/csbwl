import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";
import Header from "@/components/header";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Awards from "@/components/awards";
import Footer from "@/components/footer";
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
        <Header />

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
