import { Grid, GridItem } from "@chakra-ui/react";
import { ButtonPrimary } from "../../foundations";
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Fade } from "react-awesome-reveal";

export const Hero = ({ heading, subheading, link, image }: { heading?: React.ReactElement, subheading?: React.ReactElement, link?: { label: string; href: string }, image?: string }) => (
  <Grid templateColumns='repeat(7, 1fr)' templateRows='repeat(5, 1fr)' gap={8} position='relative' h='100vH' minHeight={["60%", "70%"]} overflow='hidden' >
    {/* {!!image && <Image src={image} alt='treetop walk in Rugen' opacity='80%' position='absolute' top='0' zIndex='-1' minWidth="100%" minHeight="100%" objectFit="cover" />} */}
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/EWFiCvjYKio?si=jfGG2rMaIxlxwBzm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    {!image && <AspectRatio position='absolute' top='-10%' zIndex='-1' minWidth={["400%", "200%"]} minHeight="100%" objectFit="cover">
      <iframe src="https://www.youtube.com/embed/embed/videoseries?si=foLkI2-jJlJ6xRJR&amp;list=PLKGWhcWwmOrNiv7lm23eI_0avan8V5lf5&loop=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&hd=1" allow="autoplay" allowFullScreen={true} title="YouTube video player"></iframe>
      </AspectRatio>}
      {image && <AspectRatio
    position="absolute"
    zIndex="-1"
    bottom={0}
    left={0}
    width="100%"
    height="100%"
    objectFit="cover"
  >
    <Fade>
      <Image src={image} width="100vw" height="100%" objectFit="cover"  objectPosition="center calc(100% + 10rem)" />
    </Fade>
  </AspectRatio>}
    {!!heading && <GridItem colStart={[2, 3]} colEnd={8} rowStart={2} rowEnd={3}>{heading}</GridItem>}
    {!!subheading && <GridItem colStart={4} colEnd={8} rowStart={3} rowEnd={4} display={["grid", "grid"]}>{subheading}</GridItem>}
    {!!link && <GridItem colStart={4} colEnd={5} rowStart={4} rowEnd={5} alignSelf='end'><ButtonPrimary onClick={() => typeof window !== 'undefined' && window.open(link.href)} size='lg' href={link.href}>{link.label}</ButtonPrimary></GridItem>}
  </Grid>
)
