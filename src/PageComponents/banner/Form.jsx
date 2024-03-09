import Button from '@/Components/BasicComponents/Button/Button';
import Center from '@/Components/BasicComponents/Center/Center';
import Input from '@/Components/BasicComponents/Input/Input';
import VStack from '@/Components/BasicComponents/VStack/VStack';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';


export default function BannerForm() {
  const [isLoading, setLoading] = useState(false);
  const [showFeedback, setshowFeedback] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onFormSubmission = (data) => {
    console.log(data);
    setLoading(true);
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('message', data.email);
    setLoading(false);
    setshowFeedback(true);
    reset({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Center style={{
      boxShadow: '0px 4px 16px 8px #0000000A',

    }} className=' w-[100%]  bg-white  '>
      <VStack className='w-[100%] gap-[1rem] md:gap-[2rem]  p-[0.5rem] pt-[1rem]  md:p-[2rem]'>
      <h2 className='section-heading-small text-center md:text-start font-bold' >Enquiry Form</h2>
        <VStack className='gap-[1rem] '>
          <Input
            className='  font-thin '
            placeholder='Name'
            register={register('name', {
              required: 'Name field is required',
            })}
            error={errors?.name?.message}
            required
          />
          <Input
    
            placeholder='class'
            register={register('class', {
              required: 'class Field is required',
            })}
            error={errors?.class?.message}
            required
          />
          <Input
    
            placeholder='school'
            register={register('school', {
              required: 'School field is required',
            })}
            error={errors?.school?.message}
            required
          />
          <Input
    
            placeholder = 'whatsapp Number'
            register={register('whatsapp', {
              required: 'whatsapp field is required',
            })}
            required
            error={errors?.whatsapp?.message}
          />
         <Input
    
            placeholder='Email'
            register={register('email', {
              required: 'Email field is required',
            })}
            required
            error={errors?.email?.message}
          />
        </VStack>
     
     
          {showFeedback && (
            <p className='mb-[1rem] rounded-sm bg-[lightGreen] p-1 text-[0.9rem] text-[green]'>
              Form submitted successfully
            </p>
          )}
          <Button
            isLoading={isLoading}
            onClick={handleSubmit(onFormSubmission)}
            className='btn-common bg-[#17829E] py-4 font-bold rounded-full text-white active:bg-white active:text-black'
          >
            Apply Now
          </Button>
      
      </VStack>
    </Center>
  );
}
