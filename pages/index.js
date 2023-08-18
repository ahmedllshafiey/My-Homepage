import {
  Container,
  Box,
  Button,
  Text,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="#F7941D" mb={6} p={3} align="center">
        <Text color="white" fontWeight="bold">
          Hello, I&apos;m a Clincal Pharmacist based in Bahrain!
        </Text>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading>Ahmed Sayed</Heading>
          <p>Digital Hoopoe (Artist / Designer / Developer / Pharmacist)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Ahmed.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ahmed is a Pharmacist and Web developer based in Bahrain with passion
          of building digital stuff with code to solve real-life problems. One
          of his main interests is involving of code in pharmacy field. The
          process of developing handled by him, from early designs to final
          assessment. When not coding neither studying, he loves drawing
          portrait and walking out. Currently, he studies for final year PharmD
          degree.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} bg="#F7941D">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Muharraq (المٌحَرَّقْ), Bahrain
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Completed PharmD Program at Beni-Suef University
          <br />
          (حَصَلَ على دَرَجَةْ دُكْتور صَيْدَلي مِنْ جامِعَةْ بَني سُوَيْفْ)
        </BioSection>
        <Heading as="h3" variant="section-title">
          I love
        </Heading>
        <Paragraph>
          Art, Drawing,{' '}
          <Link href="https://www.behance.net/ahmedllshafiey">
            Graphic Design
          </Link>
          , Music, Photography
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
