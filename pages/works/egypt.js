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
            Egypt Prints
          </Heading>
          <Image
            mb={4}
            borderRadius="lg"
            src="/images/assets/Nefertiti Poster -02.jpg"
          />
          <Paragraph>
            The Egyptian civilization stands as one of the most remarkable and
            enduring civilizations in human history. Flourishing along the banks
            of the Nile River for thousands of years, it left an indelible mark
            on the world through its advancements in culture, architecture,
            science, and governance. The Egyptians were renowned for their
            awe-inspiring architectural marvels, with the pyramids of Giza
            standing as an enduring testament to their engineering prowess. The
            civilization's intricate hieroglyphic writing system and preserved
            texts provide insight into their beliefs, rituals, and daily life.
            Their innovative agricultural techniques, including the use of
            irrigation systems, allowed them to harness the Nile's fertile soil
            and support a burgeoning population. Moreover, their complex
            religious beliefs, centered around deities and the afterlife, shaped
            their art, culture, and societal structures. The Egyptian
            civilization's legacy endures as a source of fascination and
            inspiration, offering a glimpse into the ancient world's
            achievements and the enduring spirit of human creativity and
            ingenuity.
          </Paragraph>
          <SimpleGrid columns={[1, 1, 1]} gap={6} mt={4}>
            <Image
              mb={4}
              borderRadius="lg"
              src="/images/assets/Brochure-01.jpg"
            />
            <Image
              mb={4}
              borderRadius="lg"
              src="/images/assets/Brochure-02.jpg"
            />
          </SimpleGrid>
        </Container>
      </Section>
    </Layout>
  )
}

export default Egypt
