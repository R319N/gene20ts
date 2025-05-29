// components/form-components/FormInputRadioGroup.tsx
'use client';

import { Controller, Control } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface FormInputRadioGroupProps extends RadioGroupProps {
  name: string;
  control: Control<any>;
  label: string;
  options: Option[];
}

export const FormInputRadioGroup = ({
    name,
    control,
    label,
    options,
    row,
    ...rest
  }: FormInputRadioGroupProps) => {
    return (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => ( // <-- include fieldState
            <FormControl component="fieldset" error={!!fieldState.error}>
              <FormLabel component="legend">{label}</FormLabel>
              <RadioGroup {...field} row={row} {...rest}>
                {options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      );
};

  

  