import styled from "@emotion/styled";
import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { MENUDATA } from "src/_mock/manatimeMock";
import Image from "./Image";
import { ListItemIconStyle } from "./nav-section/vertical/style";
import SvgIconStyle from "./SvgIconStyle";
import Stripe from "../assets/stripe2.svg";

const StyledBreadCrumb = styled(Typography)({
  maxWidth: 165,
  fontWeight: "bold",
  fontSize: 16,
  color: "#000",
});

const BreadCrumbBase = ({ data, onNavigate, selected, ...others }) => {
  const location = useLocation();
  const pathname = location.pathname?.slice(1).split("/");
  const breadCMenu = MENUDATA.filter((menu) => menu.to === pathname[0]);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<SvgIconStyle src={Stripe} sx={{ width: 16, height: 16 }} />}
    >
      {breadCMenu?.map(({ id, title, to, img }) => (
        <Stack sx={{ flexDirection: "row", alignItems: "center" }} key={id}>
          <ListItemIconStyle
            sx={{ width: 55, height: 30, minWidth: "initial" }}
          >
            <Image src={require(`../assets/${img}`)} alt={to} />
          </ListItemIconStyle>
          <StyledBreadCrumb onClick={() => onNavigate(to)} {...others}>
            {title}
          </StyledBreadCrumb>
        </Stack>
      ))}
      <Typography>Sous module</Typography>
      <Typography>Sous sous module</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbBase;
