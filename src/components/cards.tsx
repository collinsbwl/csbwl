import { Card, Image, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useState } from "react";

interface HoverImageCardProps {
  title: string;
  description: string;
  defaultImg: string;
  hoverImg: string;
  bgImage?: string;
  link?: string;
}

const HoverImageCard: React.FC<HoverImageCardProps> = ({
  title,
  description,
  defaultImg,
  hoverImg,
  bgImage = "url('/noise.png')",
  link = "#",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkBox
      as={Card.Root}
      maxW="350px"
      w="100%"
      bgImage={bgImage}
      bgSize="cover"
      borderRadius="xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LinkOverlay href={link} target="_blank" rel="noopener noreferrer">
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
      </LinkOverlay>
    </LinkBox>
  );
};

export default HoverImageCard;
