import { Container, Typography, Stack } from "@mui/material";
import Page from "src/components/Page";

export default function Dashboard() {
  return (
    <Page title="Tableau de bord : Statistique">
      <Container maxWidth="xl">
        <Stack>
          <Typography variant="h4">Welcome to the Manatime !</Typography>
        </Stack>
      </Container>
    </Page>
  );
}
