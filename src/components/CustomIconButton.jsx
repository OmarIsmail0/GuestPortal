/* eslint-disable react/prop-types */
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ bgcolor, hovercolor, borderRadius, padding }) => ({
  backgroundColor: bgcolor || "#6ec1e4", // Default light blue background
  borderRadius: borderRadius || "8px", // Default rounded corners
  padding: padding || "10px", // Default padding for square shape
  "&:hover": {
    backgroundColor: hovercolor || "#5bb2d7", // Default hover color
  },
}));

function CustomIconButton({ children, bgcolor, hovercolor, borderRadius, padding, ...props }) {
  return (
    <StyledIconButton
      bgcolor={bgcolor}
      hovercolor={hovercolor}
      borderRadius={borderRadius}
      padding={padding}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
}

export default CustomIconButton;
