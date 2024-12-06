import { createSlice } from "@reduxjs/toolkit";
import questions from "@/mock/data.json";

const initialState = {
  step: 1,
  jobDetails: {
    title: "",
    description: "",
    duration: 10,
    location: "remote",
  },
  questions: questions,
  reviewData: {},
  alert: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step === 3) return;
      else {
        if (checkFormFilled(state, state.step)) state.step += 1;
        else {
          state.step = state.step;
          state.alert = true;
        }
      }
    },
    prevStep: (state) => {
      if (state.step === 1) return;
      state.step -= 1;
    },
    goToExactStep: (state, action) => {
      state.step = action.payload;
    },
    updateJobDetails: (state, action) => {
      const { key, value } = action.payload;
      state.jobDetails[key] = value;
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    editQuestion: (state, action) => {
      const { key, value, id } = action.payload;
      state.questions[id - 1][key] = value;
    },
    removeQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
    },
    turnOffAlert: (state) => {
      state.alert = false;
    },
    // whole array will be sent to reorderQuestions to set order
    reorderQuestions: (state, action) => {
      state.questions = action.payload;
    },
    updateReviewData: (state, action) => {
      state.reviewData = action.payload;
    },
    assignJobDetails: (state, action) => {
      state.jobDetails = action.payload;
    },
    assignQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

const checkFormFilled = (state, step) => {
  switch (step) {
    case 1:
      if (
        Object.values(state.jobDetails).every((value) => Boolean(value)) ==
        false
      ) {
        state.alert = true;
        return false;
      }
      break;
    case 2:
      if (state.questions.length <= 0) {
        state.alert = true;
        return false;
      }
      if (areAllQuestionsComplete(state)) {
        state.alert = true;
        return false;
      }
      break;
    default:
      break;
  }
  return true;
};

export const areAllQuestionsComplete = (state) =>
  !state.questions.every((obj) =>
    Object.values(obj).every(
      (value) => value !== null && value !== undefined && value !== ""
    )
  );

export const {
  nextStep,
  prevStep,
  goToExactStep,
  updateJobDetails,
  addQuestion,
  editQuestion,
  removeQuestion,
  reorderQuestions,
  updateReviewData,
  turnOffAlert,
  assignJobDetails,
  assignQuestions,
} = formSlice.actions;

export default formSlice.reducer;
