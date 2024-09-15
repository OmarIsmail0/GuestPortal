/* eslint-disable react/prop-types */
import { CardMedia, Grid2, Typography } from "@mui/material";
import ReusableCard from "../../components/ReusableCard";

import Google_Maps from "./../../assets/Google_Maps.svg";

const PropertyInfo = ({ property }) => {
  const openInGoogleMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  const PropertyInfoBodyContent = (
    <Grid2 container alignItems="center">
      <Grid2 size={{ xs: 8, sm: 6, md: 4 }}>
        <CardMedia
          sx={{}}
          component="img"
          //   width={125}
          image={property.MainPhoto}
          alt="Property image"
        />
      </Grid2>

      <Grid2 size={{ xs: 4, sm: 6, md: 8 }}>
        <Typography sx={{ color: "gray", textAlign: "right" }}>{property.Property_Name}</Typography>
        <br />
        <br />
        <Typography sx={{ color: "gray", textAlign: "right" }}>{property.Address_Street}</Typography>
        <Typography sx={{ color: "gray", textAlign: "right" }}>
          {property.Address_City} {property.Address_Postalcode}
        </Typography>
      </Grid2>
    </Grid2>
  );

  const ProperyInfoFooterContent = (
    <>
      <Grid2 size={{ xs: 10, sm: 10, md: 10 }}>
        <Typography variant="subtitle2" color="textSecondary">
          Property Reference No.: <br />
          {property.AliasNo}
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
        <CardMedia
          sx={{
            width: "50%",
            marginTop: "-30%",
            marginLeft: "50%",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          component="img"
          width={20}
          image={Google_Maps}
          alt="GPS"
          onClick={() => openInGoogleMaps(property.GPS_Latitude, property.GPS_Longitude)}
        />
      </Grid2>
    </>
  );

  return (
    <div>
      <ReusableCard body={PropertyInfoBodyContent} footer={ProperyInfoFooterContent} />
    </div>
  );
};

export default PropertyInfo;
