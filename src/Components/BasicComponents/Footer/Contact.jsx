import React, { useState } from 'react';
import Center from '../Center/Center';
import VStack from '../VStack/VStack';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showFeedback, setshowFeedback] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: 'onChange' });


  const onFormSubmission = (data) => {
    console.log(data)
    setLoading(true);
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('email',data.email)
    formData.append('message',data.email)
  setLoading(false)
  setshowFeedback(true)
  reset({
    email:'',
    firstName:'',
    lastName:'',
    phone:'',
    message:''
  })
  };

  return (
    <Center className=' bg-white  w-[100%]'>
      <VStack className='w-[100%] gap-[3rem]  xl:px-[5rem] '>
        <VStack className='gap-[1rem]'>
          <h2>CONTACT US</h2>
          <h1 className='card-heading'>
            Reach out with any  questions or inquiries
          </h1>
        </VStack>
        <div className='grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-[2rem]'>
          <Input
            className='border-b-[1px] border-black font-thin '
            label='First Name'
            register={register('firstName', {
              required: 'Phone field is required',
            })}
            error={errors?.firstName?.message}
            required
          />
          <Input
            className='border-b-[1px] border-black font-thin'
            label='Last Name'
            register={register('lastName', {
              required: 'Phone field is required',
            })}
            error={errors?.lastName?.message}
            required
          />
          <Input
            className='border-b-[1px] border-black font-thin'
            label='Email'
            register={register('email', {
              required: 'Phone field is required',
            })}
            error={errors?.email?.message}
            required
          />
          <Input
            className='border-b-[1px] border-black font-thin'
            label='Phone'
            register={register('phone', {
              required: 'Phone field is required',
            })}
            required
            error={errors?.phone?.message}
          />
        </div>
        <Input
          className='border-b-[1px] border-0 border-black font-thin pb-[4rem]'
          register={register('message', {
            required: 'Phone field is required',
          })}
          label='Leave us a message'
        />
        <div>
        {showFeedback && (
              <p className='rounded-sm bg-[lightGreen] p-1 text-[0.9rem] text-[green] mb-[1rem]'>
                Form submitted successfully
              </p>
            )}
          <Button isLoading={isLoading}  onClick={handleSubmit(onFormSubmission)} className='btn-common bg-[#AF6118] px-[4rem] text-white active:bg-white active:text-black'>
            Submit
          </Button>
        </div>
      </VStack>
    </Center>
  );
}
