import { Accordion, Span, Box, Container, Center } from "@chakra-ui/react";
import { FadeIn } from "animations/fade-in";

const projects: React.FC = () => {
  return (
    <Accordion.Root collapsible defaultValue={[""]}>
      {items.map((item, index) => (
        <Center>
          <Container zIndex="1" pr={20} pl={20} pb={2}>
            <FadeIn delay={0.4}>
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
  { value: "a", title: "Project Morrissette", text: "Some value 1..." },
  { value: "b", title: "Performance Stock Exchange", text: "Some value 2..." },
  { value: "c", title: "Sustainable Sort", text: "Some value 3..." },
];

export default projects;
