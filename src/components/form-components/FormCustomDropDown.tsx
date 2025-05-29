import { Controller } from "react-hook-form";
import { FormInputProps } from "./form-input-props";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface FormInputDropdownProps extends FormInputProps {
  options: { label: string; value: string }[];
}

export const FormInputDropdown = ({
  name,
  control,
  label,
  sx,
  options,
}: FormInputDropdownProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          error={!!fieldState.error}
          fullWidth
          size="small"
          sx={sx}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            {...field} // ✅ Correct binding of value, onChange, onBlur, ref
            labelId={`${name}-label`}
            label={label}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
