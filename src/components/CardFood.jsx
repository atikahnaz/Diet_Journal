import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      {reverseList.map((list, index) => (
        <Card sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {list.id}
            </Typography>
            <Typography variant="h6" component="div">
              Food
            </Typography>
            {list.food.map((subList, subIndex) => (
              <Typography variant="body2">{subList}</Typography>
            ))}
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
