import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Head from "next/head";
import ST from "./styles";
import Axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/use-auth";
import { messageErrorAuth } from "../utils/valid";
import { AuthError } from "firebase/auth";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

function IndexPage() {
  const router = useRouter();

  const [loginStatus, setLoginStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        userAuth();
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
      }
    });
  };

  function userAuth() {
    Axios.get("http://localhost:3001/userAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token") as string,
      },
    }).then((response) => {
      router.push("/dashboard");
      console.log({ msg: response });
    });
  }

  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signInEmail, logout } = useAuth();

  const handleSubmit = () => {
    setIsLoading(true);
    signInEmail(email, password)
      .then(() => router.push("/dashboard"))
      .catch((error: AuthError) => {
        console.log("Erro no login", error);
        console.log(messageErrorAuth(error.code));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <ST />
      <Head>
        <title>Iknow - Login</title>
      </Head>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            position: "relative",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
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
            }}
          >
            <Grid container style={{ justifyContent: "center" }}>
              <img src="../imgs/logo-brandd.svg" width={200} alt="logo" />
            </Grid>

            <div style={{ height: "7.625rem" }} />
            <form
              action="#"
              method="POST"
              noValidate
              onSubmit={(e) => e.preventDefault()}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 400,
                  minWidth: 400,
                }}
              >
                <TextField
                  required
                  sx={{ ["& fieldset"]: { borderRadius: 3 } }}
                  type="email"
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  value={email}
                  helperText={message}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <div className="h" />
                <div>
                  <div>
                    <FormControl
                      required
                      sx={{
                        m: 0,
                        width: "100%",
                        ["& fieldset"]: { borderRadius: 3 },
                      }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Senha
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Senha"
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
              <p>
                Esqueceu a senha?
                <Link className="Link" href="/redefinirsenha" underline="none">
                  {" "}
                  Acesse aqui
                </Link>
              </p>

              <div className="h" />
              <LoadingButton
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                className="Button"
                loading={isLoading}
                type="submit"
              >
                Entrar
              </LoadingButton>
            </form>

            <div className="h" />

            <p style={{ textAlign: "center" }}>
              Não possui uma conta?{" "}
              <Link
                className="Link"
                underline="none"
                style={{ color: "#382B57" }}
                href="/"
              >
                Acesse aqui
              </Link>{" "}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default IndexPage;
