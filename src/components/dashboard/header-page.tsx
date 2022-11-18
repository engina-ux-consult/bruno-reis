import { ArrowBackSharp } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import type { FC } from "react";

type HeaderPageProps = {
  title: string;
  onClick: () => void;
};

export const HeaderPage: FC<HeaderPageProps> = ({ title, onClick }) => {
  return (
    <Box
      sx={{
        height: "96px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F6F5FA",
        padding: ["24px 26px", "40px 28px"],
      }}
    >
      <IconButton onClick={onClick}>
        <ArrowBackSharp sx={{ fontSize: "32px" }} />
      </IconButton>

      <Typography
        sx={{
          color: "#222222",
          fontSize: "18px",
          fontWeight: 700,
          width: "100%",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
