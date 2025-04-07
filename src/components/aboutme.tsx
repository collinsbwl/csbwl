import { Heading, Flex, Box, Link, Em, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FadeIn } from "animations/fade-in";

const AboutMe: React.FC = () => {
  return (
    <Box w="full" zIndex="1">
      <FadeIn delay={0.4}>
        <Flex direction="column" gap="6">
          <Box>
            <Heading size="2xl" fontFamily="mono">
              COLLIN SOBOWALE
            </Heading>
            <Flex gap={2} pt="3">
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
                CIBC Cloud Engineering & Artificial Intelligence, Toronto, ON{" "}
                <LuExternalLink />
              </Link>
            </Text>

            <Text fontSize="sm">
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
            </Text>

            <Text fontSize="sm">
              Building [at]{" "}
              <Link
                fontStyle="italic"
                href="https://iveyproductsociety.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ivey School of Business Product Society <LuExternalLink />
              </Link>
            </Text>
          </Box>

          <Text fontSize="sm">
            Passionate about <Em>Computer-Interaction Behaviour, {""}</Em>
            <Em>System Architecture</Em>, and <Em>Research</Em>
          </Text>

          <Text fontSize="sm">
            As someone with many passions, I believe in doing what you love. For
            me, that’s connecting with people, discovering new places, and
            enjoying rainy weather.
          </Text>
        </Flex>
      </FadeIn>
    </Box>
  );
};

export default AboutMe;
