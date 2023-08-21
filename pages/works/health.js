import { Box, Container, Heading, Link, Image } from '@chakra-ui/react'
import Cover from '../../public/images/assets/Cover.jpg'
import Paragraph from '../../components/paragraph'
const Health = () => {
  return (
    <Box p={3}>
      <Container>
        <Heading as="h3" mb={3} fontSize={25}>
          Health Humans Conference
        </Heading>
        <Image src="/images/assets/Cover.jpg" borderRadius="0.5rem" mb={3} />
        <Paragraph>
          Health Humans is a volunteer medical conference hosted and organized
          by EPSF Beni-Suef. The vision of the conference was improving
          awareness of cardiovascular diseases. The conference was in a period
          of four days, with a final fun day for attendees. Many sessions were
          held. about different topics related to cardiovascular diseases. Also,
          there was a Medical Convoy in the second day
        </Paragraph>
        <Image
          src="/images/assets/Media.jpg"
          borderRadius="0.5rem"
          mb={3}
          mt={3}
        />
        <Paragraph>
          Ahmed was selected by the executive board as media and publication
          Head of the conference. Ahmed was responsible for designing the visual
          identity, posts, video editing, and print design Ahmed was also
          responsible for documentation of the event and photography. Ahmed also
          had a media and publication team that was responsible for Handling
          team education and organization was a big challenge
        </Paragraph>
        <Image
          src="/images/assets/Convoy.jpg"
          borderRadius="0.5rem"
          mb={3}
          mt={3}
        />
        <Paragraph>
          Ahmed selected as team coordinator in medical convoy that held in
          Mydoum one of Beni-Suef counteries. Many peopled awared with
          dangerous of unhealthy food. Ahmed and his team measured blood
          pressure of 25 people.
        </Paragraph>
      </Container>
    </Box>
  )
}

export default Health
