import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import health from '../public/images/assets/Cover.jpg'
import Layout from '../components/layouts/article'
import design1 from '../public/images/assets/Logo.jpg'
import design2 from '../public/images/assets/Nefertiti Poster -01.jpg'
import design3 from '../public/images/assets/Final.jpg'
import design4 from '../public/images/assets/Cover Head.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Section>
          <Heading as="h3" fontSize={25} mb={4}>
            Humanitarian Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={6} mb={4}>
            <WorkGridItem id="health" title="Health Humans" thumbnail={health}>
              Dedicatedly Volunteering for the EPSF-Hosted Medical Conference in
              Beni-Suef, Focused on Elevating Cardiovascular Disease Awareness.
            </WorkGridItem>
          </SimpleGrid>
          <Divider mb={4} />
          <Heading as="h3" fontSize={25} mb={4}>
            Graphic Design Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={6} mb={4}>
            <WorkGridItem id="core" title="Inner Core" thumbnail={design1}>
              Unveiling Inner Qualities: Exploring Fear, Creativity, and Beauty.
              A Project Rooted in Real-Life Models, Utilizing Stock Photos to
              Convey the Message.
            </WorkGridItem>
            <WorkGridItem
              id="egypt"
              title="Egyptian Essence in Print"
              thumbnail={design2}
            >
              Countless designs of mine have come to life in the form of printed
              flyers and brochures, all aimed at introducing the rich tapestry
              of Egyptian civilization.
            </WorkGridItem>
            <WorkGridItem
              id="brand"
              title="Tamer Visual Identity"
              thumbnail={design4}
            >
              Tamer Company's Visual Identity
            </WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
