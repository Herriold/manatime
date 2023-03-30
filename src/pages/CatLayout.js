import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import BaseCard from "src/components/Card";
import Image from "src/components/Image";
import { getActive } from "src/components/nav-section";
import { ListItemIconStyle } from "src/components/nav-section/vertical/style";
import { MENUDATA } from "src/_mock/manatimeMock";

const RootStyle = styled("div")(() => ({
  height: "100%",
  padding: 40,
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "50px 0px",
}));

const StylItems = styled(BaseCard)(({ theme, selected }) => ({
  padding: "32px 0px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  cursor: "pointer",
  color: theme.palette.grey[500],
  fontWeight: 700,
  border: selected ? "2px solid #0090F5" : "1px solid #D4D4D4",
  transition: "all .2s ease-in-out",
  borderRadius: 10,
  "&:hover": {
    border: "1px solid #0090F5",
    color: "#000",
  },
  width: 170,
}));

export default function CatLayout({ onNavigate }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (to) => {
    navigate(to);
    onNavigate && onNavigate();
  };

  return (
    <RootStyle>
      <ContentStyle>
        <Grid container spacing={0.5}>
          {MENUDATA.map((item) => (
            <Grid item xs={3} key={item.id}>
              <StylItems
                onClick={() => handleClick(item?.to)}
                selected={getActive(item?.to, pathname)}
              >
                <ListItemIconStyle
                  sx={{ width: 100, height: 60, minWidth: "initial" }}
                >
                  <Image src={`./assets/${item.img}`} alt={item.to} />
                </ListItemIconStyle>
                <Typography mt={2} fontSize={20}>
                  {item.title}
                </Typography>
              </StylItems>
            </Grid>
          ))}
        </Grid>
      </ContentStyle>
    </RootStyle>
  );
}
