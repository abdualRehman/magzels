import React from 'react'
import { Typography, Grid, Button, Paper, Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
const Block = () => {
 
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: 3 }}
        gutterBottom
      >
        You Blocked Users
      </Typography>

      <Grid container spacing={2} columnSpacing={{ sm: 5, lg: 20 }}>

        <Grid item xs={12} md={7}>
          <List>
            {generate(
              <Paper elevation={6} component="div" sx={{margin: 1 , borderRadius:'10px' , overflow:"auto"}} >
                <ListItem
                  sx={{ backgroundColor: "#FFFF" , borderRadius:'10px',
                      minWidth:"280px"
                }}

                  secondaryAction={
                    <Button variant="outlined"
                      sx={{
                        fontSize:{xs:'12px' , sm:'14px'},
                        backgroundColor: "white",
                        color: "#000000",
                        borderRadius: "8px",
                        textAlign: "center",
                        borderColor: "#000000",
                        "&:hover": {
                          backgroundColor: "#000000",
                          color: "white",
                          borderColor: "white",
                        },
                      }}
                    >Unblock</Button>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Bond Beam User"
                    secondary="Engineer"
                  />
                </ListItem>
              </Paper>,
            )}
          </List>
        </Grid>


      </Grid>

      <Grid item xs={12} textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            color: "white",
            marginTop: "20px",
            borderRadius: "8px",
            textAlign: "center",
            "&:hover": {
              color: "#000000",
              backgroundColor: "white",
            },
          }}
        >
          Unblock All
        </Button>
      </Grid>
    </>
  )
}

export default Block