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
          <CardMedia style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
            {media.File_type == "V" ? (
              <video controls style={{ width: "100%" }}>
                <source src={media.File_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media.File_url}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
