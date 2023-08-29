import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function DownoloadBrochure() {
  return (
    <Center w="100%" px={{ base: 4, sm: 6, md: 8 }}>
      <VStack py={4} maxW="1400px" gap={4}>
        <Heading variant="primary" textAlign="center" fontWeight={600}>  
          Learn Everything from DOPA
        </Heading>
        <VStack>
          <Text variant="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            autem aspernatur assumenda cumque atque, qui nisi dolorem similique
            enim laboriosam incidunt ducimus sequi rerum nesciunt adipisci,
            distinctio quo. Deleniti, quos adipisci odit omnis perferendis unde
            a temporibus assumenda dolor. Dicta rerum omnis rem! Amet hic, quia
            possimus deserunt veniam explicabo quas corporis nulla voluptatem
            neque itaque maxime delectus dolorem magnam exercitationem et
            tempora tempore quae nihil, numquam fugit a quam vero dicta.
            Laboriosam quae facilis, porro accusamus dignissimos asperiores ea
            ullam quas, recusandae blanditiis explicabo nemo eligendi nihil
            magnam quo neque tempore voluptas possimus necessitatibus
            praesentium quos sapiente numquam incidunt.
          </Text>
          <Button variant="primary" minW='10rem'>Download</Button>
        </VStack>
      </VStack>
    </Center>
  );
}
