import { Heading, Box, Stack, Flex, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FadeIn } from "animations/fade-in";
import HoverImageCard from "./cards";

const projects: React.FC = () => {
  const cards = [
    {
      title: "Project Morrissette",
      description: "Platform connecting Startups with Students",
      defaultImg: "card-01.png",
      hoverImg: "card-01-hover.png",
      link: "https://www.westerns4s.ca",
    },
    {
      title: "Cloud Architecture AI",
      description: "Multimodal machine learning systems",
      defaultImg: "card-01.png",
      hoverImg: "card-01-hover.png",
      link: "https://www.westerns4s.ca",
    },
    {
      title: "Pinterest Case Study",
      description: "AI research dashboards",
      defaultImg: "card-01.png",
      hoverImg: "card-01-hover.png",
      link: "",
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
