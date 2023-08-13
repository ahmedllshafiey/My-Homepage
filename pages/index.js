import { Container, Box, Text, Heading } from "@chakra-ui/react";
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        <Text color="white">
          Hello, I&apos;m a Clincal Pharmacist based in Bahrain!
        </Text>
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading>Ahmed Sayed</Heading>
          <p>Digital Hoopoe (Artist / Designer / Developer / Pharmacist)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
