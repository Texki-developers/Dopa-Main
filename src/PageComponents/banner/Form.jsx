import Button from "@/Components/BasicComponents/Button/Button";
import Center from "@/Components/BasicComponents/Center/Center";
import Input from "@/Components/BasicComponents/Input/Input";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { saveThrissurLeads } from "@/utils/Services/trending.service";

export default function BannerForm() {
  const [isLoading, setLoading] = useState(false);
  const [showFeedback, setshowFeedback] = useState(false);
  const toast = useToast();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onFormSubmission = async (data) => {
    console.log(data);
    setLoading(true);
    const response = await saveThrissurLeads(data);
    if (response.status === 200) {
      toast({
        status: "success",
        description: "Registered Successfully!",
        title: "Great!",
      });
      setLoading(false);
      reset({
        email: "",
        name:"",
        class: "",
        school: "",
        whatsapp: "",
      });
    } else {
      setLoading(false);
      toast({
        status: "error",
        description: "Something went wrong!",
        title: "Ugh no!",
      });
    }
    setLoading(false);
    setshowFeedback(true);
    reset({
      email: "",
      name:"",
      class: "",
      school: "",
      whatsapp: "",
    });
  };

  return (
    <Center
      style={{
        boxShadow: "0px 4px 16px 8px #0000000A",
      }}
      className=" w-[100%]  bg-white"
    >
      <VStack className="w-[100%] gap-[1rem] md:gap-[2rem]  p-[0.5rem] pt-[1rem]  md:p-[2rem]">
        <h2 className="section-heading-small text-center md:text-start font-bold">
          Enquiry Form
        </h2>
        <VStack className="gap-[1rem] ">
          <Input
            className="  font-thin "
            placeholder="Name"
            register={register("name", {
              required: "Name field is required",
            })}
            error={errors?.name?.message}
            required
          />
          <Input
            placeholder="Class"
            register={register("class", {
              required: "class Field is required",
            })}
            error={errors?.class?.message}
            required
          />
          <Input
            placeholder="School"
            register={register("school", {
              required: "School field is required",
            })}
            error={errors?.school?.message}
            required
          />
          <Input
            placeholder="Whatsapp Number"
            register={register("whatsapp", {
              required: "whatsapp field is required",
            })}
            required
            error={errors?.whatsapp?.message}
          />
          <Input
            placeholder="Email"
            register={register("email", {
              required: "Email field is required",
            })}
            required
            error={errors?.email?.message}
          />
        </VStack>

        {showFeedback && (
          <p className="mb-[1rem] rounded-sm bg-[lightGreen] p-1 text-[0.9rem] text-[green]">
            Form submitted successfully
          </p>
        )}
        <Button
          isLoading={isLoading}
          onClick={handleSubmit(onFormSubmission)}
          className="btn-common bg-[#17829E] py-4 font-bold rounded-full text-white active:bg-white active:text-black"
        >
          Apply Now
        </Button>
      </VStack>
    </Center>
  );
}
