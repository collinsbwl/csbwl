import { Heading, Box, Stack, Flex, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FadeIn } from "animations/fade-in";
import HoverImageCard from "./cards";

const projects: React.FC = () => {
  const cards = [
    {
      title: "Project Morrissette",
      description:
        "Platform connecting Startups with Students; lead by Ivey School of Business and Startups backed by YC & Sequoia Capital",
      defaultImg: "card-01.png",
      hoverImg: "card-01-hover.png",
      link: "https://www.westerns4s.ca",
    },
    {
      title: "Chess Predictor",
      description:
        "Chess app that calculates every move evaluation using Stockfish analysis, Maia via lc0, and Lichess API",
      defaultImg: "card-02.png",
      hoverImg: "card-02-hover.png",
      link: "https://www.westerns4s.ca",
    },
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
            />
          ))}
        </Stack>
      </FadeIn>
    </Box>
  );
};

export default projects;
