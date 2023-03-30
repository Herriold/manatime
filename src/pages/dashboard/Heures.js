import { Container, Typography, Stack } from "@mui/material";
import Page from "src/components/Page";

export default function Heures() {
  return (
    <Page title="Heures">
      <Container maxWidth="xl">
        <Stack>
          <Typography>Welcome, ici c'est la page Heures !</Typography>
        </Stack>
      </Container>
    </Page>
  );
}
