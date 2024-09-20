/* eslint-disable react/prop-types */
import { CardMedia, Grid2, IconButton, Typography } from "@mui/material";
import ReusableCard from "../../components/ReusableCard";
import { useRef } from "react";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

const MediaFiles = ({ media }) => {
  const mediaRef = useRef(null);

  const handleMaximize = () => {
    if (mediaRef.current) {
      if (mediaRef.current.requestFullscreen) {
        mediaRef.current.requestFullscreen();
      } else if (mediaRef.current.webkitRequestFullscreen) {
        mediaRef.current.webkitRequestFullscreen();
      } else if (mediaRef.current.mozRequestFullScreen) {
        mediaRef.current.mozRequestFullScreen();
      } else if (mediaRef.current.msRequestFullscreen) {
        mediaRef.current.msRequestFullscreen();
      }
    }
  };

  const body = (
    <Grid2 container alignItems="center" spacing={1}>
      <Grid2 size={12} container>
        <Grid2 container size={12} alignItems={"center"}>
          <Grid2 size={10}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>{media.Description}</Typography>
          </Grid2>

          <Grid2 size={2}>
            <IconButton onClick={handleMaximize}>
              <FullscreenExitIcon fontSize="large" />
            </IconButton>
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          <CardMedia style={{ position: "relative", width: "100%" }}>
            {media.File_type == "V" ? (
              <video
                ref={mediaRef}
                controls
                style={{
                  width: "100%",
                  height: "30vh",
                }}
              >
                <source src={media.File_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                ref={mediaRef}
                src={media.File_url}
                style={{
                  width: "100%",

                  height: "30vh",
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
