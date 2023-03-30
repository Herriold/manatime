import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { m } from "framer-motion";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MotionContainer from "src/components/animate/MotionContainer";
import { varBounce } from "src/components/animate/variants/bounce";
import Page from "src/components/Page";

import PageNotFoundIllustration from "./PageNotFoundIllustration";

const RootStyle = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  paddingBottom: theme.spacing(10),
  paddingTop: theme.spacing(15),
}));

const Page404 = () => {
  return (
    <Page sx={{ height: 1 }} title="404 Page Not Found">
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ margin: "auto", maxWidth: 480, textAlign: "center" }}>
            <m.div variants={varBounce().in}>
              <Typography paragraph variant="h3">
                Page introuvable !
              </Typography>
            </m.div>
            <Typography sx={{ color: "text.secondary" }}>
              Désolé, la page que vous recherchez n'existe pas. Vérifiez l'URL
              et essayez à nouveau.
            </Typography>

            <m.div variants={varBounce().in}>
              <PageNotFoundIllustration
                sx={{ height: 220, my: { sm: 10, xs: 5 } }}
              />
            </m.div>

            <Button
              component={RouterLink}
              size="large"
              to="/"
              variant="contained"
            >
              Retour à la page d'accueil
            </Button>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
};

export default Page404;
