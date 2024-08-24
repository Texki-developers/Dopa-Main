import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { errorMessageStyle, inputFontSize } from "../../styles";

export default function PrimaryInput({
  label,
  errorMessage,
  register,
  required,
  type = "text",
  isDisabled,
  placeholder,
  isLine,
  color,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isInvalid={errorMessage ? true : false} isRequired={required}>
      <FormLabel variant="primary" color={color || "#000"}>
        {label}
      </FormLabel>
      {type === "textarea" ? (
        <Textarea
          isDisabled={isDisabled}
          placeholder={placeholder}
          sx={inputFontSize}
          {...register}
        />
      ) : (
        <InputGroup>
          <Input
            type={type === "password" && showPassword ? "text" : type}
            isDisabled={isDisabled}
            placeholder={placeholder}
            border={isLine ? "none" : "1px solid"}
            borderBottom={isLine ? "2px solid #000" : "1px solid"}
            sx={inputFontSize}
            borderRadius={isLine ? "none" : "5px"}
            outline={isLine ? "none" : ""}
            {...register}
          />
          {type === "password" && (
            <InputRightElement>
              <IconButton
                border="none"
                variant="outline"
                aria-label="password-btn"
                onClick={() => setShowPassword(!showPassword)}
                icon={
                  showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
              />
            </InputRightElement>
          )}
        </InputGroup>
      )}

      <FormErrorMessage sx={errorMessageStyle}>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
