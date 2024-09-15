/* eslint-disable react/prop-types */
import ReusableCard from "../../components/ReusableCard";
import { Button, Grid2, Typography } from "@mui/material";
import CustomIconButton from "../../components/CustomIconButton";

import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CheckIcon from "@mui/icons-material/Check";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#4b8f89", // Button color
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

const CheckIn = ({ checkIn }) => {
  const CheckInBodyContent = (
    <Grid2 container spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
      <Grid2 size={{ xs: 8, sm: 6, md: 5 }}>
        <CustomIconButton>
          <FlightLandIcon style={{ color: "white", fontSize: 30 }} />
        </CustomIconButton>
      </Grid2>
      <Grid2 size={{ xs: 4, sm: 6, md: 7 }}>
        <Typography sx={{ color: "gray", textAlign: "right" }}>Check in</Typography>
        <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>
          {checkIn.formattedDate_checkin}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 8, sm: 8, md: 8 }} container alignItems="center">
        {checkIn.taxi.includes("no_taxi") ? (
          <>
            <Grid2 size={{ xs: 4, sm: 4, md: 4 }}>
              <CustomIconButton>
                <LocalTaxiIcon style={{ color: "white", fontSize: 30 }} />
              </CustomIconButton>
            </Grid2>
            <Grid2 size={{ xs: 8, sm: 8, md: 8 }} sx={{ marginLeft: "-10%" }}>
              <Typography>{checkIn.taxi}</Typography>
            </Grid2>
          </>
        ) : (
          <div style={{ height: 50 }} />
        )}
      </Grid2>

      <Grid2 size={{ xs: 4, sm: 4, md: 4 }} container alignItems="center">
        <Grid2 size={{ xs: 8, sm: 8, md: 8 }}>
          <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>
            {checkIn.formattedTime_checkin}
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 4, sm: 4, md: 4 }}>
          <CheckIcon sx={{ color: "green", fontSize: 30 }} />
        </Grid2>
      </Grid2>
    </Grid2>
  );

  const CheckInFooterContent = (
    <>
      <Grid2 size={{ xs: 6, sm: 12, md: 6 }}>
        <Typography color="grey" fontSize={16} component="p">
          {checkIn.ExternalRef}
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 6, sm: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <StyledButton>Checkin Time</StyledButton>
      </Grid2>
    </>
  );

  return <ReusableCard body={CheckInBodyContent} footer={CheckInFooterContent} />;
};

export default CheckIn;
