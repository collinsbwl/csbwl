import { Link, Box, Text, Separator } from "@chakra-ui/react";
import { FadeIn } from "animations/fade-in";

const Footer: React.FC = () => {
  return (
    <Box w="full" pt="6">
      <FadeIn>
        <Separator pb="3" />
        <Text fontSize="sm" pt="2">
          Reach me [at]{" "}
          <Link
            variant="underline"
            fontStyle="italic"
            href="mailto:collinsbwle@gmail.com"
          >
            collinsbwle@gmail.com
          </Link>
        </Text>
      </FadeIn>
    </Box>
  );
};

export default Footer;
