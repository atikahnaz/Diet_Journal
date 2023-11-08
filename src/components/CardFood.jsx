import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ listFood }) {
  // create copy of listFood, and reverse to display the latest array
  const reverseList = [...listFood].reverse();
  return (
    <>
      <Grid container spacing={2} sx={{ mx: 2 }}>
        {reverseList.map((list, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {list.id}
                </Typography>
                {list.food.map((subList, subIndex) => (
                  <Typography variant="body2">- {subList}</Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
