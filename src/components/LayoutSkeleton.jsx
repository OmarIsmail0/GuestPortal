import { Skeleton, Box } from "@mui/material";

const LayoutSkeleton = () => {
  return (
    <Box>
      {/* Placeholder for the title */}
      <Skeleton variant="text" width="40%" height={40} />

      {/* Placeholder for an image or rectangular content */}
      <Skeleton variant="rectangular" width="100%" height={140} />

      {/* Placeholder for smaller text */}
      <Skeleton variant="text" width="80%" height={30} />
      <Skeleton variant="text" width="60%" height={30} />
    </Box>
  );
};

export default LayoutSkeleton;
