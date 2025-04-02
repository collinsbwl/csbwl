import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";
import Header from "@/components/header";
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
      <Container maxWidth="container.xl" centerContent>
        <Header />
        <h1>Hello, Next.js!</h1>
      </Container>
    </ChakraProvider>
  );
}
