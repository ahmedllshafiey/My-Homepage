import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const footPrintImg = `/images/Logo${useColorModeValue('', '-dark')}.svg`
  return (
    <Link href="/">
      <LogoBox>
        <Image src={footPrintImg} width={45} height={45} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'Montserrat', sans-serif"
          fontWeight="bold"
          ml={30}
          letterSpacing="0.5px"
        >
          Ahmed Sayed
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
