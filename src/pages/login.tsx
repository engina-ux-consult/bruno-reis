import { Box, Grid, Link, SxProps, Typography } from "@mui/material";
import Head from "next/head";
import { NextPage } from "next/types";
import { FormLogin } from "../components/authentication/form-login";

const styleImage: SxProps = {
  position: "relative",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  "@media only screen and (max-width: 900px)": {
    display: "none",
  },
};

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Iknow - Login</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid item xs={12} md={6} sx={styleImage}>
            <img
              src="../imgs/bd-broe.jpg"
              className="inv"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              alt="brand"
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box maxWidth="90%">
              <Box textAlign="center" mb="72px">
                <img src="../imgs/logo-brandd.svg" width={200} alt="logo" />
              </Box>
              <FormLogin />
              <Typography sx={{ mt: "40px" }} textAlign="center">
                Não possui uma conta?{" "}
                <Link
                  className="Link"
                  underline="none"
                  style={{ color: "#382B57" }}
                  href="/"
                  fontWeight="bold"
                >
                  Acesse aqui
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
