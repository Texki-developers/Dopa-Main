import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Container } from '@chakra-ui/react';

export const NeetDetailsForm = ({ onSubmit, isSubmitting }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    return (
        <Container maxW="container.md " py={10} className='h-svh' >
            <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
                <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.700">
                    Enter Your NEET Details
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack spacing={4}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input 
                                type="text" 
                                {...register('name', { required: 'Name is required' })}
                                placeholder="Enter your full name"
                                size="lg"
                            />
                            {errors.name && (
                                <Box color="red.500" fontSize="sm" mt={1}>
                                    {errors.name.message}
                                </Box>
                            )}
                        </FormControl>

                        <FormControl id="neetScore" isRequired>
                            <FormLabel>NEET Score</FormLabel>
                            <Input 
                                type="number" 
                                {...register('neetScore', { 
                                    required: 'NEET score is required',
                                    min: { value: 0, message: 'Score cannot be negative' },
                                    max: { value: 720, message: 'Maximum score is 720' }
                                })}
                                placeholder="Enter your NEET score"
                                size="lg"
                            />
                            {errors.neetScore && (
                                <Box color="red.500" fontSize="sm" mt={1}>
                                    {errors.neetScore.message}
                                </Box>
                            )}
                        </FormControl>

                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email" 
                                {...register('email', { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                placeholder="Enter your email"
                                size="lg"
                            />
                            {errors.email && (
                                <Box color="red.500" fontSize="sm" mt={1}>
                                    {errors.email.message}
                                </Box>
                            )}
                        </FormControl>

                        <FormControl id="mobile" isRequired>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input 
                                type="tel" 
                                {...register('mobile', { 
                                    required: 'Mobile number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Please enter a valid 10-digit mobile number'
                                    }
                                })}
                                placeholder="Enter your mobile number"
                                size="lg"
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
                            Get College Prediction
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Container>
    );
};

export default NeetDetailsForm;
