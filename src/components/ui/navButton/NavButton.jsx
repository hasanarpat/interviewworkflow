"use client";
import { addData, updateData } from "@/firebase/data";
import { nextStep, prevStep } from "@/redux/slices/formSlice";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NavButton = ({ color, variant, sx, action, children }) => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.form.alert);
  const step = useSelector((state) => state.form.step);
  const jobDetails = useSelector((state) => state.form.jobDetails);
  const questions = useSelector((state) => state.form.questions);
  const navigate = useRouter();

  const searchParams = useSearchParams();
  const slug = searchParams.get("id");

  const handleAction = () => {
    switch (action) {
      case "prev":
        dispatch(prevStep());
        break;
      case "next":
        dispatch(nextStep());
        break;
      case "publish":
        // const answer = addInterview({ jobDetails, questions });
        // if (answer.request === "error") console.log(answer.message);
        // else if (answer.request === "success") console.log(answer.result);
        if (step !== 3) return;
        if (slug) updateData({ jobDetails, questions }, slug);
        else addData({ jobDetails, questions });
        navigate.push("/");
        break;
      default:
        break;
    }
  };

  return step == 1 && action == "prev" ? (
    <></>
  ) : (
    <Button
      color={color}
      variant={variant}
      sx={sx}
      onClick={handleAction}
      disabled={
        (alert && action === "next") || (step === 3 && action === "next")
      }
    >
      {children}
    </Button>
  );
};

export default NavButton;
