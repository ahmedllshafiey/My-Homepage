import NextLink from 'next/link'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Heading as="h1">Not Found</Heading>
          <Text>Page your are looking for doesn't exits</Text>
          <Divider my={6} />
          <Box my={6} align="center">
            <NextLink href="/">
              <Button colorScheme="teal">Return to home page</Button>
            </NextLink>
          </Box>
        </Container>
      </Section>
    </Layout>
  )
}

export default NotFound