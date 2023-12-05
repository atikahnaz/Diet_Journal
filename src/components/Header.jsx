import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/system";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <img
          src="/assets/undraw_eating_together_re_ux62.svg"
          alt="Header Image"
          style={{
            height: "50vh", // Set the image width to 50% of the container
            maxWidth: "100%", // Ensure the image doesn't exceed the container's width
          }}
        />
      </Box>
    </React.Fragment>
  );
}
