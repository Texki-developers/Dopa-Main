import config from "@/utils/config";
import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function DownoloadBrochure({data}) {
  console.log(data)
  return (
    <Center w="100%" px={{ base: 4, sm: 6, md: 8 }}>
      <VStack py={4} maxW="1400px" gap={4}>
        <Heading variant="primary" textAlign="center" fontWeight={600}>  
          {data && data[0]?.attachHeading}
        </Heading>
        <VStack>
          <Text variant="description">
          {  data && data[0]?.attachPara}
          </Text>
          <Button onClick={()=>window.location.href=`${config.imageURL}${data[0].attachment}`} variant="primary" minW='10rem'>Download</Button>
        </VStack>
      </VStack>
    </Center>
  );
}
