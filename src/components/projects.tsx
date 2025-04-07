import { Heading, Box, Stack, Flex, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FadeIn } from "animations/fade-in";
import HoverImageCard from "./ui/cards";

const projects: React.FC = () => {
  const cards = [
    {
      title: "Autumn",
      description:
        "Worked as a Product Intern building writing feature specs for an End-of-Life marketplace connecting service providers with customers",
        defaultImg: "card-01.png",
        hoverImg: "card-01-hover.png",
      link: "https://jessicaywang.co/autumn",
      footerText: "Product Management • Product Strategy",
    },
    {
      title: "Pinterest Case Study",
      description:
        "Ideated and built a new 'Discovery' feature for Pinterest maximixing engagement; pitched to their Chief Product Officer",
        defaultImg: "card-03.png",
        hoverImg: "card-03-hover.png",
      link: "https://tinyurl.com/3bk8ntde",
      footerText: "Product Management • Product Strategy",
    },
    {
      title: "Project Morrissette",
      description:
        "Platform connecting Startups with Students; led by Ivey School of Business and Startups backed by YC & Sequoia Capital",
        defaultImg: "card-03.png",
        hoverImg: "card-03-hover.png",
      link: "https://www.westerns4s.ca",
      footerText: "Launching Fall 2025 (MVP Linked)",
    },
    {
      title: "Next Den",
      description:
        "Developing a proprietary algorithm for an app that lets users invest based on NBA player performance",
      defaultImg: "card-03.png",
      hoverImg: "card-03-hover.png",
      link: "https://github.com/RyanCasty/NextDen",
      footerText: "Software Development • Hack Western",
    },

    // {
    //   title: "Chess Predictor",
    //   description:
    //     "Chess app that calculates every move evaluation using Stockfish analysis, Maia via lc0, and Lichess API",
    //   defaultImg: "card-02.png",
    //   hoverImg: "card-02-hover.png",
    //   link: "https://www.westerns4s.ca",
    // },
  ];
  return (
    <Box w="full">
      <FadeIn delay={0.6}>
        <Heading fontSize="lg" color="grey" fontWeight="bold" pb="10px">
          Highlights
        </Heading>
        <Stack
          gap="4"
          direction="row"
          wrap="wrap"
          justify="center"
          align="center"
        >
          {cards.map((card, index) => (
            <HoverImageCard
              key={index}
              title={card.title}
              description={card.description}
              defaultImg={card.defaultImg}
              hoverImg={card.hoverImg}
              link={card.link}
              footerText={card.footerText}
            />
          ))}
        </Stack>
      </FadeIn>
    </Box>
  );
};

export default projects;
