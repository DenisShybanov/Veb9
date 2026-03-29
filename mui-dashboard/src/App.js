import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Grid,
  Card,
  CardContent,
  Stack,
  TextField,
  Select,
  MenuItem,
  Slider,
  Paper,
  InputAdornment,
  Box,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Dashboard,
  Settings,
  ExpandLess,
  ExpandMore,
  Person,
  AccountCircle,
} from "@mui/icons-material";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(5);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItemButton>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => setSettingsOpen(!settingsOpen)}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            {settingsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ p: 3, mt: 8, width: "100%" }}>
        {/* Task 1: Responsive Grid */}
        <Grid container spacing={2}>
          {["Users", "Sessions", "Revenue", "Errors"].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Card>
                <CardContent>
                  <Stack spacing={1} alignItems="center">
                    <Typography variant="h6">{item}</Typography>
                    <Typography variant="h4">123</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Task 3: Form */}
        <Paper elevation={4} sx={{ p: 3, mt: 4 }}>
          <Stack spacing={3}>
            <Typography variant="h6">Asset Registration</Typography>

            <TextField label="Asset Name" variant="outlined" fullWidth />

            <TextField
              label="Price"
              variant="filled"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$
                  </InputAdornment>
                ),
              }}
            />

            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
            </Select>

            <Box>
              <Typography gutterBottom>Priority: {priority}</Typography>
              <Slider
                value={priority}
                onChange={(e, val) => setPriority(val)}
                min={1}
                max={10}
                marks
                valueLabelDisplay="auto"
              />
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
