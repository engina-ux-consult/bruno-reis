import { Box, Grid, Link, SxProps, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next/types";
import { FormLogin } from "../components/authentication/form-login";
import theme from "../theme";

const styleImage: SxProps = {
  position: "relative",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
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
            <Box
              sx={{
                width: "100%",
                height: "100vh",
              }}
            >
              <Image
                src="/imgs/bd-broe.jpg"
                alt="brand"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
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
            <Box
              sx={{
                maxWidth: "90%",
                paddingY: "32px",
              }}
            >
              <Box textAlign="center" mb="72px">
                <Image src="/imgs/logo-brandd.svg" width={170} height={100} />
              </Box>
              <FormLogin />
              <Typography sx={{ mt: "40px" }} textAlign="center">
                Não possui uma conta?{" "}
                <Link
                  className="Link"
                  underline="none"
                  style={{ color: "#382B57" }}
                  href="/create-account"
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
