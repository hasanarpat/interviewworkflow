"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const navigate = useRouter();
  const handleBack = () => {
    navigate.push("/");
  };
  return (
    <Button
      variant="text"
      color="inherit"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        padding: "1rem 2rem",
        width: "8rem",
      }}
      onClick={handleBack}
    >
      <span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1rem"
          width="1rem"
          xmlns="http://www.w3.org/2000/svg"
          style={{ verticalAlign: "middle" }}
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
        </svg>
      </span>
      Cancel
    </Button>
  );
};

export default BackButton;
