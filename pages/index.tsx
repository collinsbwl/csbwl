import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";
import Header from "@/components/header";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

import { Button, HStack } from "@chakra-ui/react";
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
      <Container maxWidth="container.lg" centerContent pt={20} mr={40} ml={40} gap={5}>
        <AboutMe />
        <Experience />
        <Projects />
      </Container>
    </ChakraProvider>
  )
}
