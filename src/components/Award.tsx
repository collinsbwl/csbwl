import { Flex, Box, Text, Collapsible } from "@chakra-ui/react";
import { FadeIn } from "animations/fade-in";
import { FaSortDown } from "react-icons/fa";

const Award: React.FC = () => {
  return (
    <Box w="full">
      <FadeIn delay={1.4}>
        <Collapsible.Root>
          <Collapsible.Trigger
            as={Flex}
            gap="0.5"
            fontSize="md"
            color="grey"
            py="3"
            fontWeight="bold"
          >
            <Text>Awards</Text>
            <FaSortDown />
          </Collapsible.Trigger>

          <Collapsible.Content>
            <Box paddingLeft="4">
              <Text fontSize="sm">
                Continuing Admission Scholarships ($24,000)
              </Text>
              <Text fontSize="sm">Distinction Scholarship ($2,500)</Text>
              <Text fontSize="sm">
                1st Place - Bank of Montreal Tech Startup Advisory Case
                Competition
              </Text>
              <Text fontSize="sm">
                Finalist - Deloitte National Strategy & Operations Case
                Competition
              </Text>
              <Text fontSize="sm">
                Best Mockup - Notion ProdX Case Competition
              </Text>
              <Flex justifyContent="center">
                <Text
                  fontSize="sm"
                  textAlign="center"
                  fontStyle="italic"
                  color="grey"
                  pt="20px"
                  maxW="500px"
                >
                  Deeply thankful to everyone who supported me in reaching these
                  milestones
                </Text>
              </Flex>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </FadeIn>
    </Box>
  );
};

export default Award;
