import {
  Container,
  Box,
  Text,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        mb={6}
        p={3}
        align="center"
      >
        <Text color="white">
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius
          vel pharetra vel turpis nunc eget lorem. Purus in mollis nunc sed id
          semper risus in hendrerit. Volutpat commodo sed egestas egestas. Sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Enim blandit
          volutpat maecenas volutpat blandit. Platea dictumst quisque sagittis
          purus sit amet volutpat consequat. Vitae ultricies leo integer
          malesuada nunc vel risus commodo. Ultricies tristique nulla aliquet
          enim tortor at. Id volutpat lacus laoreet non curabitur gravida.
          Dignissim cras tincidunt lobortis feugiat. Odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla. Sapien nec sagittis
          aliquam malesuada bibendum arcu vitae. Sed tempus urna et pharetra
          pharetra massa massa ultricies.
        </p>
      </Section>
    </Container>
  )
}

export default Page
