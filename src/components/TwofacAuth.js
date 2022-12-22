import * as React from "react";
import { Typography, Grid, Button, Paper, Box, Link, TextField } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


const StepOne = ({ setSteps }) => {
  const handleSubmit = () => {
    setSteps(2);
  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Two-factor authentication
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 0, sm: 1, md: 2 },
          backgroundColor: "transparent"
        }}
      >

        <Grid container>
          <Grid item xs={12} md={11} container p={2}
            sx={{
              justifyContent: "center"
            }}
          >
            <Grid item>
              <Box sx={{ width: 100, height: 100, textAlign: "center" }}>
                <LockIcon sx={{
                  fontSize: { xs: "3rem", sm: "5rem", md: "6rem" },
                  color: "gray",

                }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm container>
              <Typography sx={{ cursor: 'auto', alignSelf: "center", color: 'black' }} variant="body1">
                Two step verification gives you additional security by requiring a verification code whenever you sign in on new device.
                <Link href="#" variant="body2">
                  Learn more
                </Link>
              </Typography>

            </Grid>
          </Grid>

          <Grid item xs={12} md={11} container p={2} sx={{
            justifyContent: "center"
          }}>
            <Grid item>
              <Box sx={{ width: 100, height: 100, textAlign: "center" }}>
                <PhoneAndroidIcon sx={{
                  fontSize: { xs: "3rem", sm: "5rem", md: "6rem" },
                  color: "gray",
                  alignItems: "center"
                }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm container>
              <Typography sx={{ cursor: 'auto', alignSelf: "center", color: 'black' }} variant="body1">
                Your phone number or Authenticator App helps us keep your account secure by adding an additional layer of verification. Your phone number also helps others, who already have your phone number, discover and connect with you. You can always decide how you want your phone number used.
                <Link href="#" variant="body2">
                  Learn more
                </Link>
              </Typography>

            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
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
            Continue
          </Button>
        </Grid>

      </Paper>

    </>
  )
}

const StepTwo = ({ setSteps }) => {
  const handleSubmit = () => {
    setSteps(3);
  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Two-factor authentication
      </Typography>

      <Grid container spacing={2} columnSpacing={{ sm: 5, lg: 20 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="password"
            name="password"
            label="Password"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
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
            Send Code
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
const StepThree = ({ setSteps }) => {
  const handleSubmit = () => {
    setSteps(1);
  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        Verify
      </Typography>

      <Grid container spacing={2} columnSpacing={{ sm: 5, lg: 20 }}>

        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 3, fontWeight: 600 }}
          // gutterBottom
          >
            We have sent you a 6-digit code.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="code"
            name="code"
            label="6-Digit verification code."
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500 }}
            my={2}
          >
            Not Received? &nbsp;
            <Link href="#" variant="body2">
              resend Code!
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
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
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  )
}



const TwofacAuth = () => {
  const [steps, setSteps] = React.useState(1);
  return (
    <>
      {steps === 1 && <StepOne setSteps={setSteps} />}
      {steps === 2 && <StepTwo setSteps={setSteps} />}
      {steps === 3 && <StepThree setSteps={setSteps} />}
    </>
  );
};

export default TwofacAuth;
