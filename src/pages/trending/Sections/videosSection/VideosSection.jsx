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

export default function VideosSection({ data }) {
  return (
    <Center w="100%" px={{ base: 4, sm: 6, md: 8 }}>
      <VStack maxW="1400px" w="100%" gap={8}>
        <Heading variant="primary" fontWeight={600}>
          {data && data[0]?.videoTitle}
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
            {data &&
              data[0]?.videos.map((items) => (
                <YoutubeVideoCard
                  vID="4EvNxWhskf8"
                  title={items.videoHeading}
                  duration={items.duration}
                />
              ))}

    
          </VStack>
        </Grid>
      </VStack>
    </Center>
  );
}
