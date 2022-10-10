import { Box } from "@mui/material";
import type { FC } from "react";
import Lottie from "react-lottie";

export const LoadingPage: FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: location,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        style={{ width: "10rem", height: "10rem", marginTop: "20%" }}
      />
    </Box>
  );
};
