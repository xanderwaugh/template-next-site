import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useField } from "formik";

type InputFieldProps =
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    textarea?: boolean;
    autoComplete?: string;
  };

export const CustomInput: React.FC<InputFieldProps> = ({
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size: _,
  autoComplete = "on",
  ...props
}) => {
  const [field, { error, touched, value }] =
    useField(props);
  return (
    <>
      <FormControl isInvalid={touched && !!error}>
        <FormLabel
          htmlFor={field.name}
          fontSize={"12px"}
          lineHeight={"32px"}
          color={"#686868"}
          textAlign={"left"}
          textTransform={"uppercase"}
          fontWeight={600}
          mb={0}
          letterSpacing={"widest"}
        >
          {label}
        </FormLabel>
        <Input
          {...field}
          {...props}
          id={field.name}
          name={field.name}
          value={value}
          onBlur={field.onBlur}
          onChange={field.onChange}
          // autoComplete={"on"}
          autoComplete={autoComplete}
        />
        {error && touched && (
          <FormErrorMessage>{error}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};
