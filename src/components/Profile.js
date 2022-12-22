import React, { useEffect, useState } from "react";
import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Swal from "sweetalert2";

const Profile = () => {
  const [about, setabout] = useState("");
  const [lastName, setlastName] = useState("");
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [website, setWebsite] = useState("")
  const [address, setaddress] = useState("")
  const [work, setwork] = useState("")
  const [relationship, setRelationship] = useState("");
  console.log(name, lastName, about);

  // get api/////////
  useEffect(() => {
    getdata();
  }, [])
  // const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"
  const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NTU2MzU2LCJpYXQiOjE2NjY3ODAzNTYsImp0aSI6IjYzMWM0YWJmYTA5MjQxMGNiMDA0YjRjOGUxZWQ3NWRlIiwidXNlcl9pZCI6MTV9.wP0exElHg1N1e_Oex_4h8Lm-EAednIP9P4GsSsTYCBo"
  const getdata = () => {
    fetch("https://api.bondbeam.com/api/user_profile_settings", {
      headers: {
        Authorization: token
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setname(data.data.first_name)
        setwork(data.data.work_place)
        setemail(data.data.company_site)
        setWebsite(data.data.website)
        setaddress(data.data.address)
        setlastName(data.data.last_name)
        setabout(data.data.about)
        setRelationship(data.data.relationship)
      });
    console.log("hello");

  }
  const send = () => {
    const obj = {
      relationship: relationship,
      address: address,
      company_site: email,
      website: website,
      last_name: lastName,
      work_place: work,
      about: about,
      first_name: name,
    }
    fetch("https://api.bondbeam.com/api/user_profile_settings/", {
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

  const handleRelChange = (event) => {
    setRelationship(event.target.value);
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Profile Settings
      </Typography>
      <Grid container spacing={2} columnSpacing={{ sm: 5, lg: 20 }} >
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setname(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastname"
            name="lastname"
            label="Last Name"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="about"
            label="About"
            multiline
            value={about}
            rows={3}
            onChange={(e) => setabout(e.target.value)}
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="location"
            label="Location"
            multiline
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            rows={2}
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <TextField
            id="website"
            name="website"
            label="Website"
            variant="standard"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="relationship-label">Relationship</InputLabel>
            <Select
              labelId="relationship-label"
              id="relationship"
              name="relationship"
              label="Relationship"
              value={relationship}
              onChange={handleRelChange}
              variant="standard"
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="workingAt"
            name="workingAt"
            label="Working At"
            variant="standard"
            value={work}
            onChange={(e) => setwork(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
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

export default Profile;
