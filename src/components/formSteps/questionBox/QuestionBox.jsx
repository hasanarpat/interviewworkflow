"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import styles from "@/styles/newPage/forms/interviewQuesitons.module.scss";

import EditIcon from "@mui/icons-material/Edit";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useDispatch, useSelector } from "react-redux";
import {
  editQuestion,
  removeQuestion,
  turnOffAlert,
} from "@/redux/slices/formSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const QuestionBox = ({ q }) => {
  const alert = useSelector((state) => state.form.alert);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable(q);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(q.score);
  const [question, setQuestion] = useState(q.question);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    setIsEdit(true);
  };
  const handleRemove = (e) => {
    const id = q.id;
    dispatch(removeQuestion(id));
    // dispatch(reorderQuestions(id));
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "textarea") {
      setQuestion(e.target.value);
      // question will be updated here
      dispatch(editQuestion({ key: "question", value, id: q.id }));
      if (value.length > 0) dispatch(turnOffAlert());
    } else if (e.target.name === "slider") {
      // slider value on redux will be updated here
      setValue(value);
      dispatch(editQuestion({ key: "score", value, id: q.id }));
      dispatch(turnOffAlert());
    }
  };

  return (
    <Box
      component="div"
      className={styles.box}
      key={q.id}
      ref={setNodeRef}
      style={
        alert && question.length <= 0
          ? { style, border: "2px solid red" }
          : style
      }
      {...attributes}
    >
      <Stack direction="row" className={styles.label}>
        <Typography variant="h5" component="h6">
          Question {q.id}
        </Typography>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" className={styles.question}>
        <IconButton aria-label="edit" {...listeners}>
          <DragIndicatorIcon />
        </IconButton>
        <textarea
          onChange={handleChange}
          disabled={!isEdit}
          value={question}
          name="textarea"
        >
          {q.question}
        </textarea>
      </Stack>
      <Stack direction="row" className={styles.actions}>
        <Stack direction="row" spacing={2} className={styles.sliderContainer}>
          <Typography variant="p" component="span">
            Weightage Score:
          </Typography>
          <Slider
            value={value}
            max={3}
            min={0}
            aria-label="slider"
            className={styles.slider}
            onChange={handleChange}
            name="slider"
          />
        </Stack>
        <Button
          variant="outlined"
          color="error"
          onClick={handleRemove}
          id={q.id}
        >
          Remove
        </Button>
      </Stack>
    </Box>
  );
};

export default QuestionBox;
