import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function RHFSelect({ name, children, onChange, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
          InputProps={{
            sx: {
              borderRadius: "5px",
              "&.Mui-focused": {
                color: "black",
              },
              "&.MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            },
          }}
        >
          {children}
        </TextField>
      )}
    />
  );
}
