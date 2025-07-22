import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Container,
} from "@chakra-ui/react";

export const NeetDetailsForm = ({
  onSubmit,
  isSubmitting,
  title,
  subheading,
  btn,
  rank,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container
      maxW="container.md "
      py={10}
      className="h-svh flex justify-center items-center"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="md"
        className="sm:min-w-[70%]"
      >
        <Heading
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.700"
          marginBottom={2}
        >
          {title}
        </Heading>
        <Heading as="h4" size="sm" mb={6} textAlign="center" color="blue.800">
          {subheading}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
                size={{ base: "md", md: "lg" }}
                px={{ base: 3, md: 4 }}
                py={{ base: 5, md: 6 }}
              />
              {errors.name && (
                <Box color="red.500" fontSize="sm" mt={1}>
                  {errors.name.message}
                </Box>
              )}
            </FormControl>
            {rank ? (
              <FormControl id="rank" isRequired>
                <FormLabel>Rank</FormLabel>
                <Input
                  type="number"
                  {...register("rank", {
                    required: "Rank is required",
                    min: { value: 0, message: "Rank cannot be negative" },
                    max: {
                      value: 1000000,
                      message: "Rank cannot be greater than 1000000",
                    },
                  })}
                  placeholder="Enter your rank"
                  size={{ base: "md", md: "lg" }}
                  px={{ base: 3, md: 4 }}
                  py={{ base: 5, md: 6 }}
                />
                {errors.rank && (
                  <Box color="red.500" fontSize="sm" mt={1}>
                    {errors.rank.message}
                  </Box>
                )}
              </FormControl>
            ) : (
              <FormControl id="neetScore" isRequired>
                <FormLabel>NEET Score</FormLabel>
                <Input
                  type="number"
                  {...register("neetscore", {
                    required: "NEET score is required",
                    min: { value: 0, message: "Score cannot be negative" },
                    max: { value: 720, message: "Maximum score is 720" },
                  })}
                  placeholder="Enter your NEET score"
                  size={{ base: "md", md: "lg" }}
                  px={{ base: 3, md: 4 }}
                  py={{ base: 5, md: 6 }}
                />
                {errors.neetscore && (
                  <Box color="red.500" fontSize="sm" mt={1}>
                    {errors.neetscore.message}
                  </Box>
                )}
              </FormControl>
            )}

            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="tel"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit mobile number",
                  },
                })}
                placeholder="Enter your mobile number"
                size={{ base: "md", md: "lg" }}
                px={{ base: 3, md: 4 }}
                py={{ base: 5, md: 6 }}
              />
              {errors.mobile && (
                <Box color="red.500" fontSize="sm" mt={1}>
                  {errors.mobile.message}
                </Box>
              )}
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
              isLoading={isSubmitting}
              loadingText="Submitting..."
            >
              {btn}
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default NeetDetailsForm;
