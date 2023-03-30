import { Container, Stack } from "@mui/material";
import Page from "src/components/Page";
import Absence from "src/pages/dashboard/Absence";

export default function Dashboard() {
  return (
    <Page title="Tableau de bord : Statistique">
      <Container maxWidth="xl">
        <Stack>
          <Absence />
        </Stack>
      </Container>
    </Page>
  );
}
