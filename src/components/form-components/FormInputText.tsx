import { TextField, InputAdornment } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./form-input-props";

export const FormInputText = ({
  name,
  control,
  label,
  sx,
  type = "text",
  startAdornment,
  endAdornment,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          size="small"
          type={type}
          onChange={field.onChange}
          value={field.value}
          error={!!fieldState.error}
          helperText={fieldState.error?.message ?? null}
          fullWidth
          label={label}
          variant="outlined"
          sx={sx}
          InputProps={{
            startAdornment: startAdornment ? (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ) : undefined,
            endAdornment: endAdornment ? (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ) : undefined,
          }}
        />
      )}
    />
  );
};
