import { Flex, Container, Box } from "@chakra-ui/react";
// import { ColorModeButton } from "@/components/ui/color-mode";
import Toggle from "@/components/toggletheme";
import { FadeIn } from "animations/fade-in";

const header: React.FC = () => {
  return (
    <Box position="fixed" right="0" top="0" zIndex="999">
      <FadeIn>
        <Box mr={20} pl={20} mt={20} w="fit-content">
            <Flex gap="3">
              {/* <ColorModeButton /> */}
              <Toggle />
          </Flex>
      </Box>
      </FadeIn>
    </Box>
  )
}

export default header
