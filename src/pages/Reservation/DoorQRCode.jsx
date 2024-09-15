/* eslint-disable react/prop-types */
import { CardMedia, Grid2, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import ReusableCard from "../../components/ReusableCard";

const DoorQRCode = ({ doorQr }) => {
  const DoorBodyContent = (
    <Grid2 container alignItems="center" spacing={1}>
      <Grid2 size={12} container>
        <Grid2 size={8}>
          <Typography fontSize={16}>Use this QR-code to open the doors</Typography>
        </Grid2>
        <Grid2 size={4}>
          <CardMedia component="img" image={doorQr.AssetName} alt="Door" />
        </Grid2>
      </Grid2>

      <Grid2 size={12}>
        <QRCodeCanvas value={doorQr.AccessControllPass.trim()} />
      </Grid2>
      <Grid2 size={12}>
        <Typography sx={{ color: "#3f8c3b", fontWeight: "bold", fontSize: 20, textAlign: "right" }}>Info</Typography>
      </Grid2>
    </Grid2>
  );

  return <ReusableCard body={DoorBodyContent} footerFlag={false} />;
};

export default DoorQRCode;
