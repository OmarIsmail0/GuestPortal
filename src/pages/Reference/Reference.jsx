import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReferenceCard from "./ReferenceCard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Reference = () => {
  const [reference, setReference] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const { rid, pin } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://uploads.shortletsmalta.com/GuestPortal_Validation/?rid=${rid}&pincode=${pin}`
      );
      const data = response.data.data;
      setReference(data);
    };
    fetchData();
  }, [pin, rid]);

  // Navigate to the reservation details page
  const handleNavigate = (reservation) => {
    navigate(`/reservation/${reservation.internal_ref}/pin/${reservation.access_pincode}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "50vw",
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          disabled={selectedIndex === null} // Disable button if nothing is selected
          onClick={() => handleNavigate(reference[selectedIndex])}
          sx={{ mr: 1 }} // Add margin to separate buttons
        >
          Open
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Box>
      <Box>
        {reference.map((item, index) => (
          <ReferenceCard
            key={item.stay_id} // Use stay_id as the key
            physicalName={item.physical_name}
            location={item.listing_name}
            dateFrom={item.date_from}
            dateTo={item.date_to}
            image={item.listing_image}
            selected={selectedIndex === index}
            onSelect={() => setSelectedIndex(index)} // Handle selection
            onDoubleClick={() => handleNavigate(item)} // Navigate on double-click
          />
        ))}
      </Box>
    </Box>
  );
};

export default Reference;
