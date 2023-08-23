import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql
} from 'react-icons/si'

const Skills = () => {
  return (
    <Section>
      <Container>
        <Heading as="h3" fontSize={25} mb={6}>
          Web Development
        </Heading>
        <Heading as="h3" fontSize={20} mb={2}>
          Frontend Development
        </Heading>
        <Box
          align="center"
          justifyContent="flex-start"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Link href="/" color="#F7941D" m={3} ml={0}>
            <SiHtml5 fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiCss3 fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiJavascript fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiTypescript fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiReact fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiNextdotjs fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiSass fontSize={60} />
          </Link>
          <Link href="/" m={3} color="#F7941D" ml={0}>
            <SiSvelte fontSize={60} />
          </Link>
        </Box>
        <Divider mt={4} mb={6} />
        <Heading as="h3" fontSize={20} mb={2}>
          Backend Development
        </Heading>
        <Box
          align="center"
          justifyContent="flex-start"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Link href="/" color="#F7941D" m={3} ml={0}>
            <SiPhp fontSize={60} />
          </Link>
          <Link href="/" color="#F7941D" m={3} ml={0}>
            <SiNodedotjs fontSize={60} />
          </Link>
          <Link href="/" color="#F7941D" m={3} ml={0}>
            <SiExpress fontSize={60} />
          </Link>
          <Link href="/" color="#F7941D" m={3} ml={0}>
            <SiLaravel fontSize={60} />
          </Link>
          <Link href="/" color="#F7941D" m={3} ml={0}>
            <SiMysql fontSize={60} />
          </Link>
        </Box>
      </Container>
    </Section>
  )
}

export default Skills
