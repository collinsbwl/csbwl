import { Flex, Container, Spacer, Box } from "@chakra-ui/react";
// import { ColorModeButton } from "@/components/ui/color-mode";
import Toggle from "@/components/toggletheme";

const header: React.FC = () => {
  return (
    <Box position="fixed" top="0" zIndex="999" w="full">
      <Container maxWidth="container.lg" pl={4} pr={4} pt={8} pb={2}>
        <Flex alignItems="center" h="3.5rem">
          <Spacer />
          <Flex gap="3">
            {/* <ColorModeButton /> */}
            <Toggle />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default header;
