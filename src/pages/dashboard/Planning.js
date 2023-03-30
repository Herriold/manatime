import { Container, Typography, Stack } from "@mui/material";
import Page from "src/components/Page";

export default function Planning() {
  return (
    <Page title="Planning">
      <Container maxWidth="xl">
        <Stack>
          <Typography>Welcome, ici c'est la page Planning !</Typography>
        </Stack>
      </Container>
    </Page>
  );
}
