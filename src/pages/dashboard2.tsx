import React, { useState, useEffect } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  ArrowForward,
  Home,
  Instagram,
  LinkedIn,
  Output,
  YouTube,
} from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button, Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import ST from "./styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Lottie from "react-lottie";
import * as location from "../../assets/splash.json";
import Axios from "axios";
import { useRouter } from "next/router";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function Dashboard() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);
        });
    }, 2000);
  }, []);

  const [auth, setAuth] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/userAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token") as string,
      },
    }).then((response) => {
      if (!localStorage.getItem("token")) {
        console.log({ msg: "Erro de Auth" });
        router.push("/login");
      } else {
        console.log({ msg: response });
      }
    });
  }, []);

  const logOut = () => {
    Axios.get("http://localhost:3001/userAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token") as string,
      },
    }).then((response) => {
      localStorage.removeItem("token");
      localStorage.clear();
    });
  };

  return (
    <>
      {!loading ? (
        <Lottie
          options={defaultOptions1}
          style={{ width: "10rem", height: "10rem", marginTop: "20%" }}
        />
      ) : (
        <div>
          {/* <ST /> */}
          <Head>
            <title>Iknow - Dashboard</title>
          </Head>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <div className="inv">
              {/*Toolbar Horizontal*/}
              <AppBar
                position="fixed"
                sx={{
                  width: `calc(100% - ${"110"}px)`,
                  ml: `${"110"}px`,
                  background: "#FFFFFF",
                  boxShadow: "none",
                }}
              >
                <Toolbar>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      color: "#000000",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Olá, Fulano
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  {/*
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000' }}
              >
              Siga as redes sociais
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge>
                    <Instagram style={{ color: "#382B57" }}/>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge >
                    <YouTube style={{ color: "#382B57" }}/>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <LinkedIn style={{ color: "#382B57" }}/>
                </IconButton>
      
              </Box>
              */}
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </AppBar>
              {/*Toolbar Vertical*/}
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
                <img
                  src="../imgs/Vector.svg"
                  style={{
                    width: "40px",
                    height: "64px",
                    marginBottom: "40px",
                    marginTop: "16px",
                  }}
                />
                <IconButton
                  size="small"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                ></IconButton>
                <Link href="/dashboard" passHref>
                  <Button style={{ color: "#FFFFFF" }} startIcon={<Home />} />
                </Link>
                <Link href="/" passHref>
                  <Button
                    onClick={logOut}
                    style={{
                      color: "#FFFFFF",
                      position: "absolute",
                      bottom: "0",
                      marginBottom: "3rem",
                    }}
                    startIcon={<Output />}
                  />
                </Link>
              </Drawer>
            </div>
            <div className="mob">
              <AppBar
                position="fixed"
                open={open}
                style={{ background: "#382B57" }}
              >
                <Toolbar>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    component="div"
                  >
                    <img
                      src="../imgs/Vector.svg"
                      style={{ width: "40px", height: "64px" }}
                    />
                  </Typography>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: "16.125rem",
                    padding: "1rem",
                  },
                }}
                variant="persistent"
                anchor="right"
                open={open}
              >
                <DrawerHeader style={{}}>
                  <IconButton
                    onClick={handleDrawerClose}
                    style={{ color: "#382B57" }}
                  >
                    {theme.direction === "rtl" ? (
                      <CloseOutlinedIcon />
                    ) : (
                      <CloseOutlinedIcon />
                    )}
                  </IconButton>
                </DrawerHeader>

                <IconButton
                  size="small"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                ></IconButton>
                <List style={{ flexDirection: "column", alignItems: "center" }}>
                  <Link href="/dashboard" passHref>
                    <Button
                      style={{
                        color: "#382B57",
                        textTransform: "none",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      startIcon={<HomeOutlinedIcon />}
                    >
                      {" "}
                      Dashboard
                    </Button>
                  </Link>
                </List>
                <List style={{ flexDirection: "column", alignItems: "center" }}>
                  <Link href="/" passHref>
                    <Button
                      onClick={logOut}
                      style={{
                        color: "#382B57",
                        textTransform: "none",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      startIcon={<Output />}
                    >
                      {" "}
                      Sair
                    </Button>
                  </Link>
                </List>
              </Drawer>
              <AppBar
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "none",
                  color: "#000000",
                  marginTop: "70px",
                }}
              >
                <Toolbar>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Olá Fulano
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
              </AppBar>
            </div>
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
              <Toolbar />
              {/* DASHBOARD */}
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className="dashboard"
                  style={{
                    borderRadius: "0.5rem",
                    color: "white",
                    backgroundColor: "#",
                    width: "100%",
                    height: "18.50rem",
                    objectFit: "cover",
                  }}
                >
                  <Grid
                    style={{
                      position: "absolute",
                      margin: "56px 32px",
                      maxWidth: "31.25rem",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 300,
                        fontSize: "28px",
                        lineHeight: "40px",
                      }}
                    >
                      Plataforma de conteúdos exclusivos <b>Bruno Reis</b>
                    </Typography>
                    <p
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "18px",
                        lineHeight: "24px",
                      }}
                    >
                      Aqui você encontra os melhores conteúdos e conhecimentos
                      do mundo da odontologia.
                    </p>
                  </Grid>
                  <img
                    className="inv"
                    src="../imgs/logo-trans.png"
                    style={{
                      float: "right",
                      width: "319px",
                      height: "288px",
                      left: "969px",
                      top: "96px",
                      margin: "6px 120px",
                    }}
                    alt="brand"
                  />
                </Grid>
              </>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
                marginTop={"32px"}
                marginBottom={"32px"}
              >
                Conteúdos
              </Typography>
              <Card sx={{ maxWidth: 397, boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  alt="Guia Resinas"
                  height="264"
                  width="397"
                  image="../imgs/guia-resinas.jpg"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <Button
                      disabled
                      style={{
                        color: "#A09E9E",
                        backgroundColor: "#FFFFFF",
                        textTransform: "none",
                        marginLeft: "-1rem",
                      }}
                      variant="contained"
                      endIcon={
                        <BoltIcon
                          style={{
                            color: "#382B57",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                        />
                      }
                    >
                      Conteúdo exclusivo
                    </Button>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Guia completo de resinas compostas
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Este conteúdo foi desenvolvido para auxiliar
                    cirurgiões-dentistas no momento de escolha de uma resina
                    composta.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="/guia-resinas" passHref>
                    <Button
                      style={{ fontFamily: "Open Sans, sans-serif" }}
                      variant="contained"
                      className="Button"
                      endIcon={<ArrowForward />}
                    >
                      Ler conteúdo
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}
export default Dashboard;
