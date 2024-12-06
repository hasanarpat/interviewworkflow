"use client";
import React from "react";
import { AppBar, Box, Stack } from "@mui/material";
import styles from "@/styles/newPage/new.module.scss";
import NavButton from "@/components/ui/navButton/NavButton";
import StateCard from "@/components/ui/stateCard/StateCard";
import BackButton from "@/components/ui/backButton/BackButton";
import Navigation from "@/components/formSteps/Navigation";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { assignJobDetails, assignQuestions } from "@/redux/slices/formSlice";
import { getData } from "@/firebase/data";

const New = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("id");
  const dispatch = useDispatch();
  const fetchInterview = async () => {
    const res = await getData(slug);
    dispatch(assignJobDetails(res.data.jobDetails));
    dispatch(assignQuestions(res.data.questions));
  };
  if (slug) {
    fetchInterview();
  }

  return (
    <div className={styles.new}>
      {/* NAVBAR START */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            height: 144,
            background: "white",
          }}
        >
          <Stack
            sx={{
              color: "black",
              height: "100%",
              width: "50%",
              margin: "auto",
              padding: "1rem 0",
              alignItems: "center",
            }}
            direction="row"
            spacing={4}
          >
            <BackButton />
            <StateCard id={1} />
            <StateCard id={2} />
            <StateCard id={3} />
          </Stack>
        </AppBar>
      </Box>
      {/* NAVBAR END */}
      {/* MAIN SECTION START */}
      <Navigation />
      {/* MAIN SECTION END */}
      {/* BOTTOM ACTIONS START */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            top: "calc(100svh - 80px)",
            height: 80,
            background: "white",
            color: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "50%",
              margin: "auto",
              justifyContent: "flex-end",
            }}
          >
            <NavButton
              variant="text"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                padding: "1rem 2rem",
                width: "8rem",
                marginRight: "auto",
              }}
              action="prev"
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
              Previous
            </NavButton>
            <Stack direction="row" spacing={{ xs: 1, lg: 2 }}>
              <NavButton
                color="inherit"
                variant="text"
                sx={{
                  padding: "1rem 2rem",
                  width: "8rem",
                }}
                action="next"
              >
                Next
              </NavButton>
              <NavButton
                color="inherit"
                variant="contained"
                sx={{
                  padding: "1rem 2rem",
                  width: "8rem",
                  background: "linear-gradient(to right, #9e0b94, #1841c7)",
                  color: "white",
                  transition: "all",
                  transitionDuration: "0.5s",
                  "&:hover": {
                    background: "linear-gradient(to right, #1841c7, #9e0b94)",
                    scale: 1.1,
                  },
                }}
                action={"publish"}
              >
                Publish
              </NavButton>
            </Stack>
          </Stack>
        </AppBar>
      </Box>
      {/* BOTTOM ACTIONS END */}
    </div>
  );
};

export default New;
