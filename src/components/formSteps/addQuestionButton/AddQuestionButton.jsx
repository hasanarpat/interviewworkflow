"use client";
import { addQuestion } from "@/redux/slices/formSlice";
import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddQuestionButton = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.form.questions);
  const handleAdd = () => {
    dispatch(
      addQuestion({ id: questions.at(-1).id + 1, question: "", score: 0 })
    );
  };
  return (
    <Button
      sx={{
        width: "100%",
        borderRadius: 2,
        backgroundColor: "white",
      }}
      color="primary"
      variant="outlined"
      onClick={handleAdd}
      style={{ marginBottom: 64 }}
    >
      <AddCircle />
    </Button>
  );
};

export default AddQuestionButton;
