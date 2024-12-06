import { goToExactStep } from "@/redux/slices/formSlice";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Edit } from "@mui/icons-material";

const ReviewEditButton = ({ to }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(goToExactStep(to));
  };
  return (
    <IconButton onClick={handleClick}>
      <Edit />
    </IconButton>
  );
};

export default ReviewEditButton;
