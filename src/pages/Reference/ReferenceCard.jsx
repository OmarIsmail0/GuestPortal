/* eslint-disable react/prop-types */

import { Card, CardContent, CardMedia, Typography, Box, useMediaQuery } from "@mui/material";

const ReferenceCard = ({ physicalName, location, dateFrom, dateTo, image, selected, onSelect, onDoubleClick }) => {
  const isMobile_1080 = useMediaQuery("(max-width:1080px)");
  const isMobile_600 = useMediaQuery("(max-width:600px)");
  return (
    <Card
      sx={{
        display: "flex",
        mb: 2,
        backgroundColor: selected ? "rgba(255, 165, 0, 0.5)" : "white",
        width: isMobile_600 ? "100vw" : isMobile_1080 ? "90vw" : "50vw",
        boxShadow: 4,
        "&:hover": {
          backgroundColor: "rgba(255, 165, 0, 0.5)",
          cursor: "pointer",
        },
      }}
      onClick={onSelect}
      onDoubleClick={onDoubleClick}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary">
            {physicalName} {/* Physical name */}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {location}
          </Typography>
          <Typography>{new Date(dateFrom).toLocaleString()}</Typography> {/* Format the dates */}
          <Typography>{new Date(dateTo).toLocaleString()}</Typography>
        </CardContent>
      </Box>
      <CardMedia component="img" sx={{ width: 160 }} image={image} alt="Property image" />
    </Card>
  );
};

export default ReferenceCard;
