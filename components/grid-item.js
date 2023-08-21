import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Global from '@emotion/styled'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text fontFamily="'Cairo', sans-serif" mt={2}>
          {title}
        </Text>
        <Text fontFamily="'Cairo', sans-serif" fontSize={14}>
          {children}
        </Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, title, id, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          style={{ borderRadius: '0.5rem', overflow: 'hidden' }}
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text fontFamily="'Cairo', sans-serif" mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontFamily="'Cairo', sans-serif" fontSize={16}>
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`.grid-item-thumbnail{
      border-radius:12px;
    }`}
  />
)
