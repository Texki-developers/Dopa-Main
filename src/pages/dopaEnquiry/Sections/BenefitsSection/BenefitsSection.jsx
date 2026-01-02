import {
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdCheck } from "react-icons/md";

export default function BenefitsSection() {
  return (
    <Center w="100%" px={{ base: 4, sm: 6, md: 8 }} bg="brand.primary">
      <VStack py={10} maxW="1400px" gap={8}>
        <Heading variant="primary" color="white">
          Benefits of this course
        </Heading>
        <List
          color="white"
          spacing={{ base: 2, sm: 3, md: 4 }}
          fontSize={["0.8rem", "0.9rem", "1rem"]}
        >
          <ListItem>
            <ListIcon as={MdCheck} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa
            atque voluptatibus sunt labore.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheck} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa
            atque voluptatibus sunt labore.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheck} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa
            atque voluptatibus sunt labore.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheck} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa
            atque voluptatibus sunt labore.
          </ListItem>
        </List>
      </VStack>
    </Center>
  );
}
