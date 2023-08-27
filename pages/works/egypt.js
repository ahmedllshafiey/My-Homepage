import Section from '../../components/section'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {
  Container,
  Box,
  Link,
  Text,
  Heading,
  Image,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Egypt = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Heading mb={4} as="h3" fontSize={25}>
            Egyptian Essence in Print
          </Heading>
          <Image
            mb={4}
            borderRadius="lg"
            src="/images/assets/Nefertiti Poster -02.jpg"
          />
          <Paragraph>
            Embark on an enthralling journey through time and culture with two
            captivating projects. In the "Nefertiti Poster," modern design
            seamlessly weaves the mystique of ancient Egypt into vibrant
            visuals. Meticulously chosen shapes, colors, and symbols converge to
            pay homage to this legendary civilization, while adhering to graphic
            design principles ensures a compelling final piece. Meanwhile, the
            "Road to History" project takes you on a visual odyssey where
            historical milestones come alive. Contemporary design sensibilities
            enliven sepia-toned hues and intricate details, masterfully merging
            modern aesthetics with timeless narratives. Both projects bear the
            hallmark of commitment to quality, creating visuals that both honor
            history and inspire the present.
          </Paragraph>
          <SimpleGrid columns={[1, 1, 1]} gap={4} mb={4} mt={4}>
            <Image borderRadius="lg" src="/images/assets/Brochure-01.jpg" />
            <Image borderRadius="lg" src="/images/assets/Brochure-02.jpg" />
          </SimpleGrid>
        </Container>
      </Section>
    </Layout>
  )
}

export default Egypt
