import YoutubeVideoCard from "@/Components/Cards/YoutubeVideoCatd/YoutubeVideoCard";
import {
  AspectRatio,
  Box,
  Center,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const id = "yvCAi7Wp7SQSAAPY";

export default function VideosSection() {
  return (
    <Center w="100%"  px={{ base: 4, sm: 6, md: 8 }}>
      <VStack maxW="1400px" w="100%" gap={8}>
        <Heading variant="primary" fontWeight={600}>
          This is video section
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4} w="100%">
          <AspectRatio ratio={16 / 9} w="100%">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/zwmy-NoZcTw?si=${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </AspectRatio>
          <VStack>
            <YoutubeVideoCard
              vID="4EvNxWhskf8"
              title="This is the title of the video"
              duration="33:57"
            />
            <YoutubeVideoCard
              vID="4EvNxWhskf8"
              title="This is the title of the video"
              duration="33:57"
            />
            <YoutubeVideoCard
              vID="4EvNxWhskf8"
              title="This is the title of the video"
              duration="33:57"
            />
          </VStack>
        </Grid>
      </VStack>
    </Center>
  );
}
