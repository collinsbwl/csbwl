import { Heading, Box, Stack } from "@chakra-ui/react";
// import { useState } from "react";
import { FadeIn } from "animations/fade-in";
import { FadeInOut } from "animations/fade-in-out";
import HoverImageCard from "./ui/Card";

const Projects: React.FC = () => {
  const cards = [
    {
      title: "Autumn",
      description:
        "Worked as a Product Intern building writing feature specs for an End-of-Life marketplace connecting service providers with customers",
      // defaultImg: "card-01.png",
      link: "https://jessicaywang.co/autumn",
      footerText: "Product Management • Product Strategy",
    },
    {
      title: "Pinterest Case Study",
      description:
        "Ideated and built a new 'Discovery' feature for Pinterest maximizing user engagement; pitched to their Chief Product Officer",
      // defaultImg: "card-02.png",
      link: "https://tinyurl.com/5heuy7zw",
      footerText: "Product Management • Product Strategy",
    },
    {
      title: "Project Morrissette",
      description:
        "Platform connecting startups supported by accelerators & VC funds with students; led by Ivey School of Business & 2 Founders ",
      // defaultImg: "card-03.png",
      link: "https://www.westerns4s.ca",
      footerText: "Launching Fall 2025 • See MVP",
    },
    {
      title: "Next Den",
      description:
        "Full-stack rental property search platform engineered and deployed using Python-based analytics dashboard",
      // defaultImg: "card-04.png",
      link: "https://github.com/RyanCasty/NextDen",
      footerText: "Software Development • Hack Western",
    },

    // {
    //   title: "Chess Predictor",
    //   description:
    //     "Chess app that calculates every move evaluation using Stockfish analysis, Maia via lc0, and Lichess API",
    //   defaultImg: "card-02.png",
    //   link: "https://www.westerns4s.ca",
    // },
  ];
  return (
    <Box w="full">
      <FadeIn delay={0.6}>
        <Heading fontSize="lg" color="grey" fontWeight="bold" pb="10px">
          Highlights
        </Heading>
      </FadeIn>
      <Stack
        gap="4"
        direction="row"
        wrap="wrap"
        justify="center"
        align="center"
      >
        {cards.map((card, index) => (
          <FadeInOut key={index} delay={0.6} stagger={index * 0.2}>
            <HoverImageCard
              title={card.title}
              description={card.description}
              // defaultImg={card.defaultImg}
              link={card.link}
              footerText={card.footerText}
            />
          </FadeInOut>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
