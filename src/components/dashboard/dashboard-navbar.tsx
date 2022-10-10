import { Home, Output } from "@mui/icons-material";
import { Box, Button, Drawer } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

interface DashboardNavbarProps {
  logout: () => void;
}

export const DashboardNavbar: FC<DashboardNavbarProps> = ({ logout }) => {
  return (
    <Drawer
      sx={{
        width: "110px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "88px",
          boxSizing: "border-box",
          background: "#382B57",
          alignItems: "center",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          padding: "16px 0 56px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src="/imgs/Vector.svg" width="40px" height="64px" />
          <Button
            variant="contained"
            startIcon={<Home />}
            sx={{
              mt: "40px",
            }}
          />
        </Box>
        <Button variant="contained" onClick={logout} startIcon={<Output />} />
      </Box>
    </Drawer>
  );
};
