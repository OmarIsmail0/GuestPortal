import {
  Button,
  TextField,
  Box,
  Grid2,
  Typography,
  Paper,
  InputAdornment,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import BackgroundImage from "../../assets/loginImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const [reservationNumber, setReservationNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.error) {
      setErrorMessage(location.state.error);
      setSnackbarOpen(true);
    }
  }, [location.state]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Reservation Number:", reservationNumber);
    console.log("PIN Code:", pinCode);

    if (reservationNumber && pinCode) {
      setLoading(true);
      console.log("object");
      axios
        .get(`https://uploads.shortletsmalta.com/GuestPortal_Validation/?rid=${2409048590}&pincode=${5371}`)
        .then((e) => {
          setLoading(false);
          if (e.data) {
            navigate(`/rid/${reservationNumber}/pin/${pinCode}`);
          } else {
            navigate(`/reservation/${reservationNumber}/pin/${pinCode}`);
          }
        })
        .catch(() => setLoading(false));
    } else {
      alert("Please enter both reservation number and PIN code.");
    }
  };

  if (loading) return <Spinner />;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <SnackbarContent
          message={errorMessage}
          sx={{ bgcolor: "#a3150e", color: "white" }} // Red background and white text
        />
      </Snackbar>
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

            <TextField
              fullWidth
              variant="outlined"
              label="RESERVATION NO."
              value={reservationNumber}
              onChange={(e) => setReservationNumber(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 2 }}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="PIN code"
              type="password"
              value={pinCode} // Link the state to the input field
              onChange={(e) => setPinCode(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 3 }}
            />

            <Button fullWidth variant="contained" color="primary" sx={{ height: 50 }} type="submit">
              Login
            </Button>
          </Box>
        </Grid2>

        <Grid2 size={{ sm: 12, md: 6 }}>
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
                marginTop: 50,
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
                fontWeight: "bold",
                color: "#d5be0e",
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
