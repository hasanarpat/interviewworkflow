"use client";
import { Button } from "@mui/material";
import React from "react";

const NavButton = ({ color, variant, sx, text, action }) => {
  const handleAction = () => {
    console.log(action);
  };
  return (
    <Button color={color} variant={variant} sx={sx} onClick={handleAction}>
      {text}
    </Button>
  );
};

export default NavButton;
