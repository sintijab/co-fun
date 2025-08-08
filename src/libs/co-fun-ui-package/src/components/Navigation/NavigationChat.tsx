import { Box, Flex } from "@chakra-ui/react";
import { AvatarIcon } from "../../foundations/Avatar.js";
import { TextBase } from "../../foundations/Typography.js";
import { Image } from '@chakra-ui/react';

export const NavigationChat = ({ author, image, title, showBackIcon }: { author?: string, image?: string | React.ReactNode, title?: string, showBackIcon?: boolean}) => (
  <Flex p={[".5rem", ".5rem 1rem"]} justifyContent={showBackIcon? "space-between" : "center"} alignItems="center" flexWrap="wrap" boxShadow='0 3px 2px -2px rgba(32, 33, 36, 0.1)'>
    <Flex alignItems="center" direction="column">
      <Box>
      {!!image && typeof image !== 'string' && image}
      </Box>
      {!!image && typeof image === 'string' && <Image src={image} h="2.3rem" w="2.3rem" borderRadius="50%" m="0 .5rem 0 2rem" />}
      {!image && !!author && <AvatarIcon m="0 .5rem 0 2rem" w="2.3rem" h="2.3rem">{author.substring(0, 1)}</AvatarIcon>}
      <Box>
      {!!title && <Flex alignItems="center" fontSize="13pt"><TextBase>{title}</TextBase></Flex>}
      </Box>
    </Flex>
  </Flex>
)