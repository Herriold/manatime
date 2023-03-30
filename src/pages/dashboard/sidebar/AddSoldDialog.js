import styled from "@emotion/styled";
import { Dialog, IconButton } from "@mui/material";
import React from "react";
import Iconify from "src/components/Iconify";
import AddSold from "./AddSold";

const StyledIconButton = styled(IconButton)({
  position: "absolute",
  top: 5,
  right: 5,
});

const AddSoldDialog = ({ onClose, open }) => {
  return (
    <Dialog fullWidth open={open} position="relative" maxWidth="sm">
      <StyledIconButton onClick={onClose}>
        <Iconify icon="ep:close-bold" size="xl" />
      </StyledIconButton>
      <AddSold onClose={onClose} />
    </Dialog>
  );
};

export default AddSoldDialog;
