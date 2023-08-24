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
import img from '../public/images/assets/Story.jpg'
import { GridItem } from '../components/grid-item'
import { FaGithub } from 'react-icons/fa'
import { IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <Header src="/images/assets/Story.jpg" />
          <Box borderRadius="lg" bg="#F7941D" mb={6} p={3} align="center">
            <Text
              color="dark"
              fontWeight="bold"
              fontFamily="'Cairo', sans-serif"
            >
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
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            Ahmed is a Pharmacist and Web developer based in Bahrain with
            passion of building digital stuff with code to solve real-life
            problems. One of his main interests is involving of code in pharmacy
            field. The process of developing handled by him, from early designs
            to final assessment. He have also wide experience in graphic design
            field as he is a Volunteer Graphic Designer in EPSF. When not coding
            neither studying, he loves drawing portrait and walking out.
            Currently, he studies for final year PharmD degree.
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find Me on The Internet
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ahmedllshafiey" target="_blank">
                <Button variant="ghost" leftIcon={<Icon as={FaGithub} />}>
                  @ahmedllshafiey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ahmedllshafiey" target="_blank">
                <Button variant="ghost" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @ahmedllshafiey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ahmedllshafiey" target="_blank">
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @ahmedllshafiey
                </Button>
              </Link>
            </ListItem>
          </List>
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
