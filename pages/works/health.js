import { Box, Container, Heading, Link, Image } from '@chakra-ui/react'
import Cover from '../../public/images/assets/Cover.jpg'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'
const Health = () => {
  return (
    <Layout>
      <Section>
        <Box p={3}>
          <Container>
            <Heading as="h3" mb={3} fontSize={25}>
              Health Humans Conference
            </Heading>
            <Image
              src="/images/assets/Cover.jpg"
              borderRadius="0.5rem"
              mb={3}
            />
            <Paragraph>
              Health Humans: A Volunteer-Driven Medical Symposium Hosted and
              Arranged by EPSF Beni-Suef. Our mission was to enhance
              understanding of cardiovascular ailments. Over four days, the
              event featured diverse sessions delving into various facets of
              heart health. Notably, the second day included a Medical Convoy,
              adding a practical dimension to our initiative. The culmination
              was a fun-filled final day, fostering camaraderie among attendees.
            </Paragraph>
            <Image
              src="/images/assets/Media Team.jpg"
              borderRadius="0.5rem"
              mb={3}
              mt={3}
            />
            <Paragraph>
              I was handpicked by the executive board to serve as the Media and
              Publication Head of the conference. My duties involved curating
              the visual identity, producing posts, editing videos, and
              designing print materials. I also took charge of event
              documentation and photography. Leading a skilled media and
              publication team, I successfully tackled the significant
              challenges of team education and organization, ensuring the
              conference's success.
            </Paragraph>
            <Image
              src="/images/assets/Convoy.jpg"
              borderRadius="0.5rem"
              mb={3}
              mt={3}
            />
            <Paragraph>
              I was chosen to be the team coordinator for a medical convoy held
              in Mydoum, one of Beni-Suef's districts. Our mission was to raise
              awareness about the hazards of unhealthy food. Alongside my team,
              I conducted blood pressure measurements for 25 individuals,
              contributing to the event's success.
            </Paragraph>
          </Container>
        </Box>
      </Section>
    </Layout>
  )
}

export default Health
