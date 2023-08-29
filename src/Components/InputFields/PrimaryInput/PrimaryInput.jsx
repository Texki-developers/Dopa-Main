import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from '@chakra-ui/react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import { errorMessageStyle, inputFontSize } from '../../styles';

export default function PrimaryInput({
  label,
  errorMessage,
  register,
  required,
  type = 'text',
  isDisabled,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isInvalid={errorMessage ? true : false} isRequired={required}>
      <FormLabel variant='primary'>{label}</FormLabel>
      {type === 'textarea' ? (
        <Textarea
          isDisabled={isDisabled}
          placeholder={placeholder}
          sx={inputFontSize}
          {...register}
        />
      ) : (
        <InputGroup>
          <Input
            type={type === 'password' && showPassword ? 'text' : type}
            isDisabled={isDisabled}
            placeholder={placeholder}
            sx={inputFontSize}
            {...register}
          />
          {type === 'password' && (
            <InputRightElement>
              <IconButton
                border='none'
                variant='outline'
                aria-label='password-btn'
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
