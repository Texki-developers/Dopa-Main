import Button from "@/Components/BasicComponents/Button/Button";
import Center from "@/Components/BasicComponents/Center/Center";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import PrimaryInput from "@/Components/InputFields/PrimaryInput/PrimaryInput";
import MainLayout from "@/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <Center className="pt-[5.5rem] md:pt-[7rem] pb-[2rem]">
        <div className="common-space-x grid sm:grid-cols-2 gap-[2rem] w-[100%]">
          <div className="flex flex-col gap-[2rem]">
            <h3 className="section-heading text-gradient">Contact Us</h3>
            <div className="flex flex-col gap-[1.5rem]">
              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.3rem]">
                  <h6 className="text-basic text-gray-400 uppercase">Phone</h6>
                  <Link href="tel:+919645202200" className="text-basic">
                    +91 9645 202 200
                  </Link>
                  <Link href="tel:+919645032200" className="text-basic">
                    +91 9645 032 200
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.3rem]">
                  <h6 className="text-basic text-gray-400 uppercase">
                    Email Address
                  </h6>
                  <Link href="mailto:dopainfo@gmail.com" className="text-basic">
                    dopainfo@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.3rem]">
                  <h6 className="text-basic text-gray-400 uppercase">
                    Head Office
                  </h6>
                  <Link href="" className="text-basic max-w-[25rem]">
                    7VC2+23G DOPACOACHING HEAD OFFICE, Mavoor Rd, Velliparamba,
                    Kozhikode, Kerala 673008
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.3rem]">
                  <h6 className="text-basic text-gray-400 uppercase">
                    Social Media
                  </h6>
                  <div className="flex gap-[1rem]">
                    <Link href="#">
                      <div className="aspect-square w-[1rem] relative">
                        <Image src="/Assets/icons/insta.png" fill />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="aspect-square w-[1rem] relative">
                        <Image src="/Assets/icons/fb.png" fill />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="aspect-square w-[1rem] relative">
                        <Image src="/Assets/icons/yt.png" fill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex justify-center items-center">
            <div className="p-[2rem] rounded-[14px] min-w-[100%] sm:min-w-[80%] max-w-[30rem] justify-center items-center border-[2px] border-[#000] h-max">
              <VStack className="gap-[0.5rem]">
                <PrimaryInput color="#323232" isLine label="Your Name" />
                <PrimaryInput color="#323232" isLine label="District" />
                <PrimaryInput color="#323232" isLine label="Phone Number" />
                <PrimaryInput color="#323232" isLine label="Class" />
                <Button className="btn-solid mt-[1rem] bg-primary-500 text-white font-[600] border-[1px] shadow-[0px_3.42px_3.42px_0px_#00000040]">
                  Contact Us
                </Button>
              </VStack>
            </div>
          </div>
        </div>
      </Center>
    </MainLayout>
  );
}
