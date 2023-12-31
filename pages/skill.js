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
import Layout from '../components/layouts/article'
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
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiVim,
  SiLatex,
  SiChakraui,
  SiBootstrap,
  SiTailwindcss,
  SiMongoose,
  SiMongodb
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'

const Skills = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Heading as="h3" fontSize={25} mb={2}>
            Frontend Development
          </Heading>
          <Box
            align="center"
            justifyContent="flex-start"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiHtml5 fontSize={60} />
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              m={3}
              color="#F7941D"
              ml={0}
              target="_blank"
            >
              <SiCss3 fontSize={60} />
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/javascript"
              m={3}
              color="#F7941D"
              ml={0}
              target="_blank"
            >
              <SiJavascript fontSize={60} />
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              m={3}
              color="#F7941D"
              ml={0}
              target="_blank"
            >
              <SiTypescript fontSize={60} />
            </Link>
            <Link
              href="https://react.dev/"
              target="_blank"
              m={3}
              color="#F7941D"
              ml={0}
            >
              <SiReact fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://nextjs.org/"
              m={3}
              color="#F7941D"
              ml={0}
            >
              <SiNextdotjs fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://sass-lang.com/"
              m={3}
              color="#F7941D"
              ml={0}
            >
              <SiSass fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://chakra-ui.com/"
              m={3}
              color="#F7941D"
              ml={0}
            >
              <SiChakraui fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://getbootstrap.com/"
              m={3}
              color="#F7941D"
              ml={0}
            >
              <SiBootstrap fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://tailwindcss.com/"
              m={3}
              color="#F7941D"
              ml={0}
            >
              <SiTailwindcss fontSize={60} />
            </Link>
          </Box>
          <Divider mt={4} mb={6} />
          <Heading as="h3" fontSize={25} mb={2}>
            Backend Development
          </Heading>
          <Box
            align="center"
            justifyContent="flex-start"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Link
              target="_blank"
              href="https://www.php.net/"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiPhp fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://nodejs.org/en"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiNodedotjs fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://expressjs.com/"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiExpress fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://www.mysql.com/"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiMysql fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://www.mongodb.com/"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiMongodb fontSize={60} />
            </Link>
            <Link
              target="_blank"
              href="https://mongoosejs.com/"
              color="#F7941D"
              m={3}
              ml={0}
            >
              <SiMongoose fontSize={60} />
            </Link>
          </Box>
          <Divider mt={4} mb={6} />
          <Heading as="h3" fontSize={25} mb={2}>
            Graphic Design and Video Editing
          </Heading>
          <Box
            align="center"
            justifyContent="flex-start"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Link
              href="https://www.adobe.com/products/photoshop.html"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiAdobephotoshop fontSize={60} />
            </Link>
            <Link
              href="https://www.adobe.com/products/illustrator.html"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiAdobeillustrator fontSize={60} />
            </Link>
            <Link
              href="https://www.adobe.com/products/indesign.html"
              color="#F7941D"
              m={3}
              target="_blank"
              ml={0}
            >
              <SiAdobeindesign fontSize={60} />
            </Link>
            <Link
              href="https://www.adobe.com/products/premiere.html"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiAdobepremierepro fontSize={60} />
            </Link>
            <Link
              href="https://www.adobe.com/products/aftereffects.html"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiAdobeaftereffects fontSize={60} />
            </Link>
          </Box>
          <Divider mt={4} mb={6} />
          <Heading as="h3" fontSize={25} mb={2}>
            System Tools
          </Heading>
          <Box
            align="center"
            justifyContent="flex-start"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Link href="https://www.vim.org/" color="#F7941D" m={3} ml={0}>
              <SiVim fontSize={60} />
            </Link>
            <Link
              href="https://code.visualstudio.com/"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <TbBrandVscode fontSize={60} />
            </Link>
            <Link
              href="https://www.latex-project.org/"
              color="#F7941D"
              m={3}
              ml={0}
              target="_blank"
            >
              <SiLatex fontSize={60} />
            </Link>
          </Box>
          <Divider />
        </Container>
      </Section>
    </Layout>
  )
}

export default Skills