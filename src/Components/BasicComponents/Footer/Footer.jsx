import React from 'react';
import Center from '../Center/Center';
import Contact from './Contact';
import VStack from '../VStack/VStack';
import HStack from '../HStack/HStack';
import {
  BiFacebook,
  EntypoSocialLinkedinWithCircle,
  FormkitTwitter,
} from '../../Icons/Icons';
import Image from 'next/image';


export default function Footer() {
  return (
    <Center className='pt-[2rem] px-[1rem] xl:px-[5.5rem] '>
      <div className='grid w-[100%] grid-cols-1 gap-[3rem] items-start py-[1rem] xl:grid-cols-[1fr,3fr,1fr] xl:gap-[5rem]'>
        <div>
          <HStack className='!items-start gap-[0.5rem]'>
            <div className='aspect-[245/55] w-[10rem] sm:w-[13rem] relative'>
         <Image  src='/logo-black.png' alt='eslawyer' fill />
            </div>
       
          </HStack>
        </div>

        <Contact />
        <VStack className='gap-[7rem]'>
          <VStack className='gap-[2.5rem]'>
            <VStack className='gap-[1rem]'>
              <VStack className='gap-[1rem]'>
              <h1>ADDRESS</h1>
                <div>
                <p>Sharjah Office</p>
                <p className='lfont-thin'>
                  2008, 20th Floor, Al Hind Tower, Al Qasba, Sharjah, U.A.E
                </p>
                </div>
              </VStack>
              <VStack>
                <h1>PHONE</h1>
                <p className='lfont-thin'>+971 6 524 2443</p>
              </VStack>
            </VStack>
            <VStack className='gap-[1rem]'>
              <VStack>
              <p>Dubai Office</p>
              <p className='lfont-thin'>
                Al Fattan Plaza, Office No. 911 Dubai , UAE
              </p>
              </VStack>
        
              <VStack>
                <h1>PHONE</h1>
                <p className='lfont-thin'>+971 6 524 2443</p>
              </VStack>
            </VStack>

            <VStack className='gap-[1.2rem]'>
              <VStack>
                <h1>EMAIL</h1>
                <p className='lfont-thin'>info@eslawyers.ae</p>
              </VStack>

              <HStack className='gap-[1rem]'>
                <BiFacebook className='text-[2rem]' />
                <EntypoSocialLinkedinWithCircle className='text-[2rem]' />
                <FormkitTwitter className='text-[2rem]' />
              </HStack>
            </VStack>
          </VStack>
          <p className='lfont-thin' id='contact'>
            © 2024 by EISSA. Powered and secured by EISSA-IT
          </p>
        </VStack>
      </div>
    </Center>
  );
}
