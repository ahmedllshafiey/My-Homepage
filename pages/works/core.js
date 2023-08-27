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
  SimpleGrid,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Core = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Heading mb={4} as="h3" fontSize={25}>
            Inner Core
          </Heading>
          <Image mb={4} borderRadius="lg" src="/images/assets/Sign.jpg" />
          <Paragraph>
            "Step into the captivating realm of 'Self Core,' a mesmerizing
            project that delves into the intricate tapestry of human emotions
            and experiences. Through a collection of meticulously crafted
            visuals, this project takes you on a journey through fear,
            creativity, and beauty. Real-life models serve as the canvas for
            this exploration, with stock photos carefully chosen based on
            initial impressions and emotions they evoke. Notably, the use of
            yellow hues intertwines the themes of fear, creativity, and beauty.
            The same color, evoking different feelings, adds depth to the
            narrative, reminding us that the meaning of colors is fluid and
            contextual. Dive into this evocative gallery, where visual
            storytelling invites you to reflect on the intricate facets of the
            human psyche.
          </Paragraph>
          <SimpleGrid columns={[1, 1, 2]} gap={4} mb={4} mt={4}>
            <Image borderRadius="lg" src="/images/assets/Create.jpg" />
            <Image borderRadius="lg" src="/images/assets/Fear.jpg" />
          </SimpleGrid>
          <Image mb={4} borderRadius="lg" src="/images/assets/Beauty.jpg" />
          <NextLink href="https://www.behance.net/gallery/165627829/Self-Core">
            <Button rightIcon={<ChevronRightIcon />} bg="#F7941D">
              Project Link
            </Button>
          </NextLink>
        </Container>
      </Section>
    </Layout>
  )
}

export default Core
