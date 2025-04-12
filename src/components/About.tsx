import { Heading, Flex, Box, Link, Em, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

import { FadeIn } from "animations/fade-in";

const AboutMe: React.FC = () => {
  return (
    <Box w="full" zIndex="1">
      <FadeIn delay={0.4}>
        <Flex direction="column" gap="4">
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

          <Text fontSize="md">
            Design engineer and product builder studying Computer Science at the{" "}
            <Link
              fontWeight="light"
              href="https://www.uwo.ca/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Western Ontario
            </Link>
          </Text>

          <Text fontSize="md">
            I'm passionate about what inspires me—people, travel, chess,
            enjoying rainy days, and{" "}
            <Link
              fontWeight="light"
              href="https://research.contrary.com/company"
              target="_blank"
              rel="noopener noreferrer"
            >
              research.
            </Link>
          </Text>

          <Box>
            <Text fontSize="md">
              Previously [at]{" "}
              <Link
                fontWeight="light"
                href="https://www.cibc.com/en/about-cibc/innovation/ai-business-impact.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CIBC Cloud Engineering & AI
                <MdArrowOutward />
              </Link>
            </Text>

            <Text fontSize="md">
              Building [at]{" "}
              <Link
                fontWeight="light"
                href="https://iveyproductsociety.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ivey School of Business Product Society <MdArrowOutward />
              </Link>
            </Text>
          </Box>
        </Flex>
      </FadeIn>
    </Box>
  );
};

export default AboutMe;
