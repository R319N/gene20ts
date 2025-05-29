import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { SelectProps } from '@mui/material/Select';
import React from "react";

// Define the types for the props
interface CustomSelectProps<T> {
  label?: string;
  size?: SelectProps["size"];
  value: T;
  setValue: (value: T) => void;
  options: T[];
  variant?: SelectProps["variant"];
  error?: boolean;
  helperText?: string;
  placeholder?: string; // Add placeholder prop
}

const CustomSelect = <T extends string | number>({
  label,
  value,
  size = "small",
  setValue,
  options,
  variant = "outlined",
  error = false,
  helperText = "",
  placeholder = "Select an option", // Default placeholder
}: CustomSelectProps<T>) => {
  return (
    <FormControl fullWidth variant={variant} error={error}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        value={value}
        id={`${label}-select`}
        label={label}
        size={size}
        onChange={(e) => setValue(e.target.value as T)}
        displayEmpty // Ensures placeholder is shown when value is empty
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option} sx={{ justifyContent: "start" }}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
