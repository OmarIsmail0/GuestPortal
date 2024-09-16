/* eslint-disable react/prop-types */
import { CardMedia, Grid2, Typography } from "@mui/material";
import ReusableCard from "../../components/ReusableCard";

const MediaFiles = ({ media }) => {
  const body = (
    <Grid2 container alignItems="center" spacing={1}>
      <Grid2 size={12} container>
        <Grid2 size={12}>
          <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>{media.Description}</Typography>
        </Grid2>
        <Grid2 size={12}>
          <CardMedia style={{ position: "relative", width: "100%" }}>
            {media.File_type == "V" ? (
              <video
                controls
                style={{
                  width: "100%",
                  height: "34.7vh",
                }}
              >
                <source src={media.File_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media.File_url}
                style={{
                  width: "100%",
                  height: "34.7vh",
                }}
              />
            )}
          </CardMedia>
        </Grid2>
      </Grid2>

      <Grid2 size={12}></Grid2>
      <Grid2 size={12}></Grid2>
    </Grid2>
  );

  return <ReusableCard body={body} footerFlag={false} media={true} />;
};

export default MediaFiles;
