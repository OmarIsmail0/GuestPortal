/* eslint-disable react/prop-types */
import { Card, CardContent, Divider, Grid2 } from "@mui/material";

const ReusableCard = ({ body, footer, footerFlag = true }) => {
  return (
    <Card
      sx={{
        minHeight: 250,
        maxHeight: 250,
        margin: "auto",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
        <div style={{ height: footerFlag ? 110 : "100%" }}>{body}</div>
        {footerFlag && (
          <>
            <Divider sx={{ mt: 3 }} />
            <div style={{ height: 30 }}>
              <Grid2 container alignItems="center">
                {footer}
              </Grid2>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
