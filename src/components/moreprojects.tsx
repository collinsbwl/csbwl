import { Heading, Flex, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { FadeIn } from "animations/fade-in";

const moreprojects: React.FC = () => {
  return (
    <Box w="full">
      <FadeIn delay={0.4}>
        <Heading fontSize="lg" color="grey" fontWeight="bold" pb="10px">
          Projects
        </Heading>
        <Flex alignItems="center">
          <SimpleGrid columns={1} gap="20" mx="auto">
            <Text fontStyle="italic" color="grey">
              WIP
            </Text>
          </SimpleGrid>
        </Flex>
      </FadeIn>
    </Box>
  );
};

export default moreprojects;
