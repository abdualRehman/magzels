import React, { useEffect, useState } from "react";
import { Typography, Grid, Button } from "@mui/material";


const Sessions = () => {
  const [data, setdata] = useState()
  useEffect(() => {
    getdata()
  }, [])
  const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"
  const getdata = () => {
    fetch("https://api.bondbeam.com/api/user_session", {
      headers: {
        Authorization: token
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      setdata(data.data)
 
      });
      console.log("hello ");

  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Manage Sessions
      </Typography>
      <Grid container spacing={2} px={{ sm: 3, lg: 4 }}>

        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "8px",
              textAlign: "center",
              "&:hover": {
                color: "#000000",
                backgroundColor: "white",
              },
            }}
          >
            Logout from all Sesstons
          </Button>
        </Grid>

        <Grid item xs={12}>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "500", marginBottom: 3 }}
          >
            You're signed in to 1 session <br />
            Current Session <br /> <br />
            Details <br />
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "600", marginBottom: 3 }}
          >
            Lahore, Punjab, Pakistan <br />
            (Approximate location)
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "600", marginBottom: 3 }}
          >
            {data?data.device_name:""} on {data?data.operating_system:""} <br /><br />

            IP Address: <br />
            {data?data.ip:""}<br />
            IP Address Owner:<br />
            HSI Pool on Karachi Bras-1 <br />
            
          </Typography>

        </Grid>
      </Grid>
    </>
  );
};

export default Sessions;
