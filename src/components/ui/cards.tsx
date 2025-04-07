import { Card, Image, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useState } from "react";


interface HoverImageCardProps {
  title: string;
  description: string;
  // defaultImg: string;
  bgImage?: string;
  link?: string;
  footerText?: string; 
}

const HoverImageCard: React.FC<HoverImageCardProps> = ({
  title,
  description,
  // defaultImg,
  bgImage = "url('/noise.png')",
  link = "#",
  footerText,
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
        <Card.Body>
          <Card.Title fontSize="sm">{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Box>
          {/* <Image
            src={defaultImg}
            w="100%"
            h="auto"
            transform={isHovered ? "scale(1.05)" : "scale(1)"}
            transition="0.3s ease-in-out"
          /> */}
        </Box>
        </Card.Body>
          <Card.Footer fontSize="sm" fontStyle="italic">
              {footerText}
          </Card.Footer>
      </LinkOverlay>
    </LinkBox>
  );
};

export default HoverImageCard;
