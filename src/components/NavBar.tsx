import { Flex, Box } from "@chakra-ui/react";
// import { ColorModeButton } from "@/components/ui/color-mode";
import ToggleTheme from "@/components/ToggleTheme";
import { FadeIn } from "animations/fade-in";

const NavBar: React.FC = () => {
  return (
    <Box position="fixed" right="0" top="0" zIndex="999">
      <FadeIn>
        <Box
          mr={{ base: 4, md: 8, lg: 16 }}
          pl={{ base: 4, md: 8, lg: 16 }}
          mt={{ base: 8, md: 12, lg: 16 }}
          w="fit-content"
        >
          <Flex gap="3">
            {/* <ColorModeButton /> */}
            <ToggleTheme />
          </Flex>
        </Box>
      </FadeIn>
    </Box>
  );
};

export default NavBar;
