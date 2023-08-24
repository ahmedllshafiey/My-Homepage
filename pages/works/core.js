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
          <Image
            mb={4}
            borderRadius="lg"
            src="/images/assets/Nefertiti Poster -01.jpg"
          />
          <Paragraph>
            When we look inside ourselves, we find many things that may be
            hidden from the naked eye. There is an aspect of self that many
            express in relation to others, but there is a deeper core that
            remains hidden within us. When we go deeper into inner exploration,
            we discover new secrets about ourselves, and identify areas that
            need improvement and attention. And by working on developing this
            inner side, we can live a brighter and happier life. So, let's dig
            deep into ourselves and look for the aspects you need to work on, to
            become the best version of ourselves.
          </Paragraph>
          <SimpleGrid columns={[1, 1, 2]} gap={6} mt={4}>
            <Image mb={4} borderRadius="lg" src="/images/assets/Create.jpg" />
            <Image mb={4} borderRadius="lg" src="/images/assets/Fear.jpg" />
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
