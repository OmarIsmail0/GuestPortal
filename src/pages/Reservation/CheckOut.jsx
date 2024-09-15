/* eslint-disable react/prop-types */
import ReusableCard from "../../components/ReusableCard";

import { Button, Grid2, Typography } from "@mui/material";
import styled from "@emotion/styled";

import CheckIcon from "@mui/icons-material/Check";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import CustomIconButton from "../../components/CustomIconButton";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "navy", // Button color
  borderRadius: "8px",
  color: "white",
  width: "100%",
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: "#3b7570", // Darker color on hover
  },
}));

const CheckOut = ({ checkOut }) => {
  const CheckOutBodyContent = (
    <Grid2 container spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
      <Grid2 size={{ xs: 8, sm: 6, md: 5 }}>
        <CustomIconButton>{<FlightLandIcon style={{ color: "white", fontSize: 30 }} />}</CustomIconButton>
      </Grid2>
      <Grid2 size={{ xs: 4, sm: 6, md: 7 }}>
        <Typography sx={{ color: "gray", textAlign: "right" }}>Check out</Typography>
        <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>
          {checkOut.formattedDate_checkout}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 8, sm: 8, md: 8 }} container alignItems="center">
        <Grid2 size={{ xs: 8, sm: 8, md: 9 }}>
          <Typography>{""}</Typography>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 4, sm: 4, md: 4 }} container alignItems="center" sx={{ textAlign: "right" }}>
        <Grid2 size={{ xs: 8, sm: 8, md: 8 }}>
          <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>
            {checkOut.formattedTime_checkout}
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 4, sm: 4, md: 4 }}>
          <CheckIcon sx={{ color: "green", fontSize: 30 }} />
        </Grid2>
      </Grid2>
    </Grid2>
  );

  const CheckOutFooterContent = (
    <>
      <Grid2 size={{ xs: 6, sm: 12, md: 6 }} />
      <Grid2 size={{ xs: 6, sm: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <StyledButton>Checkout Time</StyledButton>
      </Grid2>
    </>
  );

  return <ReusableCard body={CheckOutBodyContent} footer={CheckOutFooterContent} />;
};

export default CheckOut;
