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
  [theme.breakpoints.down("md")]: {
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
                backgroundColor: "#382B57",
              }}
            >
              <Image
                src="/imgs/logo-transparente.png"
                alt="brand"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                maxWidth: "464px",
                marginTop: "-100px",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "40px",
                }}
              >
                Os melhores conteúdos sobre odontologia em um só lugar
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "24px",
                  marginTop: "24px",
                }}
              >
                Bruno Reis compartilha dicas, materiais e conteúdos sobre
                odontologia e estética.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "60px",
                left: "60px",
                width: "170px",
                height: "100px",
              }}
            >
              <Image
                src="/imgs/brand-white.png"
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
              <Box textAlign="center">
                <Box
                  sx={{
                    marginBottom: "40px",
                    display: "block",
                    [theme.breakpoints.up("md")]: {
                      display: "none",
                    },
                  }}
                >
                  <Image src="/imgs/logo-brandd.svg" width={170} height={100} />
                </Box>

                <Typography
                  sx={{
                    fontSize: "32px",
                    fontWeight: 600,
                    color: "#222222",
                  }}
                >
                  Entrar
                </Typography>
              </Box>
              <FormLogin />
              <Typography
                sx={{ mt: "40px", fontSize: "18px" }}
                textAlign="center"
              >
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
