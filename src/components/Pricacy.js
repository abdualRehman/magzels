import * as React from "react";
import { Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Swal from "sweetalert2";
const Pricacy = () => {
  const [privacy, setprivacy] = React.useState({
    see_status: '',
    message_me: '',
    see_followers: '',
    see_birthdate: '',
    see_profile: '',
  })
  React.useEffect(() => {
    getdata();
  }, []);


  const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"
  const getdata = () => {
    fetch("https://api.bondbeam.com/api/user_privacy/", {
      headers: {
        Authorization: token
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.success == true) {
          setprivacy(data.data);
        } else {
          const err = data.detail ? data.detail : Object.values(data?.message)[0];
          Swal.fire({
            title: "Error",
            text: err,
            icon: "error",
            confirmButtonText: "OK",
          });
         

        }

      });

  }
  const send = () => {
    
    fetch("https://api.bondbeam.com/api/user_privacy/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: token
      },
      body: JSON.stringify(privacy)
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.success == true) {
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
      <Typography variant="h5" sx={{ fontWeight: "600", marginBottom: 3 }} gutterBottom >
        Pricacy Settings
      </Typography>


      <Grid container spacing={3} columnSpacing={{ sm: 5, lg: 20 }} rowSpacing={{ sm: 1, lg: 4 }}>



        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              label="status"
              value={privacy.see_status}
              onChange={(e) => setprivacy({ ...privacy, see_status: e.target.value })}
              variant="standard"
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Offline">Offline</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="msg-label">Who can message me ?</InputLabel>
            <Select
              labelId="msg-label"
              id="msg"
              name="msg"
              label="Who can message me ?"
              value={privacy.message_me}
              onChange={(e) => setprivacy({ ...privacy, message_me: e.target.value })}
              variant="standard"
            >
              <MenuItem value="Everyone">Everyone</MenuItem>
              <MenuItem value="Nobody">No one</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="follower-label">Who can see my followers ?</InputLabel>
            <Select
              labelId="follower-label"
              id="follower"
              name="follower"
              label="Who can message me ?"
              value={privacy.see_followers}
              onChange={(e) => setprivacy({ ...privacy, see_followers: e.target.value })}
              variant="standard"
            >
              <MenuItem value="Everyone">Everyone</MenuItem>
              <MenuItem value="Nobody">No one</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="birth-label">Who can see my birthday ?</InputLabel>
            <Select
              labelId="birth-label"
              id="birth"
              name="birth"
              label="Who can message me ?"
              value={privacy.see_birthdate}
              onChange={(e) => setprivacy({ ...privacy, see_birthdate: e.target.value })}
              variant="standard"
            >
              <MenuItem value="Everyone">Everyone</MenuItem>
              <MenuItem value="Nobody">No one</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="profile-label">Who can see my profile ?</InputLabel>
            <Select
              labelId="profile-label"
              id="profile"
              name="profile"
              label="Who can message me ?"
              value={privacy.see_profile}
              onChange={(e) => setprivacy({ ...privacy, see_profile: e.target.value })}
              variant="standard"
            >
              <MenuItem value="Everyone">Everyone</MenuItem>
              <MenuItem value="Nobody">No one</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            onClick={send}
            sx={{
              backgroundColor: "#000000",
              color: "white",
              marginTop: "20px",
              borderRadius: "8px",
              width: "120px",
              textAlign: "center",
              "&:hover": {
                color: "#000000",
                backgroundColor: "white",
              },
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricacy;
