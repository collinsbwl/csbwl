import { Heading, Flex, Box, Link, Em, Text, Mark } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaUniversity } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FadeIn } from "animations/fade-in";

const aboutme: React.FC = () => {
  return (
    <Box w="full" zIndex="1">
      <FadeIn delay={0.4}>
        <Flex direction="column" gap="3">
          <Heading size="2xl" fontFamily="mono">
            COLLIN SOBOWALE
          </Heading>
          <Box>
            <Flex gap={2}>
              <Link
                href="https://www.linkedin.com/in/collinsbwle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/collinsbwl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/collinsbwl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill />
              </Link>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="sm">
              Previously [at]{" "}
              <Link
                fontStyle="italic"
                href="https://www.cibc.com/en/about-cibc/innovation/ai-business-impact.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CIBC Cloud Engineering, Toronto ON
              </Link>
            </Text>

            <Flex direction="row" fontSize="sm" pb={3}>
              Computer Science [at] the&nbsp;
              <Link
                href="https://uwo.ca"
                fontWeight="light"
                fontStyle="italic"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Western Ontario <LuExternalLink />
              </Link>
            </Flex>

            <Text fontSize="sm">
              Passionate about <Em>Computer-Interaction Behaviour, {""}</Em>
              <Em>System Architecture</Em>, and <Em>Rainy Weather</Em>
            </Text>
          </Box>
        </Flex>
      </FadeIn>
    </Box>
  );
};

export default aboutme;
