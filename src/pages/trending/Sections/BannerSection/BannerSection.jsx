import { AspectRatio, Center, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import bannerImage from "../../../../../public/Assets/trending/dopa.png";
import TrendingForm from "@/Components/Form/TrendingForm/TrendingForm";

export default function BannerSection() {
  return (
    <Center w="100%" px={{ base: 4, sm: 6, md: 8 }}>
      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2,1fr)" }}
        gridTemplateAreas={{ base: `'ad''form'`, sm: `'ad form'` }}
        gap={{ base: 2, md: 8 }}
        maxW="1400px"
        w="100%"
      >
        <AspectRatio ratio={1 / 1} w="100%" gridArea="ad">
          <Image
            src={bannerImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "20px",
            }}
            alt="Dopa for Neet"
          />
        </AspectRatio>
        <TrendingForm />
      </Grid>
    </Center>
  );
}
