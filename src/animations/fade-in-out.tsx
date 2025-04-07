import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeInOut = keyframes`
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
`;

interface FadeInOutProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
}

export const FadeInOut: React.FC<FadeInOutProps> = ({
  children,
  delay = 0,
  stagger = 0,
}) => {
  return (
    <Box
      animation={`${fadeInOut} 10s ease-in-out ${delay + stagger}s infinite`}
      opacity={0}
    >
      {children}
    </Box>
  );
};
