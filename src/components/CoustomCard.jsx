/* eslint-disable react/prop-types */

import { Card, CardContent, Typography, Button, Grid2 } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CustomIconButton from "./CustomIconButton";

import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme, bgColor }) => ({
  backgroundColor: bgColor || "#4b8f89", // Button color
  borderRadius: "8px",
  padding: "8px 16px",
  color: "white",
  width: "100%",
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#3b7570", // Darker color on hover
  },
}));

const CustomCard = ({ title, date, time, checkLabel, id, buttonText, icon1, icon2, taxiInfo, bgColor }) => {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 250, margin: "auto", boxShadow: 2 }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "300px" }}
      >
        <div>
          <Grid2 container spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
            <Grid2 size={{ sm: 6, md: 8 }}>
              <CustomIconButton>
                {icon1} {/* Dynamic icon */}
              </CustomIconButton>
            </Grid2>
            <Grid2 size={{ sm: 6, md: 4 }}>
              <Typography sx={{ color: "gray", textAlign: "right" }}>{checkLabel}</Typography>
              <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>{date}</Typography>
            </Grid2>

            <Grid2 size={{ sm: 8, md: 8 }} container alignItems="center">
              <Grid2 size={{ sm: 4, md: 3 }}>
                {icon2 ? <CustomIconButton>{icon2}</CustomIconButton> : <div style={{ height: 50 }} />}
              </Grid2>
              <Grid2 size={{ sm: 8, md: 9 }}>
                <Typography>{taxiInfo}</Typography>
              </Grid2>
            </Grid2>

            <Grid2 size={{ sm: 4, md: 4 }} container alignItems="center" sx={{ textAlign: "right" }}>
              <Grid2 size={{ sm: 8, md: 8 }}>
                <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>{time}</Typography>
              </Grid2>
              <Grid2 size={{ sm: 4, md: 4 }}>
                <CheckIcon sx={{ color: "green", fontSize: 30 }} />
              </Grid2>
            </Grid2>
          </Grid2>
          {/* Divider */}
          <hr style={{ marginTop: "auto" }} /> {/* Positioned at the bottom of the content */}
          {/* Footer Section */}
          <Grid2 container alignItems="center">
            <Grid2 size={{ sm: 12, md: 6 }}>
              <Typography color="grey" fontSize={16} component="p">
                {id}
              </Typography>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <StyledButton bgColor={bgColor}>{buttonText}</StyledButton>
            </Grid2>
          </Grid2>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
