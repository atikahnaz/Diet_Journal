import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid";
import FoodDialog from "./FoodDialog";
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

export default function BasicCard({ listFood, addListFood }) {
  // create copy of listFood, and reverse to display the latest array
  const reverseList = [...listFood].reverse();

  return (
    <>
      <Grid container spacing={2} sx={{ mx: 2 }}>
        {reverseList.map((list, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, height: 275, mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxHeight: 275,
                  overflowY: "auto",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {/* view date */}
                  <Typography variant="h6" component="div">
                    {list.id}
                  </Typography>

                  {/*view Foods */}

                  {list.food.length > 0 ? (
                    <>
                      <Typography variant="h6">Foods</Typography>
                      {list.food.map((subList, subIndex) => (
                        <Typography variant="body2">- {subList}</Typography>
                      ))}
                    </>
                  ) : null}
                  {/** <Typography>Foods</Typography>
                  {list.food.map((subList, subIndex) => (
                    <>
                      <Typography variant="body2">- {subList}</Typography>
                    </>
                  ))}*/}

                  {/*view Symptoms */}
                  {list.symptoms.length > 0 ? (
                    <>
                      <Typography variant="h6">Symptoms</Typography>
                      {list.symptoms.map((subList, subIndex) => (
                        <>
                          <Typography variant="body2">- {subList}</Typography>
                        </>
                      ))}
                    </>
                  ) : null}

                  {/** <Typography>Symptoms</Typography>
                  {list.symptoms.map((subList, subIndex) => (
                    <>
                      <Typography variant="body2">- {subList}</Typography>
                    </>
                  ))}*/}
                </CardContent>

                <Box sx={{ display: "flex", alignItems: "flex-start", pt: 2 }}>
                  <FoodDialog
                    date={list.id}
                    listobjectFood={list}
                    callbackAddFood={addListFood}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
