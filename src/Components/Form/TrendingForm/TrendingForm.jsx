import PhoneInputField from "@/Components/InputFields/PhoneInput/PhoneInputField";
import PrimaryInput from "@/Components/InputFields/PrimaryInput/PrimaryInput";
import SelectInput from "@/Components/InputFields/SelectInput/SelectInput";
import { Button, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { classess } from "./trendingForm.data";
import { saveLeads } from "@/utils/Services/trending.service";

export default function TrendingForm({landingData}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onFormSubmission = (data) => {
    data.formname = 'Mainpage'
    saveLeads(data)
    reset({})
  };
console.log()
  return (
    <VStack w="100%" alignSelf="center">
      <Heading variant="secondary" textAlign="left">
   {landingData && landingData[0]?.landingTitle}
      </Heading>
      <VStack w="100%">
        <PrimaryInput
          label="Name"
          register={register("name", { required: "Name is required field" })}
          errorMessage={errors.name?.message}
          required
        />
        <PrimaryInput
          label="Email"
          register={register("email", { required: "Email is required field" })}
          errorMessage={errors.email?.message}
          required
          type="email"
        />
        <PhoneInputField
          control={control}
          name="phone"
          required
          rules={{ required: "Phone is required field" }}
        />
        <SimpleGrid columns={2} gap={2} w="100%">
          <PrimaryInput
            label="District"
            register={register("district")}
            errorMessage={errors.district?.message}
          />
          <SelectInput
            label="Class"
            register={register("class")}
            errorMessage={errors.class?.message}
            list={classess}
          />
        </SimpleGrid>
        <PrimaryInput
          label="School"
          register={register("school")}
          errorMessage={errors.school?.message}
        />
        <Button
          variant="primary"
          minW="15rem"
          mt={6}
          onClick={handleSubmit(onFormSubmission)}
        >
          Submit
        </Button>
      </VStack>
    </VStack>
  );
}
