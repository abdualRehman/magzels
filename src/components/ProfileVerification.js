import React, { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Typography, Grid, Paper, Button, TextareaAutosize, Stack } from "@mui/material";
import Swal from "sweetalert2";


const ProfileVerification = () => {
  // const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"
  const token = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzE5Mzg0LCJpYXQiOjE2NzE1NDMzODQsImp0aSI6IjQ0NzVhYTZkYmQ4ZDQwYWY5YTYxYTVkY2RjYmRjZTc3IiwidXNlcl9pZCI6Nn0.-F4XoTmA1z5xf7h4b_b0I7_Xh5USLrF2KfOten5ioOU"
  const [profile, setprofile] = useState()
  const [idCard, setidCard] = useState()
  const [verificatioon, setverificatioon] = useState("")
  const send = () => {

    const formdata = new FormData()
    formdata.append("id_card", idCard)
    formdata.append("other_id_image", profile)
    formdata.append("id_card_approve_reason", verificatioon)
    formdata.append("is_verified", "Requested")
    fetch("https://api.bondbeam.com/api/user_profile_varification/", {
      method: "PUT",
      headers: {

        Authorization: token
      },
      body: formdata
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Verification of the Profile
      </Typography>
      <Grid container spacing={2} px={{ sm: 3, lg: 4 }} py={{ sm: 2, lg: 3 }} >
        <Grid item xs={12}>

          <Paper elevation={6} component="span" sx={{ borderRadius: "15px", padding: "5px 0px", overflowX: "hidden" }} >
            <Typography
              variant="subtitle1"
              component="span"
              mx={{ xs: 1, lg: 2 }}
              sx={{ textAlign: "center", fontSize: { xs: '12px', md: '14px', lg: '14px' } }}
            >
              @someXYZ_User
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8} >
          <Paper elevation={4} sx={{ padding: "10px" }} >
            <TextareaAutosize
              aria-label=""
              minRows={14}
              placeholder="Why do you want to verify your account?"
              onChange={(e) => setverificatioon(e.target.value)}
              style={{ width: "-webkit-fill-available", outline: 'none', border: 'none', resize: "none" }}
            />
          </Paper>

          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Paper elevation={6} sx={{ borderRadius: '20px' }}  >
              <Button variant="plain" component="label" startIcon={<AddPhotoAlternateIcon />} sx={{ fontSize: { xs: '8px', sm: '12px' } }} >
                Upload Photo
                <input hidden accept="image/*" multiple type="file" onChange={(e) => setprofile(e.target.files[0])} />
              </Button>
            </Paper>
            <Paper elevation={6} sx={{ borderRadius: '20px' }} >
              <Button variant="plain" component="label" sx={{ fontSize: { xs: '8px', sm: '12px' } }} >
                Upload ID card
                <input hidden accept="image/*" multiple type="file" onChange={(e) => setidCard(e.target.files[0])} />
              </Button>
            </Paper>

          </Stack>



        </Grid>
        <Grid item xs={12} sm={4} >
          <Paper elevation={4} sx={{ padding: "10px", textOverflow: 'ellipsis' }} >
            <Typography
              variant="subtitle1"
              component="div"
              mt={{ xs: 1, lg: 2 }}
              sx={{ textAlign: "center", fontWeight: "bold", fontSize: { xs: '12px', md: '14px', lg: '20px' } }}>
              Instrustions
            </Typography>

            <Typography
              variant="subtitle2"
              component="div"
              p={{ xs: 0, sm: 1, lg: 3 }}
              sx={{ textAlign: "left", fontSize: { xs: '12px', md: '14px', lg: '16px' } }}>
              1: Write us 50 to 60 words on 'Why do you want to verify your ID'. <br /> <br />
              2: You must attach a copy of your NIC card/ Passport. <br /> <br />
              3: Upload your recent picture.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} textAlign="right">
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

export default ProfileVerification;
