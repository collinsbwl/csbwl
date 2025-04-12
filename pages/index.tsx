import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/About";
import Projects from "@/components/HighlightProj";
import Awards from "@/components/Award";
import Footer from "@/components/FooterBar";
import Rain from "@/animations/Rain";
import Head from "next/head";

export default function Page() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Head>
        <title>Collin Sobowale</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="me.jpeg" />
      </Head>
      <Rain numberOfDrops={75} color="rgba(255, 255, 255, 0.6)" zIndex={999} />

      <NavBar />

      <Container maxW="3xl" centerContent px={4} pt={20} pb={5} gap={6}>
        <AboutMe />
        <Projects />
        <Awards />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
