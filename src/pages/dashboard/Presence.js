import { Container, Typography, Stack } from "@mui/material";
import Page from "src/components/Page";

export default function Presence() {
  return (
    <Page title="Présence">
      <Container maxWidth="xl">
        <Stack>
          <Typography>Welcome, ici c'est la page Présence !</Typography>
        </Stack>
      </Container>
    </Page>
  );
}
