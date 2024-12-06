"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "@/styles/components/stateCard/style.module.scss";

const StateCard = ({ id }) => {
  const header =
    id === 1
      ? "Interview Title"
      : id === 2
      ? "Interview Questions"
      : "Summary & Review";
  const step = useSelector((state) => state.form.step);
  const jobTitle = useSelector((state) => state.form.jobDetails.title);
  const questions = useSelector((state) => state.form.questions);
  let title;

  switch (id) {
    case 1:
      title = jobTitle || header;
      break;
    case 2:
      title = questions[0] ? questions[0].question : header;
      break;
    case 3:
      title = "Summary & Review";
      break;
    default:
      title = header;
      break;
  }

  return (
    <Card
      sx={{ minWidth: 225, height: 120, maxWidth: 225 }}
      className={
        step === id ? styles.activeCard : step > id ? styles.verifiedCard : ""
      }
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {header}
        </Typography>
        <Typography
          variant="h6"
          component="span"
          sx={{ width: "100", breakAfter: "auto" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StateCard;
