import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import health from '../public/images/assets/Cover.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={25} mb={4}>
        Humanitarian Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkGridItem id="health" title="Health Humans" thumbnail={health}>
          Volunteering Medical conference hosted and organized by EPSF
          Beni-Suef. The aim of the conference was improving awareness of
          cardiovascular diseases.
        </WorkGridItem>
      </SimpleGrid>
    </Container>
  )
}

export default Works
