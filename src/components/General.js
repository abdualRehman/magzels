import React, { useEffect, useState } from "react";
import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Swal from "sweetalert2";

const General = () => {
  const [contuntry, setContuntry] = useState("");
  const [gener, setGener] = useState("");
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone_no, setphone] = useState("")
  const [code, setcode] = useState("")
  const [birth, setbirth] = useState("")

  const handleCountryChange = (event) => {
    setContuntry(event.target.value);
  };
  const handleGenChange = (event) => {
    setGener(event.target.value);
  };
  // get api/////////
  useEffect(() => {
    getdata()
  }, [])
  const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"
  const getdata = () => {
    fetch("https://api.bondbeam.com/api/user_general_setting/", {
      headers: {
        Authorization: token
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);


        if (data?.success == true) {
          setname(data.data.username)
          setcode(data.data.phone_code)
          setemail(data.data.email)
          setphone(data.data.phone_no)
          setGener(data.data.gender)
          setContuntry(data.data.country)
          setbirth(data.data.birth_date)
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
    console.log("hello ");

  }
  const send = () => {
    const obj = {
      birth_date: birth,
      country: contuntry,
      email: email,
      gender: gener,
      phone_code: code,
      phone_no: phone_no,
      username: name,
    }
    fetch("https://api.bondbeam.com/api/user_general_setting/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: token
      },
      body: JSON.stringify(obj)
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
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        General Settings
      </Typography>
      <Grid container spacing={2} columnSpacing={{ sm: 5, lg: 20 }}>
        <Grid item xs={12}>
          <TextField
            id="username"
            name="User Name"
            label="Username"
            fullWidth
            variant="standard"
            onChange={(e) => setname(e.target.value)}
            value={name}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="fname"
            variant="standard"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            variant="standard"
            value={name}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            variant="standard"
            onChange={(e) => setphone(e.target.value)}
            value={phone_no}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="birthday"
            name="birthday"
            label="Birthday"
            variant="standard"
            onChange={(e) => setbirth(e.target.value)}
            value={birth}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gener"
              name="gener"
              label="Gener"
              value={gener}
              onChange={handleGenChange}
              variant="standard"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Country</InputLabel>
            <Select
              labelId="select-label"
              id="country"
              name="country"
              label="Country"
              value={contuntry}
              onChange={handleCountryChange}
              variant="standard"
            >
              <MenuItem value="Algeria">Algeria</MenuItem>
              <MenuItem value={20}>IND</MenuItem>
              <MenuItem value={30}>USA</MenuItem>
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

export default General;
