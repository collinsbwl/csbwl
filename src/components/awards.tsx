import { Heading, Flex, Box, List, Text } from "@chakra-ui/react";
import { FadeIn } from "animations/fade-in";

const awards: React.FC = () => {
  return (
    <Box w="full">
      <FadeIn delay={0.4}>
        <Heading fontSize="lg" color="grey" fontWeight="bold">
          Awards
        </Heading>
        <Flex pl="40px" gap="5px" direction="column">
          <List.Root fontSize="sm" fontStyle="italic">
            <List.Item>
              Continuing Admission Scholarship of Excellence ($24,000)
            </List.Item>
            <List.Item>
              1st Place - Bank of Montreal Tech Startup Advisory Case
              Competition
            </List.Item>
            <List.Item>Best Mockup - Notion ProdX Case Competition</List.Item>
            <List.Item>
              Finalist - Deloitte National Strategy & Operations Case
              Competition
            </List.Item>
          </List.Root>
        </Flex>
        <Flex justifyContent="center">
          <Text
            fontSize="sm"
            textAlign="center"
            fontStyle="italic"
            color="grey"
            pt="20px"
            maxW="500px"
          >
            Deeply thankful to everyone who supported to reaching these
            milestones and the generous support provded by the donors
          </Text>
        </Flex>
      </FadeIn>
    </Box>
  );
};

export default awards;
