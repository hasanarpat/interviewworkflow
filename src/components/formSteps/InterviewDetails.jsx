import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import styles from "@/styles/newPage/forms/interviewForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { turnOffAlert, updateJobDetails } from "@/redux/slices/formSlice";

const InterviewDetails = () => {
  const alert = useSelector((state) => state.form.alert);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateJobDetails({ key: name, value }));
    dispatch(turnOffAlert());
  };
  const jobDetails = useSelector((state) => state.form.jobDetails);
  return (
    <Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
        className={styles.form}
      >
        <TextField
          id="title-input"
          label="Interview Title"
          value={jobDetails.title ? jobDetails.title : ""}
          className={styles.title}
          onChange={handleChange}
          name="title"
          placeholder="Enter Interview Title"
          error={alert && jobDetails.title.length <= 0 ? true : false}
        />
        <textarea
          id="textarea"
          className={styles.textarea}
          onChange={handleChange}
          name="description"
          value={jobDetails.description ? jobDetails.description : ""}
          style={
            alert && jobDetails.description.length <= 0
              ? { border: "2px solid red" }
              : {}
          }
        ></textarea>
        <FormControl fullWidth sx={{ marginTop: 3 }}>
          <InputLabel id="demo-simple-select-label">
            Interview Duration
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="age"
            onChange={handleChange}
            name="duration"
          >
            <MenuItem value={10}>10 minutes</MenuItem>
            <MenuItem value={20}>20 minutes</MenuItem>
            <MenuItem value={30}>30 minutes</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className={styles.locationTitle}
          >
            Job location
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="location"
            className={styles.radioGroup}
            onChange={handleChange}
            defaultValue="remote"
          >
            <Stack direction="column" className={styles.radioItemGroup}>
              <FormControlLabel
                value="remote"
                control={<Radio />}
                label="Remote"
              />
              <span className={styles.lowSpan}>Work from anywhere</span>
            </Stack>
            <Stack direction="column" className={styles.radioItemGroup}>
              <FormControlLabel
                value="homeoffice"
                control={<Radio />}
                label="Hybrid"
              />
              <span className={styles.lowSpan}>Work from homeoffice</span>
            </Stack>
            <Stack direction="column" className={styles.radioItemGroup}>
              <FormControlLabel
                value="onSite"
                control={<Radio />}
                label="On Site"
              />
              <span className={styles.lowSpan}>Work from office</span>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default InterviewDetails;
