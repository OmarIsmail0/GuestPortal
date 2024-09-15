/* eslint-disable react/prop-types */
import { CardMedia, Grid2, Typography } from "@mui/material";
import ReusableCard from "../../components/ReusableCard";

const DoorCode_1 = ({ door_1 }) => {
  const DoorBodyContent = (
    <Grid2 container alignItems="center" spacing={1}>
      <Grid2 size={12} container>
        <Grid2 size={8}>
          <Typography fontSize={16}>Door Access code for this door(s):</Typography>
          <Typography sx={{ textAlign: "center", mt: 4 }} fontSize={16}>
            {door_1.ElementNames[0]}
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <CardMedia component="img" image={door_1.AssetName} alt={door_1.ElementNames[0]} />
        </Grid2>
      </Grid2>

      <Grid2 size={12}></Grid2>
      <Grid2 container size={12}>
        <Grid2 size={8}>
          <Typography sx={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
            {door_1.AccessControllPass}
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography sx={{ color: "#3f8c3b", fontWeight: "bold", fontSize: 20, textAlign: "right" }}>Info</Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );

  return <ReusableCard body={DoorBodyContent} footerFlag={false} />;
};

export default DoorCode_1;
