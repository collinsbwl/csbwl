import { Card, Image, Box } from "@chakra-ui/react";
import { useState } from "react";

interface HoverImageCardProps {
  title: string;
  description: string;
  defaultImg: string;
  hoverImg: string;
  bgImage?: string;
}

const HoverImageCard: React.FC<HoverImageCardProps> = ({
  title,
  description,
  defaultImg,
  hoverImg,
  bgImage = "url('/noise.png')",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card.Root
      width="230px"
      bgImage={bgImage}
      bgSize="cover"
      borderRadius="xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Body gap="2">
        <Card.Title fontSize="sm">{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Box display="grid">
        <Image
          src={defaultImg}
          w="100%"
          h="auto"
          gridArea="1/1"
          transition="0.3s ease-in-out"
          opacity={isHovered ? 0 : 1}
        />
        <Image
          src={hoverImg}
          w="100%"
          h="auto"
          gridArea="1/1"
          transition="0.3s ease-in-out"
          opacity={isHovered ? 1 : 0}
        />
      </Box>
    </Card.Root>
  );
};

export default HoverImageCard;
