/* eslint-disable react/prop-types */
import { Button, Grid2, Typography } from "@mui/material";
import ReusableCard from "../../components/ReusableCard";
import { useState } from "react";

const KeySafeBoxes = ({ keySafeBoxes }) => {
  const [showCode_1, setShowCode_1] = useState(false);
  const [showCode_2, setShowCode_2] = useState(false);

  const handleToggleCode_1 = () => {
    setShowCode_1((prev) => !prev);
  };

  const handleToggleCode_2 = () => {
    setShowCode_2((prev) => !prev);
  };
  const DoorBodyContent = (
    <Grid2 container alignItems="center" spacing={1}>
      <Grid2 size={12} container>
        <Grid2 size={8}>
          <Typography fontSize={16}>Emergency keycode for Maindoor:</Typography>
        </Grid2>

        <Grid2 size={4}>
          <Typography sx={{ color: "#3f8c3b", fontWeight: "bold", fontSize: 20, textAlign: "right" }}>Keys</Typography>
        </Grid2>

        <Grid2 size={{ md: 8, lg: 6 }}>
          <Button
            variant="contained"
            sx={{ mb: 1, color: "white", bgcolor: "gray", fontSize: 15, width: "100%" }}
            onClick={handleToggleCode_1}
          >
            {showCode_1 ? "Hide code" : "Show code"}
          </Button>
        </Grid2>
        <Grid2 size={{ md: 1, lg: 2 }} />
        <Grid2 size={{ md: 3, lg: 4 }} alignContent="center">
          {showCode_1 && <Typography variant="body1">{keySafeBoxes[0].code}</Typography>}
          {!showCode_1 && <Typography variant="body1"> ------- </Typography>}
        </Grid2>
      </Grid2>

      <Grid2 size={12} container>
        <Grid2 size={12}>
          <Typography fontSize={16}>Emergency keycode for Apartment:</Typography>
        </Grid2>

        <Grid2 size={{ md: 8, lg: 6 }}>
          <Button
            variant="contained"
            sx={{ mb: 1, color: "white", bgcolor: "gray", fontSize: 15, width: "100%" }}
            onClick={handleToggleCode_2}
          >
            {showCode_2 ? "Hide code" : "Show code"}
          </Button>
        </Grid2>
        <Grid2 size={{ md: 1, lg: 2 }} />
        <Grid2 size={{ md: 3, lg: 4 }} alignContent="center">
          {showCode_2 && <Typography variant="body1">{keySafeBoxes[1].code}</Typography>}
          {!showCode_2 && <Typography variant="body1"> ------- </Typography>}
        </Grid2>
      </Grid2>

      <Grid2 size={12} />
      <Grid2 container size={12}>
        <Grid2 size={8}>
          <Typography sx={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}></Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography sx={{ color: "#3f8c3b", fontWeight: "bold", fontSize: 20, textAlign: "right" }}>Info</Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );

  return <ReusableCard body={DoorBodyContent} footerFlag={false} />;
};

export default KeySafeBoxes;
