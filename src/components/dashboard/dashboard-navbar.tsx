import { Home, Output } from "@mui/icons-material";
import { Box, Button, Drawer } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";

interface DashboardNavbarProps {
  logout: () => void;
}

export const DashboardNavbar: FC<DashboardNavbarProps> = ({ logout }) => {
  const router = useRouter();
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
            onClick={() => router.push("/dashboard")}
            variant="contained"
            startIcon={<Home />}
            sx={{
              mt: "40px",
              padding: 0,
              minWidth: 0,
              width: "48px",
              height: "48px",
              "> span": {
                margin: 0,
              },
            }}
          />
        </Box>
        <Button
          sx={{
            padding: 0,
            minWidth: 0,
            width: "48px",
            height: "48px",
            "> span": {
              margin: 0,
            },
          }}
          variant="contained"
          onClick={logout}
          startIcon={<Output />}
        />
      </Box>
    </Drawer>
  );
};
