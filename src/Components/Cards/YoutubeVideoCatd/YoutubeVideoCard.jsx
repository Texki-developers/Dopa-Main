import { AspectRatio, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function YoutubeVideoCard({
  vID,
  title,
  duration,
  setSelectedVideo,
}) {
  return (
    <HStack
      gap={2}
      boxShadow="0px 0px 10px rgba(0,0,0,0.05)"
      p={2}
      w="100%"
      cursor="pointer"
      onClick={() => setSelectedVideo(vID)}
    >
      <AspectRatio ratio={16 / 9} w="5rem">
        <Image
          src={`http://img.youtube.com/vi/${vID}/hqdefault.jpg`}
          w="100%"
          h="100%"
        />
      </AspectRatio>
      <Flex gap={2} alignItems="center" flex={1} justifyContent="space-between">
        <Text variant="description">{title}</Text>
        <Text variant="description" opacity={0.5}>
          {duration}
        </Text>
      </Flex>
    </HStack>
  );
}
