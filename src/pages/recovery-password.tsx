import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Grid,
  IconButton,
  Link,
  SxProps,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { FormRecoveryPassword } from "../components/authentication/form-recovery-password";

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
  const router = useRouter();

  const handleClickNagivate = () => {
    router.push("/create-account");
  };

  return (
    <>
      <Head>
        <title>Iknow - Redefinir Senha</title>
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
            sx={{ maxHeight: "100vh", padding: "36px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="Back" onClick={handleClickNagivate}>
                <ArrowBackIcon />
              </IconButton>
              <Typography sx={{ fontSize: "18px" }}>
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
            <Box
              sx={{
                height: "calc(100vh - 70px)",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box maxWidth="90%">
                <Typography variant="h5">Esqueceu a senha?</Typography>
                <Typography variant="body1" mt="8px">
                  Digite seu e-mail cadastrado para enviarmos um código de
                  alteração de senha.
                </Typography>
                <FormRecoveryPassword />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
