import React from "react";
import { Button, TextField, Box, Grid2, Typography, Paper, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import FlagIcon from "@mui/icons-material/Flag"; // Placeholder for the actual flag icon
import BackgroundImage from "../../assets/test.jpg"; // Add your background image

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid2
        container
        component={Paper}
        elevation={6}
        sx={{
          width: "80%",
          maxWidth: "900px",
          height: "auto",
        }}
      >
        {/* Left side - login form */}
        <Grid2
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
            backgroundColor: "#f5f5f5", // Light gray background
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 300 }}>
            {/* User icon */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 3,
              }}
            >
              <PersonIcon sx={{ fontSize: 80, color: "#dcdcdc" }} />
            </Box>

            {/* Reservation No input */}
            <TextField
              fullWidth
              variant="outlined"
              label="RESERVATION NO."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 2 }}
            />

            {/* PIN code input */}
            <TextField
              fullWidth
              variant="outlined"
              label="PIN code"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 3 }}
            />

            {/* Login button */}
            <Button fullWidth variant="contained" color="primary" sx={{ height: 50 }}>
              Login
            </Button>

            {/* Footer (flag icon) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4,
              }}
            >
              <FlagIcon sx={{ fontSize: 30 }} />
            </Box>
          </Box>
        </Grid2>

        {/* Right side - welcome message/logo */}
        <Grid2
          item
          xs={false}
          sm={6}
          sx={{
            backgroundImage: `url(${BackgroundImage})`, // Replace with your image
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
              padding: 2,
              borderRadius: 2,
            }}
          >
            Welcome
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
