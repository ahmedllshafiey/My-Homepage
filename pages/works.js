import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import health from '../public/images/assets/Cover.jpg'
import Layout from '../components/layouts/article'
import design1 from '../public/images/assets/Sign.jpg'
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
              Volunteering Medical conference hosted and organized by EPSF
              Beni-Suef. The aim of the conference was improving awareness of
              cardiovascular diseases.
            </WorkGridItem>
          </SimpleGrid>
          <Divider mb={4} />
          <Heading as="h3" fontSize={25} mb={4}>
            Graphic Design Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={6} mb={4}>
            <WorkGridItem id="core" title="Inner Core" thumbnail={design1}>
              Visualization of inner traits. Fear, Creatvity and Beauty. Project
              based on real models
            </WorkGridItem>
            <WorkGridItem id="egypt" title="Egypt Prints" thumbnail={design2}>
              Number of my designs for printed Flyers and Brochures to introduce
              Egyptian Civilization
            </WorkGridItem>
            <WorkGridItem
              id="brand"
              title="Tamer Visual Identity"
              thumbnail={design4}
            >
              Visual Identity from Imaginary Tamer Company
            </WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
