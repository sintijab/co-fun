import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Link } from "../../foundations/Link";
import { HamburgerIcon, Logo, TextBase } from "../../foundations";
import { useState } from "react";
import { useRouter } from "next/router";

export const NavigationTop = ({ links }: { links: { label: string; href: string, display?: FlexProps }[], onClick?: () => void, signInText?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const url = router.asPath;
  const isIndex = url === '/';
  const isHome = url.includes('/home')
  if (isIndex) {
    return <Flex justifyContent='flex-start' alignItems='left' top={["0", "unset"]} right={["0", "unset"]} position={["fixed", "fixed"]} direction={["row", "row"]} p={['.5rem', '1.5rem 1.8rem']} zIndex={1} width={["100%"]}><Logo pl={["36px", "unset"]} margin="auto" height={["15px", "17px"]} /></Flex>
  }
  return (
    <Flex justifyContent='space-between' alignItems='center' top={["0", "unset"]} right={["0", "unset"]} position={["fixed", "unset"]} direction={["row", "row"]} p={['.5rem', '1.5rem 1.8rem']} boxShadow='0 3px 2px -2px rgba(32, 33, 36, 0.1)' zIndex={1} width={["100%"]}>
      <Box display={["flex", "inline-block"]} margin={["auto", "unset"]} pl={["36px", ".7rem"]}>
        <a href="https://cofun.digital" style={{ display: 'flex', alignItems: 'baseline' }}><Logo margin="auto" pl={["36px", "unset"]} height={["15px", "17px"]} />{isIndex && <TextBase textStyle="activity-title" fontSize={['11pt', '14pt']} color="button.action" pt={["1rem", ".5rem"]} pb={["1rem", ".7rem"]} pl=".5rem" textAlign="center" mt="0">featuring</TextBase>}</a>
      </Box>
      <Flex direction={["column", "row"]}>
        <Box onClick={() => setIsOpen(!isOpen)} alignSelf="flex-end" pr="0" display={["block", "none"]} background={isOpen ? "primary.green" : "transparent"} borderRadius=".5rem">
          <HamburgerIcon fill={isOpen ? "primary.white" : "primary.default"} />
        </Box>
        <Flex direction={["column", "row"]} display={[isOpen ? "flex" : "none", "flex"]} background="primary.white" borderRadius=".3rem" position={["fixed", "unset"]} right="0" top="2.7rem">
          {links.map((item, i) => (
            // @ts-ignore-next-line
            <Link key={`nav` + i} href={item.href} variant='nav' display="none" padding={[".7rem 2.5rem", "0 2rem"]} textDecoration={item.href.includes(url) && !isHome ? "underline" : "none"}>{item.label}</Link>
          ))}
        </Flex>
        {/* <Box pl='.7rem' display="inline-block">
        <IconButton aria-label='Search pages' size='sm' colorScheme='transparent' icon={<SearchIcon />} />
      </Box> */}
        {/* <Box pl='1.5rem' display="inline-block">
        <ButtonPrimary size='sm' onClick={onClick}>{signInText}</ButtonPrimary>
      </Box> */}
      </Flex>
    </Flex>
  )
}