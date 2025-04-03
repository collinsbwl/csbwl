import { SimpleGrid, Text, Box} from "@chakra-ui/react"
import { FadeIn } from "animations/fade-in";

const projects: React.FC = () => {
  return (
    <SimpleGrid columns={2} gap="40px">
      <Box height="20">1</Box>
      <Box height="20">2</Box>
      <Box height="20">3</Box>
      <Box height="20">4</Box>
    </SimpleGrid>
   
  )
}

export default projects