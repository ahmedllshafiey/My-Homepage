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
            Dive into the world of "Tameer," a project that encapsulates the
            essence of strength, luxury, and heritage. At its core, this
            endeavor draws inspiration from the Mydoum Pyramid in Beni-Suef,
            infusing it into a captivating logo that symbolizes power and
            endurance. The strategic use of blue hues evokes a sense of strength
            and determination, while the whites breathe life into notions of
            luxury and refinement. Merging luxury and durability is no small
            feat, yet this design masterfully achieves that fusion. The project
            adds value through its embodiment of luxury, durability, safety, and
            modernity intertwined with Egypt's rich heritage. "Tameer" stands as
            a testament to the harmonious coexistence of these elements, making
            a resounding visual statement
          </Paragraph>
          <SimpleGrid columns={[1, 1, 2]} gap={4} mb={4} mt={4}>
            <Image borderRadius="lg" src="/images/assets/Flayer.jpg" />
            <Image borderRadius="lg" src="/images/assets/Card.jpg" />
          </SimpleGrid>
          <Image borderRadius="lg" src="/images/assets/Colors.jpg" />
          <NextLink href="https://www.behance.net/gallery/168177325/Tameer">
            <Button rightIcon={<ChevronRightIcon />} bg="#F7941D" mt={4}>
              Project Link
            </Button>
          </NextLink>
        </Container>
      </Section>
    </Layout>
  )
}

export default Core
