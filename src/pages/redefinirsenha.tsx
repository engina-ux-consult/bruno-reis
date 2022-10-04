import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import { ArrowBack } from "@mui/icons-material";
import ST from "./styles";
import Head from "next/head";
import { useAuth } from "../hooks/use-auth";
import { AuthError } from "firebase/auth";
import { messageErrorAuth } from "../utils/valid";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

function Redefinir() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string>();

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const handleOnChange = (e: any) => {
    setEmail(e.target.value);
    if (e.target.value.match(regEx)) {
      setMessage("");
      return;
    } else {
      setMessage("Email não é valido");
    }
  };

  const { resetPassword } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsLoading(true);
    resetPassword(email)
      .then(() => {
        setMessage("Foi enviado um token para o seu email");
      })
      .catch((error: AuthError) => {
        console.log("Erro no login", error);
        console.log(messageErrorAuth(error.code));
        setMessage(messageErrorAuth(error.code));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      {/* <ST/> */}
      <Head>
        <title>Iknow - Redefinir Senha</title>
      </Head>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          sm={6}
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
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
          sm={6}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 400,
              margin: "auto",
            }}
          >
            <Grid style={{ flexDirection: "row" }}>
              <Link className="Link" href="/login" underline="none">
                <Button
                  style={{ color: "#000000", float: "left" }}
                  startIcon={<ArrowBack />}
                />
              </Link>
              <Grid style={{ float: "right" }}>
                Não possui uma conta?{" "}
                <Link className="Link" href="/" underline="none">
                  Acesse aqui
                </Link>
              </Grid>
            </Grid>
            <p className="subT">Esqueceu a senha?</p>
            <p className="text">
              Digite seu e-mail cadastrado para enviarmos um código de alteração
              de senha.
            </p>
            <form>
              <TextField
                fullWidth
                required
                sx={{ ["& fieldset"]: { borderRadius: 3 } }}
                type="email"
                id="email"
                label="E-mail"
                variant="outlined"
                name="email"
                value={email}
                helperText={message}
                onChange={handleOnChange}
              />
              <div className="h" />
              <LoadingButton
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                className="Button"
                loading={isLoading}
                type="submit"
              >
                Enviar código
              </LoadingButton>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Redefinir;
