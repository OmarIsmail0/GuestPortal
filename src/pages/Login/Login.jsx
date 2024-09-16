import { Button, TextField, Box, Grid2, Typography, Paper, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import FlagIcon from "@mui/icons-material/Flag"; // Placeholder for the actual flag icon
import BackgroundImage from "../../assets/loginImg.png"; // Add your background image

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
        <Grid2
          item
          size={{ sm: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 350 }}>
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

        <Grid2 item xs={false} size={{ sm: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",

              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={BackgroundImage}
              alt="Background"
              style={{
                width: "80%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                top: "8%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#000",
              }}
            >
              Welcome
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
