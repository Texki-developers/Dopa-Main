import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { errorMessageStyle } from "../../styles";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputField({ name, control, rules, required }) {
  const {
    fieldState: { invalid, error },
    field: { onChange, value },
  } = useController({
    control,
    rules,
    name,
  });

  /**
   * The function formats a phone number and extracts the country code and number, then passes them to
   * the onChange function.
   * @param value - The phone number value entered by the user, including the country dial code.
   * @param country - The `country` parameter is an object that contains information about the selected
   * country, including its dial code and country code. It is likely being passed in from a dropdown or
   * selector component where the user chooses their country.
   */
  const handlePhoneChange = (phone) => {
    onChange(phone);
  };

  return (
    <FormControl isInvalid={invalid} isRequired={required} w="100%">
      <FormLabel variant="primary">Phone</FormLabel>
      <PhoneInput
        inputClass="telephone-input"
        onChange={handlePhoneChange}
        country="in"
        value={value}
      />
      <FormErrorMessage sx={errorMessageStyle}>
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
