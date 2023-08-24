import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import health from '../public/images/assets/Cover.jpg'
import Layout from '../components/layouts/article'
import design1 from '../public/images/assets/Sign.jpg'

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
          <SimpleGrid columns={[1, 1, 2]} gap={6} mb={4}>
            <WorkGridItem id="health" title="Inner Core" thumbnail={design1}>
              Visualization of inner traits. Fear, Creatvity and Beauty. Project
              based on real models
            </WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
