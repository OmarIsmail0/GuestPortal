/* eslint-disable react/prop-types */
import { Grid2, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import ReusableCard from "../../components/ReusableCard";

const WifiQRCode = ({ wifi }) => {
  const encryption = "WPA";
  const qrCodeValue = `WIFI:T:${encryption};S:${wifi.WifiName};P:${wifi.WifiPass};;`;

  const WifiBodyContent = (
    <Grid2 container alignItems="center" spacing={2}>
      <Grid2 size={{ xs: 5, sm: 5, md: 6, lg: 5, xl: 4 }}>
        <QRCodeCanvas value={qrCodeValue} />
      </Grid2>

      <Grid2 size={{ xs: 7, sm: 7, md: 6, lg: 7, xl: 8 }}>
        <Typography sx={{ color: "#3f8c3b", fontWeight: "bold", fontSize: 20, textAlign: "right" }}>WIFI</Typography>
        <Typography variant="body1" fontSize={18}>
          Name of WIFI:
          <br />
          {wifi.WifiName}
        </Typography>
        <br />
        <Typography variant="body1" fontSize={18}>
          Password:
          <br />
          {wifi.WifiPass}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Typography sx={{ color: "#3f8c3b", fontWeight: "bold", fontSize: 20, textAlign: "right" }}>Info</Typography>
      </Grid2>
    </Grid2>
  );

  return <ReusableCard body={WifiBodyContent} footerFlag={false} />;
};

export default WifiQRCode;
