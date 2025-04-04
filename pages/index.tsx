import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";
import Header from "@/components/header";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Oldexp from "@/components/oldexp";
import Experience from "@/components/experience";

import Head from "next/head";

export default function Page() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Head>
        <title>Collin Sobowale</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container
        maxWidth="container.lg"
        centerContent
        px={{ base: 4, md: 8, lg: 16 }}
        pt={{ base: 16, md: 20 }}
        gap={5}
      >
        <AboutMe />
        <Experience />
        <Oldexp />
        <Projects />
      </Container>
    </ChakraProvider>
  );
}
