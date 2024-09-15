/* eslint-disable react/prop-types */

import { Card, CardContent, Typography, Button, Grid2, Divider } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CustomIconButton from "./CustomIconButton";

import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ bgColor }) => ({
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

const CustomCard = ({
  date,
  time,
  checkLabel,
  id,
  buttonText,
  icon1,
  icon2,
  taxiInfo,
  bgColor,
  icon1BgColor,
  icon2BgColor,
}) => {
  return (
    <Card
      sx={{ maxHeight: 270, margin: "auto", boxShadow: 2, display: "flex", flexDirection: "column", height: "100%" }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
        {/* Main Content */}
        <div>
          <Grid2 container spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
            <Grid2 size={{ xs: 8, sm: 6, md: 8 }}>
              <CustomIconButton bgcolor={icon1BgColor}>
                {icon1} {/* Dynamic icon */}
              </CustomIconButton>
            </Grid2>
            <Grid2 size={{ xs: 4, sm: 6, md: 4 }}>
              <Typography sx={{ color: "gray", textAlign: "right" }}>{checkLabel}</Typography>
              <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>{date}</Typography>
            </Grid2>

            <Grid2 size={{ xs: 8, sm: 8, md: 8 }} container alignItems="center">
              <Grid2 size={{ sm: 4, md: 3 }}>
                {icon2 ? (
                  <CustomIconButton bgcolor={icon2BgColor}>{icon2}</CustomIconButton>
                ) : (
                  <div style={{ height: 50 }} />
                )}
              </Grid2>
              <Grid2 size={{ xs: 8, sm: 8, md: 9 }}>
                <Typography>{taxiInfo}</Typography>
              </Grid2>
            </Grid2>

            <Grid2
              size={{ xs: 4, sm: 4, md: 4 }}
              container
              alignItems="center"
              sx={{ textAlign: "right", marginBottom: 4 }}
            >
              <Grid2 size={{ xs: 8, sm: 8, md: 8 }}>
                <Typography sx={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}>{time}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 4, sm: 4, md: 4 }}>
                <CheckIcon sx={{ color: "green", fontSize: 30 }} />
              </Grid2>
            </Grid2>
          </Grid2>
          {/* Spacer to push footer down */}
          <div style={{ flexGrow: 1 }}></div>
          {/* Divider */}
          <Divider sx={{ mt: 2 }} /> {/* Adjusted margin to move it down */}
        </div>

        {/* Footer Section */}
        <Grid2 container alignItems="center" sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 6, sm: 12, md: 6 }}>
            <Typography color="grey" fontSize={16} component="p">
              {id}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <StyledButton bgColor={bgColor}>{buttonText}</StyledButton>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
