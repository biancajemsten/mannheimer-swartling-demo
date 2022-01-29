import * as React from "react";
import { Typography, Box } from "@mui/material";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={index} {...other}>
      {value === index && (
        <Box sx={{ pt: 6, pb: 6 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
