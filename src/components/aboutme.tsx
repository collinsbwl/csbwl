import {
  ButtonGroup,
  IconButton,
  Heading,
  Flex,
  Container,
  Icon,
  Box,
  Link, Em, Text, HoverCard
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaUniversity } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FadeIn } from "animations/fade-in";


// import { ColorModeButton } from "@/components/ui/color-mode";

const aboutme: React.FC = () => {
  return (
    <Box w="full" zIndex="1" pr={20} pl={20} pt={20} pb={2}>
      <FadeIn delay={0.2}>
      <Flex direction="column" gap="3">
        <Heading size="2xl" fontFamily="mono">
          COLLIN SOBOWALE
        </Heading>
        <Box>
          <Flex gap={2}>
            <Link href="https://www.linkedin.com/in/collinsbwle">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/collinsbwl">
              <FaGithub />
            </Link>
            <Link href="https://x.com/collinsbwl">
              <RiTwitterXFill />
            </Link>
          </Flex>
        </Box>
        <Box animation="fade-in">
          <Flex direction="row" fontSize="sm" pb={3}>
            Computer Science [at] the&nbsp;
            <Link href="https://uwo.ca" fontWeight="light" fontStyle="italic">
              University of Western Ontario <LuExternalLink />
            </Link>
          </Flex>
          <Box fontSize ="sm">Passionate builder interested in <Em>Computer-Interaction Behaviour</Em>, <Em>System Architecture</Em>, and <Em>Rain</Em> 
              </Box>
        </Box>
      </Flex>
      </FadeIn>
    </Box>
  );
};

export default aboutme;
