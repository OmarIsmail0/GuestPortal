import { Card, CardContent, Typography, IconButton, Grid2, Avatar, Link } from "@mui/material";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const App = () => {
  return (
    <>
      <Card sx={{ maxWidth: 600, margin: "auto", boxShadow: 2 }}>
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

      <Card sx={{ maxWidth: 600, margin: "auto", boxShadow: 2 }}>
        <CardContent>
          <Grid2 container spacing={2} alignItems="center">
            {/* Avatar Section */}
            <Grid2 item>
              <Avatar sx={{ bgcolor: "navy", width: 50, height: 50 }}>
                <FlightLandIcon />
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
    </>
  );
};

export default App;
