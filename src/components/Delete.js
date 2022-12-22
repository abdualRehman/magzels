import React from 'react'
import { Typography, Grid, Button } from "@mui/material";
import Swal from 'sweetalert2';

const Delete = () => {



  const deleteUser = () => {
    Swal.fire({
      title: 'Do you want to delete your account?',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
       send();
      } 
    })
  }


  const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"

  const send = () => {
    const obj = {
      delete: "Conform"
    }
    fetch("https://api.bondbeam.com/api/delete_user_account/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: token
      },
      body: JSON.stringify(obj)
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.status == true) {
          Swal.fire({
            title: "Success",
            text: data.msg,
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          const err = data.detail ? data.detail : Object.values(data?.msg)[0];
          Swal.fire({
            title: "Error",
            text: err,
            icon: "error",
            confirmButtonText: "OK",
          });

        }
      });
  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Delete Account
      </Typography>

      <Grid container spacing={3} p={2} columnSpacing={{ sm: 5, lg: 20 }}>

        <Grid item xs={12} my={4} >
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "600" }}
          >
            <strong>Warning!</strong> This will erase every information on your account including images, messages etc.
          </Typography>

        </Grid>
      </Grid>

      <Grid item xs={12} textAlign="center">
        <Button
          variant="contained"
          color="error"
          onClick={deleteUser}
          my={2}
          sx={{
            // backgroundColor: "#000000",
            // color: "white",
            // marginTop: "20px",
            borderRadius: "8px",
            textAlign: "center",
            // "&:hover": {
            //   color: "#000000",
            //   backgroundColor: "white",
            // },
          }}
        >
          Delete account
        </Button>
      </Grid>
    </>
  )
}

export default Delete