import { SimpleGrid, Card, Stack, Avatar, Button } from "@chakra-ui/react";
import { FadeIn } from "animations/fade-in";

const projects: React.FC = () => {
  return (
    <FadeIn delay={0.6}>
      <Stack gap="4" direction="column" wrap="wrap" align="flex-start">
        <Card.Root width="320px" variant="subtle">
          <Card.Body gap="2">
            <Card.Title mb="2" fontSize="md">Project Morrissette</Card.Title>
            <Card.Description>
              Building multimodal machine learning systems to help filmmakers
              streamline their creative proces.
            </Card.Description>
          </Card.Body>
        </Card.Root>

        <Card.Root width="320px" variant="subtle">
          <Card.Body gap="2">
            <Card.Title mb="2" fontSize="md">Performance Stock Exchange</Card.Title>
            <Card.Description>
              Data architecture and system design.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Stack>
    </FadeIn>
  );
};

export default projects;
