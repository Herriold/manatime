import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function RHFTextField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          InputProps={{
            sx: {
              borderRadius: "4px",
              border: "1px solid initial",
              boxShadow: "0px 19px 43px rgba(0, 0, 0, 0.05)",
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "initial",
                },
                "&:hover fieldset": {
                  borderColor: "#0569C2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0569C2",
                },
              },
            },
          }}
          {...other}
        />
      )}
    />
  );
}
