import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import FormProvider from "src/components/hook-form/FormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import RHFTextField from "src/components/hook-form/RHFTextField";
import { useSnackbar } from "notistack";
import RHFSelect from "src/components/hook-form/RHFSelect";
import { USERDATA } from "src/_mock/manatimeMock";
import useSold from "src/hooks/useSold";

const AddSold = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    soldState: { sold },
    soldDispatch,
  } = useSold();

  const defaultValues = {
    user: "",
    category: "",
    period: "",
    curSold: "",
    takenSold: "",
    futurSold: "",
  };

  const SoldSchema = Yup.object().shape({
    user: Yup.string().required("Champ requis"),
    category: Yup.string().required("Champ requis"),
    period: Yup.string().required("Champ requis"),
    curSold: Yup.string().required("Champ requis"),
    takenSold: Yup.string().required("Champ requis"),
    futurSold: Yup.string().required("Champ requis"),
  });

  const methods = useForm({
    resolver: yupResolver(SoldSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    const { user, category, period, curSold, takenSold, futurSold } = data;
    const pushing = {
      id: uuidv4(),
      userId: user,
      category,
      period,
      curSold,
      takenSold,
      futurSold,
    };
    const updateSold = [...sold, pushing];
    soldDispatch({ payload: updateSold, type: "setSold" });
    enqueueSnackbar("Nouveau SOLDE a été ajouté !");
    onClose();
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 5, maxWidth: 600 }}>
        <Stack spacing={3} alignItems="center">
          <Typography fontSize={32}>{"Nouveau SOLDE"}</Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box sx={{ mb: 1, width: "100%" }}>
                <RHFSelect name="user" label="Utilisateur">
                  <option value=""></option>
                  {USERDATA.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </RHFSelect>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <RHFTextField name="category" label="Categorie*" />
            </Grid>
            <Grid item xs={4}>
              <RHFTextField name="period" label="Période*" />
            </Grid>
            <Grid item xs={4}>
              <RHFTextField name="curSold" label="Solde actuel*" />
            </Grid>
            <Grid item xs={4}>
              <RHFTextField name="takenSold" label="Solde pris*" />
            </Grid>
            <Grid item xs={4}>
              <RHFTextField name="futurSold" label="Solde futur*" />
            </Grid>
          </Grid>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              pt: 3,
            }}
          >
            <Button
              onClick={onClose}
              variant="outlined"
              sx={{
                width: 120,
                py: 1,
                borderRadius: 0.5,
                borderColor: "#BFCCD4",
                color: "#094694",
                "&:hover": {
                  borderColor: "#094694",
                },
              }}
            >
              Annuler
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
              sx={{
                width: 150,
                py: 1,
                borderRadius: 0.5,
                backgroundColor: "#0090F5",
                "&:hover": {
                  backgroundColor: "#094694",
                },
              }}
            >
              Enregistrer
            </LoadingButton>
          </Stack>
        </Stack>
      </Card>
    </FormProvider>
  );
};

export default AddSold;
