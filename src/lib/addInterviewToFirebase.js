import addData from "@/firebase/data";

export const addInterview = async (data) => {
  const { result, error } = await addData("posts", "1", data);
  if (error) {
    return {
      request: "error",
      message: "Somethşng went wrong",
    };
  } else
    return {
      request: "success",
      result,
    };
};
