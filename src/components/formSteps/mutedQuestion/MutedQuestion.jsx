import React from "react";
import { Box, Slider, Stack, Typography } from "@mui/material";
import styles from "@/styles/components/mutedQuestion/style.module.scss";

const MutedQuestion = ({ q }) => {
  return (
    <Box component="div" className={styles.box}>
      <Stack direction="row" className={styles.label}>
        <Typography variant="h5" component="h6">
          Question {q.id}
        </Typography>
      </Stack>
      <Stack direction="row" className={styles.question}>
        <textarea value={q.question} disabled></textarea>
      </Stack>
      <Stack direction="row" className={styles.actions}>
        <Stack direction="row" spacing={2} className={styles.sliderContainer}>
          <Typography variant="p" component="span">
            Weightage Score:
          </Typography>
          <Slider
            defaultValue={q.score}
            max={3}
            min={0}
            aria-label="slider"
            className={styles.slider}
            disabled
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MutedQuestion;
