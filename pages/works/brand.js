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
            Tamer Visual Identity
          </Heading>
          <Image
            mb={4}
            borderRadius="lg"
            src="/images/assets/Stacked Cover.jpg"
          />
          <Paragraph>
            Tamer Construction Company stands as a beacon of Egyptian
            excellence, embodying the essence of luxury and safety in every
            project they undertake. With a strong commitment to quality
            craftsmanship, Tamer Construction seamlessly weaves Egyptian
            heritage into their designs, infusing each creation with a sense of
            pride and cultural identity. Their architectural marvels are a
            testament to their dedication to preserving Egypt's rich history
            while embracing modern luxury. Meticulous attention to detail
            ensures that every project exudes opulence while maintaining the
            highest standards of safety and functionality. Tamer Construction
            Company proudly upholds the tradition of Egyptian craftsmanship
            while forging a path towards a future where elegance and security
            harmoniously coexist.
          </Paragraph>
          <SimpleGrid columns={[1, 1, 2]} gap={6} mt={4}>
            <Image mb={4} borderRadius="lg" src="/images/assets/Flayer.jpg" />
            <Image mb={4} borderRadius="lg" src="/images/assets/Card.jpg" />
          </SimpleGrid>
          <Image mb={4} borderRadius="lg" src="/images/assets/Colors.jpg" />
          <NextLink href="https://www.behance.net/gallery/168177325/Tameer">
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
