import { Card, CardContent, Typography, IconButton, Grid2, Avatar, Link, Button } from "@mui/material";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import CheckIcon from "@mui/icons-material/Check";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

import { styled } from "@mui/material/styles";
import CustomIconButton from "./components/CustomIconButton";
import CustomCard from "./components/CoustomCard";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4b8f89", // The green-blue color for the button
  borderRadius: "5px", // Slightly rounded corners
  padding: "2px 16px", // Padding for a better shape
  color: "white", // White text color
  textTransform: "none", // Prevent all uppercase text
  fontWeight: "bold", // Bold text
  fontSize: "14px", // Adjust font size
  "&:hover": {
    backgroundColor: "#3b7570", // Darker color on hover
  },
}));

const App = () => {
  return (
    <Grid2 container spacing={2} alignItems="center">
      <Grid2 item size={4}>
        <Card sx={{ minHeight: 250 }}>
          <CardContent>
            <Grid2 container spacing={2} alignItems="center">
              {/* Avatar Section */}
              <Grid2 item>
                <Avatar sx={{ bgcolor: "grey.300", width: 50, height: 50 }}>
                  <PersonIcon />
                </Avatar>
              </Grid2>

              {/* Main Contact Information */}
              <Grid2 item xs>
                <Typography variant="h6" component="div">
                  TEST!!! Michael Knight
                </Typography>
                <Grid2 container spacing={1} alignItems="center">
                  <Grid2 item>
                    <PhoneIphoneIcon fontSize="small" />
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="body2">000000999999</Typography>
                  </Grid2>
                </Grid2>
                <Grid2 container spacing={1} alignItems="center">
                  <Grid2 item>
                    <EmailIcon fontSize="small" />
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="body2">--</Typography>
                  </Grid2>
                </Grid2>
              </Grid2>

              {/* Company Info */}
              <Grid2 item>
                <Typography variant="body2" color="textSecondary">
                  ShortletsMalta
                </Typography>
              </Grid2>
            </Grid2>

            {/* Divider */}
            <hr />

            {/* Contact Details at Bottom */}
            <Grid2 container spacing={2} alignItems="center">
              <Grid2 item>
                <IconButton>
                  <HomeIcon fontSize="small" />
                </IconButton>
              </Grid2>
              <Grid2 item xs>
                <Typography variant="body1" component="div">
                  +356 7744 4174
                </Typography>
                <Link href="mailto:info@shortletsmalta.com" variant="body2" color="primary">
                  info@shortletsmalta.com
                </Link>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item size={4}>
        <CustomCard
          title="Flight"
          date="05/09/2024"
          time="15:00"
          checkLabel="Check in"
          id="249325059"
          buttonText="Checkin Time"
          icon1={<FlightLandIcon style={{ color: "white", fontSize: 30 }} />}
          icon2={<LocalTaxiIcon style={{ color: "white", fontSize: 30 }} />}
          taxiInfo="You have 1 taxi"
        />
      </Grid2>
      <Grid2 item size={4}>
        <CustomCard
          title="Flight"
          date="11/09/2024"
          time="10:00"
          checkLabel="Check out"
          id="124503054"
          buttonText="Checkout Time"
          icon1={<FlightLandIcon style={{ color: "white", fontSize: 30 }} />}
          taxiInfo=""
          bgColor={"navy"}
        />
      </Grid2>
    </Grid2>
  );
};

export default App;
