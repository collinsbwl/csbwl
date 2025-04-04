import { Accordion, Span, Box, Container, Center, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaUniversity } from "react-icons/fa";

import { FadeIn } from "animations/fade-in";

const oldexp: React.FC = () => {
  return (
    <Accordion.Root collapsible defaultValue={[""]}>
      {items.map((item, index) => (
        <Center>
          <Container zIndex="1">
            <FadeIn delay={0.6}>
              <Accordion.Item key={index} value={item.value}>
                <Accordion.ItemTrigger>
                  <Span flex="1" fontSize="sm">
                    {item.title}
                  </Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody fontSize="sm">
                    {item.text}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            </FadeIn>
          </Container>
        </Center>
      ))}
    </Accordion.Root>
  );
};

const items = [
  { value: "a", title: "Project Morrissette", text: "Building multimodal machine learning systems to help filmmakers streamline their creative process. Working on video understanding, generation, and editing." },
  { value: "b", title: "Performance Stock Exchange", text: "256 Dimension audio embeddings for semantic audio analysis using waveforms and Fourier Transforms, trained with contrastive learning." },
  { value: "c", title: "Sustainable Sort", text: "Trained a smaller VQGAN+CLIP to generate images from text and poetry prompts. Scaled up inference to run on MacBooks efficiently." },
];

export default oldexp;

