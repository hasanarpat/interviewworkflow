import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/newPage/review.module.scss";
import MutedQuestion from "./mutedQuestion/MutedQuestion";
import ReviewEditButton from "./reviewEditButton/ReviewEditButton";

const Review = () => {
  const jobDetails = useSelector((state) => state.form.jobDetails);
  const questions = useSelector((state) => state.form.questions);
  return (
    <div className={styles.container}>
      <Box component="div" className={styles.wrapper}>
        <Box
          component="div"
          sx={{
            background: "white",
            borderRadius: 1,
            padding: "3.5rem 2.25rem",
          }}
        >
          <Typography variant="h5" component="h6" sx={{ marginBottom: 2 }}>
            {jobDetails.title || "Interview Details"}
          </Typography>

          <Box
            component="div"
            sx={{ border: "1px solid lightgray", borderRadius: 2 }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid lightgray",
                padding: 1,
              }}
            >
              <Typography variant="h6" component="h6">
                Job Details
              </Typography>
              <ReviewEditButton to={1} />
            </Stack>
            <Stack direction="column" spacing={2}>
              <Stack
                direction="column"
                spacing={2}
                sx={{
                  padding: 1,
                }}
              >
                <Typography variant="h6" component="p">
                  Job Title
                </Typography>
                <Typography variant="p" component="p">
                  {jobDetails.title || "Pariatur incididunt quis"}
                </Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={2}
                sx={{
                  padding: 1,
                }}
              >
                <Typography variant="h6" component="p">
                  Job Description
                </Typography>
                <Typography variant="p" component="p">
                  {jobDetails.description ||
                    "Pariatur incididunt cupidatat veniam pariatur reprehenderit laboris amet tempor tempor anim dolor duis. Proident ea mollit in tempor mollit esse esse qui labore nisi consequat voluptate pariatur ut. Est proident est id Lorem esse sit ipsum eiusmod velit. Do aliquip ipsum anim duis ea dolor irure Lorem aliqua ipsum amet. Aute id sit ipsum mollit incididunt cillum proident aute veniam laboris in minim ipsum et. Sit deserunt quis reprehenderit ullamco quis."}
                </Typography>
              </Stack>
              <span
                style={{
                  background: "azure",
                  padding: "0.25rem",
                  borderRadius: "4px",
                  width: "max-content",
                  color: "gray",
                  marginLeft: "0.75rem",
                  marginBottom: 16,
                }}
              >
                {jobDetails.duration} minutes
              </span>
            </Stack>
          </Box>

          <Box
            component="div"
            sx={{
              border: "1px solid lightgray",
              borderRadius: 2,
              marginTop: 2,
              marginBottom: 6,
              padding: 1,
            }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "flex-end",
                borderBottom: "1px solid lightgray",
                padding: 1,
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                sx={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Interview Questions
              </Typography>
              <ReviewEditButton to={2} />
            </Stack>
            <Stack direction="column" spacing={2}>
              {questions.map((q) => (
                <MutedQuestion key={q.id} q={q} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Review;
