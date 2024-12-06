"use client";
import React from "react";
import { useSelector } from "react-redux";
import InterviewDetails from "./InterviewDetails";
import InterviewQuestions from "./InterviewQuestions";
import Review from "./Review";
const Navigation = () => {
  const step = useSelector((state) => state.form.step);

  switch (step) {
    case 1:
      return <InterviewDetails />;
    case 2:
      return <InterviewQuestions />;
    case 3:
      return <Review />;
    default:
      return <></>;
  }
};

export default Navigation;
