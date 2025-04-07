import { Box, Container } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  return (
    <Box animation={`${fadeIn} 1s ease-out ${delay}s forwards`} opacity={0}>
      {children}
    </Box>
  );
};
