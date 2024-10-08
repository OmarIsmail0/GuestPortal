import { Grid2 } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ClientInfo from "./ClientInfo";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import PropertyInfo from "./PropertyInfo";
import WifiQRCode from "./WifiQRCode";
import DoorQRCode from "./DoorQRCode";
import KeySafeBoxes from "./KeySafeBoxes";
import Navbar from "../../components/Navbar";
import DoorCode from "./DoorCode";
import MediaFiles from "./MediaFiles";
import Spinner from "../Spinner/Spinner";

const Reservation = () => {
  const [clientInfo, setClientInfo] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [property, setProperty] = useState();
  const [wifi, setWifi] = useState();
  const [doorQr, setDoorQr] = useState();
  const [door_1, setDoor_1] = useState();
  const [door_2, setDoor_2] = useState();
  const [garageDoor, setGarageDoor] = useState();
  const [keySafeBoxes, setKeySafeBoxes] = useState();
  const [mediaFiles, setMediaFiles] = useState();
  const [loading, setLoading] = useState(true);

  const { reservation, pin } = useParams();
  const navigate = useNavigate();

  const formatDateAndTime = (isoString) => {
    const dateObj = new Date(isoString);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;

    return { formattedDate, formattedTime };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before data fetch starts
        const response = await axios.get(
          `https://uploads.shortletsmalta.com/GuestPortal_Getreservation/?reservation=${reservation}&pincode=${pin}`
        );
        const data = response.data;

        setClientInfo({
          ClientName: data.Reservationinfo.ClientName,
          ClientPhoneNumber: data.Reservationinfo.ClientPhoneNumber,
          ClientEmail: data.Reservationinfo.ClientEmail,
          OTAImageURL: data.Reservationinfo.OTAImageURL,
          ExternalRef: data.Reservationinfo.ExternalRef,
          CompanyName: data.ContactUS.CompanyName,
          PhoneNo: data.ContactUS.PhoneNo,
          CompanyEmail: data.ContactUS.CompanyEmail,
        });

        const { formattedDate: formattedDateIn, formattedTime: formattedTimeIn } = formatDateAndTime(
          data.Reservationinfo.Date_checkin
        );

        // let checkInTaxi = data.Transport_Checkin.filter((e) => (e.Transport_Checkin = true));

        setCheckIn({
          taxi: data.TransportInfos.filter((e) => e.Transport_Checkin === true),
          formattedDate_checkin: formattedDateIn,
          formattedTime_checkin: formattedTimeIn,
          ExternalRef: data.Reservationinfo.InternalRef,
        });

        const { formattedDate: formattedDateOut, formattedTime: formattedTimeOut } = formatDateAndTime(
          data.Reservationinfo.Date_checkout
        );

        setCheckOut({
          taxi: data.TransportInfos.filter((e) => e.Transport_Checkout === true),
          formattedDate_checkout: formattedDateOut,
          formattedTime_checkout: formattedTimeOut,
        });

        setProperty({
          Property_Name: data.Reservationinfo.Property_listings.Property_Name,
          MainPhoto: data.Reservationinfo.Property_listings.MainPhoto,
          Address_Street: data.Reservationinfo.Property_physical.Address_Street,
          Address_City: data.Reservationinfo.Property_physical.Address_City,
          Address_Postalcode: data.Reservationinfo.Property_physical.Address_Postalcode,
          AliasNo: data.Reservationinfo.Property_physical.AliasNo,
          GPS_Latitude: data.Reservationinfo.Property_physical.GPS_Latitude,
          GPS_Longitude: data.Reservationinfo.Property_physical.GPS_Longitude,
        });

        setWifi({
          WifiName: data.WifiInfos.WifiName,
          WifiPass: data.WifiInfos.WifiPass,
        });

        setDoorQr(data.AccessControlls.find((e) => e.ElementType == 22));
        setDoor_1(data.AccessControlls.find((e) => e.ElementType == 11));
        setDoor_2(data.AccessControlls.find((e) => e.ElementType == 23));
        setGarageDoor(data.AccessControlls.find((e) => e.ElementType == 15));

        let keys = data.Reservationinfo.Property_physical.PropertyAdditionalInfos.map((e) => {
          return data.ListEmergencyKeySafeBoxes.find((key) => e.InfoInteger == Number(key.element_id));
        });
        setKeySafeBoxes(keys);

        setMediaFiles(data.Reservationinfo.Property_physical.Mediafiles);

        setLoading(false);
      } catch {
        setLoading(false);
        navigate("/", { state: { error: "Error fetching reservation data. Please try again." } });
      }
    };

    if (reservation && !pin) {
      console.warn("Error: Pin is required if reservation is provided!");
    } else {
      fetchData();
    }
  }, [reservation, pin, navigate]);

  if (loading) return <Spinner />;

  return (
    <Grid2 container spacing={2} alignItems="center" sx={{ minHeight: "100vh" }}>
      <Grid2 size={12}>
        <Navbar />
      </Grid2>

      <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
        {clientInfo && <ClientInfo clientInfo={clientInfo} />}
      </Grid2>

      {checkIn && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <CheckIn checkIn={checkIn} />
        </Grid2>
      )}
      {checkOut && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <CheckOut checkOut={checkOut} />
        </Grid2>
      )}

      {property && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <PropertyInfo property={property} />
        </Grid2>
      )}

      {wifi && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <WifiQRCode wifi={wifi} />
        </Grid2>
      )}

      {doorQr && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <DoorQRCode doorQr={doorQr} />
        </Grid2>
      )}

      {door_1 && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <DoorCode door={door_1} />
        </Grid2>
      )}
      {door_2 && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <DoorCode door={door_2} />
        </Grid2>
      )}

      {garageDoor && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <DoorCode door={garageDoor} />
        </Grid2>
      )}

      {keySafeBoxes && (
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
          <KeySafeBoxes keySafeBoxes={keySafeBoxes} />
        </Grid2>
      )}

      <Grid2 size={12} />

      {mediaFiles &&
        mediaFiles.map((e, index) => (
          <Grid2 key={index} item size={{ xs: 12, sm: 6, xl: 4 }}>
            <MediaFiles media={e} />
          </Grid2>
        ))}

      <Grid2 size={12} />
    </Grid2>
  );
};

export default Reservation;
