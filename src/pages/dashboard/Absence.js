import { Button, Container } from "@mui/material";
import { useState } from "react";
import Page from "src/components/Page";
import SvgIconStyle from "src/components/SvgIconStyle";
import AddSoldDialog from "./sidebar/AddSoldDialog";
import SoldManager from "./sidebar/SoldManager";

export default function Absence() {
  const [open, setOpen] = useState(false);
  return (
    <Page title="Absence">
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column", mt: 2 }}
      >
        <Button
          sx={{
            px: 3,
            alignSelf: "flex-end",
            marginRight: 2.5,
            marginBottom: 2.5,
          }}
          variant="contained"
          onClick={() => setOpen(!open)}
          endIcon={
            <SvgIconStyle
              src="./assets/Add.svg"
              sx={{ height: 18, width: 18, color: "#FFFFFF" }}
            />
          }
        >
          Nouveau Solde
        </Button>
        <SoldManager />
      </Container>
      <AddSoldDialog open={open} onClose={() => setOpen(!open)} />
    </Page>
  );
}
