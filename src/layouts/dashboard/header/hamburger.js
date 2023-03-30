import { AnimatePresence, m } from "framer-motion";
import { useEffect } from "react";
import { alpha, styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { varFade } from "src/components/animate/variants/fade";
import CatLayout from "src/pages/CatLayout";
import Image from "src/components/Image";

const RootStyle = styled(m.div)(({ theme }) => ({
  top: 0,
  left: 230,
  bottom: 0,
  display: "flex",
  position: "fixed",
  overflow: "hidden",
  width: 800,
  flexDirection: "column",
  zIndex: theme.zIndex.drawer + 3,
  borderBottomRightRadius: 25,
  borderTopRightRadius: 25,
  boxShadow: `24px 12px 32px 4px ${alpha(theme.palette.common.black, 0.16)}`,
  backgroundColor: "#FFFFFF",
  justifyContent: "center",
  alignItems: "center",
}));

export default function CategoryHamburger({ isOpen, handleHambOpen }) {
  const varSidebar = varFade({
    distance: 260,
    durationIn: 0.32,
    durationOut: 0.32,
  }).inLeft;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <RootStyle {...varSidebar}>
          <Stack
            direction="row"
            alignItems="center"
            flexDirection="column"
            sx={{ py: 2, pr: 1, pl: 2.5 }}
          >
            <Stack>
              <Image src="./assets/Logo.svg" alt="logo" />
            </Stack>
            <CatLayout onNavigate={handleHambOpen} />
          </Stack>
        </RootStyle>
      )}
    </AnimatePresence>
  );
}
