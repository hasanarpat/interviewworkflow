import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StateCard = ({ id }) => {
  const header = "Interview Title";
  const title = "Frontend Developer Interview" || "Interview Title";
  return (
    <Card sx={{ minWidth: 225, height: 120 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {header}
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StateCard;
