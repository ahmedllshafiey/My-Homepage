import {
  Container,
  Box,
  Button,
  Text,
  Heading,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { Header } from '../components/header'
import img from '../public/images/assets/Story.jpg'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Header src="/images/assets/Story.jpg" />
        {/* <Box borderRadius="lg" bg="#F7941D" mb={6} p={3} align="center">
          <Text
            color="dark"
            fontWeight="bold"
            fontSize="1.7em"
            fontFamily="'Cairo', sans-serif"
            align="right"
          >
            مَشَيْناها خُطىً كُتِبَتْ علينا
          </Text>
          <Text
            color="dark"
            fontWeight="bold"
            fontSize="1.7em"
            fontFamily="'Cairo', sans-serif"
            align="left"
          >
            ومَنْ كُتِبَتْ عليه خُطىً مشاها
          </Text>
          <br />
          <Text
            color="dark"
            fontWeight="light"
            fontFamily="'Cairo', sans-serif"
          >
           أبو العلاء المعري -
          </Text>
        </Box> */}
        <Box borderRadius="lg" bg="#F7941D" mb={6} p={3} align="center">
          <Text color="dark" fontWeight="bold" fontFamily="'Cairo', sans-serif">
            Hi, I&apos;m a Pharmacist raised in Bahrain!
          </Text>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1} mb={3}>
            <Heading>Ahmed Sayed</Heading>
            <Text fontFamily="'Cairo', sans-serif">
              Digital Hoopoe (Artist / Designer / Developer / Pharmacist)
            </Text>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            Ahmed is a Pharmacist and Web developer based in Bahrain with
            passion of building digital stuff with code to solve real-life
            problems. One of his main interests is involving of code in pharmacy
            field. The process of developing handled by him, from early designs
            to final assessment. When not coding neither studying, he loves
            drawing portrait and walking out. Currently, he studies for final
            year PharmD degree.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} bg="#F7941D" m={2}>
                My Portfolio
              </Button>
            </NextLink>
            <NextLink href="https://github.com/ahmedllshafiey">
              <Button rightIcon={<ChevronRightIcon />} bg="#F7941D" m={2}>
                My Repositories
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
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
            Interests
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
    </Layout>
  )
}

export default Page
