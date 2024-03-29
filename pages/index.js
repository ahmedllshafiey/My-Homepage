import {
  Container,
  Box,
  Button,
  Text,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { Header } from '../components/header'
import { GridItem } from '../components/grid-item'
import { FaGithub } from 'react-icons/fa'
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiBehance,
  SiPinterest
} from 'react-icons/si'
const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Header src="My Photo.jpg" />
          <Box borderRadius="lg" bg="#F7941D" mb={6} p={3} align="center">
            <Text
              color="dark"
              fontWeight="bold"
              fontFamily="'Cairo', sans-serif"
            >
              Unleashing Creative Code: Crafting Solutions with Passion and
              Precision
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
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            With a strong dedication to both academics and technology, I am an
            undergraduate Pharmacy student and Web Developer based in Bahrain.
            My true passion lies in crafting digital solutions through coding to
            tackle real-world problems. What sets me apart is my keen interest
            in integrating code into the pharmacy field. From initial concept to
            final assessment, I'm hands-on in the entire development process.
            Alongside this, I've honed my skills in graphic design as a
            committed Volunteer Graphic Designer at EPSF. When I'm not immersed
            in coding or studies, I find joy in sketching portraits and
            exploring the outdoors. Currently, I'm diligently pursuing my final
            year of the PharmD degree, embodying a unique blend of technical
            prowess and creative flair.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="https://www.linkedin.com/in/ahmedllshafiey/">
              <Button rightIcon={<ChevronRightIcon />} bg="#F7941D" m={2}>
                My Linkedin
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find Me on The Internet
          </Heading>
          <Box
            align="center"
            justifyContent="flex-start"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            mt={4}
          >
            <Link
              href="https://github.com/ahmedllshafiey"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiGithub fontSize={40} />
            </Link>
            <Link
              href="https://www.instagram.com/ahmedllshafiey/"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiInstagram fontSize={40} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmedllshafiey/"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiLinkedin fontSize={40} />
            </Link>
            <Link
              href="https://www.pinterest.com/ahmedllshafiey/"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiPinterest fontSize={40} />
            </Link>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            For Business Inquiries
          </Heading>
          <Text fontWeight="bold">Contact Me At:</Text>
          <Text>ahmedll.shafiey@gmail.com</Text>
        </Section>
        <Text opacity={0.7} align="center" fontFamily="'Cairo', sans-serif">
          &copy; 2023 Ahmed Sayed. All Rights Reserved.
        </Text>
      </Container>
    </Layout>
  )
}

export default Page