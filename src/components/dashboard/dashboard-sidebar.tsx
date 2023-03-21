import { HomeOutlined, Output } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface DashboardSidebarProps {
  logout: () => void;
}

export const DashboardSidebar: FC<DashboardSidebarProps> = ({ logout }) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <AppBar>
        <Toolbar sx={{ background: "#382B57", padding: "16px" }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <Image
              alt="Vector.svg"
              src="./imgs/Vector.svg"
              width="40px"
              height="54px"
            />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setShowModal(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={showModal}
        anchor="right"
        onClose={() => setShowModal(false)}
      >
        <Box
          sx={{
            width: "258px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            onClick={() => router.push("/dashboard")}
            sx={{
              color: "#382B57",
              textTransform: "none",
              fontFamily: "Open Sans, sans-serif",
              alignItems: "center",
              justifyContent: "left",
              marginBottom: "16px",
            }}
            startIcon={<HomeOutlined />}
          >
            {" "}
            Dashboard
          </Button>
          <Button
            onClick={logout}
            sx={{
              color: "#382B57",
              textTransform: "none",
              fontFamily: "Open Sans, sans-serif",
              alignItems: "center",
              justifyContent: "left",
              marginBottom: "16px",
            }}
            startIcon={<Output />}
          >
            {" "}
            Sair
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
