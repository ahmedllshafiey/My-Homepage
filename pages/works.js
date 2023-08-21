import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import eidthumbnail from '../public/images/assets/Eid.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Graphic Design
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkGridItem id="Eid" title="Eid" thumbnail={eidthumbnail}>
          An Islamic Eid festival design designed using Adobe Photoshop.
        </WorkGridItem>
      </SimpleGrid>
      <br/>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkGridItem id="Eid" title="Eid" thumbnail={eidthumbnail}>
          An Islamic Eid festival design designed using Adobe Photoshop.
        </WorkGridItem>
      </SimpleGrid>
    </Container>
  )
}

export default Works
