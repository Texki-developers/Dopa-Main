import YoutubeVideoCard from "@/Components/Cards/YoutubeVideoCatd/YoutubeVideoCard";
import {
  AspectRatio,
  Box,
  Center,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

export default function VideosSection({ data }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log({ data });
  useMemo(() => {
    if (data) {
      setSelectedVideo(data[0]?.videos[0]?.link);
    }
  }, [data]);

  console.log({ selectedVideo });
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
              src={`https://www.youtube.com/embed/${selectedVideo}`}
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
                  vID={items.link}
                  title={items.videoHeading}
                  duration={items.duration}
                  setSelectedVideo={setSelectedVideo}
                />
              ))}
          </VStack>
        </Grid>
      </VStack>
    </Center>
  );
}
