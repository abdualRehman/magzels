import * as React from "react";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";

import { deepPurple } from "@mui/material/colors";
import { NavLink, Outlet } from "react-router-dom";

import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RestoreIcon from '@mui/icons-material/Restore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';

// const drawerWidth = 240;
const drawerWidth = "25%";

const Settings = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const settingLinks = [
    {
      text: "General",
      route: "/setting/general",
      icon: <SettingsIcon />,
    },
    {
      text: "Notification Settings",
      route: "/setting/notifications",
      icon: <NotificationsActiveIcon />,
    },
    {
      text: "Profile Settings",
      route: "/setting/profile",
      icon: <AccountCircleIcon />,
    },
    {
      text: "Profile Verification",
      route: "/setting/profile-verification",
      icon: <VerifiedIcon />,
    },
    {
      text: "Privacy",
      route: "/setting/privacy",
      icon: <VerifiedUserIcon />,
    },
    {
      text: "Password",
      route: "/setting/password",
      icon: <LockOpenIcon />,
    },
    {
      text: "Manager Sessions",
      route: "/setting/sessions",
      icon: <RestoreIcon />,
    },
    {
      text: "Two-factor Authentication",
      route: "/setting/twofac-auth",
      icon: <FingerprintIcon />,
    },
    {
      text: "Blocked Users",
      route: "/setting/block",
      icon: <BlockIcon />,
    },
    {
      text: "Delete Account",
      route: "/setting/delete",
      icon: <DeleteIcon />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar
        direction="row"
        alignitems="center"
        justifycontent="center"
        sx={{ backgroundColor: "#DFDFDF" }}
      >
        <Box
          direction="row"
          sx={{
            width: "100%",
            textAlign: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: { sm: '24px', lg: '30px' } }}
            variant="h4"
            // noWrap
            align="center"
            component="div"
            mt={2}
            mb={2}
          >
            Settings
          </Typography>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Avatar sx={{ width: { sm: 100, lg: 130 }, height: { sm: 100, lg: 130 }, bgcolor: deepPurple[500] }}>
              OP
            </Avatar>
          </Stack>
        </Box>
      </Toolbar>

      <List sx={{ paddingTop: "0px" }}>
        {settingLinks.map((link, index) => (
          <NavLink className="lik"
            style={{ textDecoration: "none", color: "black" }}
            to={link.route}
            key={index}
          >
            <ListItem disablePadding  >
              <ListItemButton
                sx={{
                  borderWidth: "1px 0px",
                  borderStyle: "solid",
                  borderColor: "#DFDFDF",
                }}
              >
                <ListItemIcon sx={{ minWidth: { sm: "25px", lg: "30px" } }}>
                  {link.icon !== "" ? link.icon : <InboxIcon />}
                </ListItemIcon>
                <ListItemText primary={link.text} sx={{ '& .css-10hburv-MuiTypography-root': { fontSize: { sm: "0.8rem", lg: "1rem" } } }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box direction="row" sx={{ width: "100%", padding: "50px" }}>
        <Paper elevation={10} direction="row" component="div" sx={{ bgcolor: "#E6E6E6", p: 2, m: 1, }} >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;