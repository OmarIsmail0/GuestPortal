/* eslint-disable react/prop-types */

import { Box, CardMedia, Grid2, Typography } from "@mui/material";
import CustomIconButton from "../../components/CustomIconButton";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import ReusableCard from "../../components/ReusableCard";

import { Link } from "react-router-dom";

const ClientInfo = ({ clientInfo }) => {
  const UserInfoBodyContent = (
    <Grid2 container spacing={2} alignItems="center">
      <Grid2 size={{ xs: 8, sm: 8, md: 7 }}>
        <CustomIconButton bgcolor={"white"}>
          <PersonIcon style={{ color: "gray", fontSize: 30 }} />
        </CustomIconButton>
      </Grid2>
      <Grid2 size={{ xs: 4, sm: 4, md: 5 }}>
        <Typography sx={{ color: "gray" }}>{clientInfo.CompanyName}</Typography>
      </Grid2>

      <Grid2 size={12} container alignItems="center" sx={{ marginTop: -1 }}>
        <Grid2 size={12}>
          <Typography>{clientInfo.ClientName}</Typography>
        </Grid2>
        <Grid2 size={12} sx={{ marginTop: -1 }}>
          <Grid2 container alignItems="center" spacing={2}>
            <Grid2 item>
              <PhoneIphoneIcon fontSize="small" />
            </Grid2>
            <Grid2 item>
              <Typography variant="body2">{clientInfo.ClientPhoneNumber}</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={12} sx={{ marginTop: -2 }}>
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 item>
              <EmailIcon fontSize="small" />
            </Grid2>
            <Grid2 item>
              <Typography variant="body2">{clientInfo.ClientEmail}</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
  const UserInfoFooterContent = (
    <Grid2
      container
      spacing={2}
      alignItems="center"
      size={12}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {" "}
        {/* Ensure flex display and alignment */}
        <CardMedia
          component="img"
          sx={{ width: 50, marginRight: 2 }} // Optional margin for spacing
          image={clientInfo.OTAImageURL}
        />
        <Typography variant="body1" component="div">
          {clientInfo.ExternalRef}
        </Typography>
      </Box>
      <Grid2>
        <Typography variant="body1" component="div">
          {clientInfo.PhoneNo}
        </Typography>
        <Link href={`mailto:${clientInfo.CompanyEmail}`} variant="body2" color="primary">
          {clientInfo.CompanyEmail}
        </Link>
      </Grid2>
    </Grid2>
  );

  return <ReusableCard body={UserInfoBodyContent} footer={UserInfoFooterContent} />;
};

export default ClientInfo;
