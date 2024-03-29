import { ArrowBack } from "@mui/icons-material";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import Head from "next/head";
function Redefinirsenhasecondstep() {
  return (
    <div>
      {/* <ST/> */}
      <Head>
        <title>Iknow - Redefinir Senha</title>
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
          <Image
            src="../imgs/bd-broe.jpg"
            className="inv"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>
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
            <Link href="/redefinirsenha">
              <Button
                style={{ color: "#000000", float: "left" }}
                startIcon={<ArrowBack />}
              />
            </Link>
            <Grid style={{ float: "right" }}>
              Não possui uma conta?{" "}
              <Link className="Link" underline="none" href="/">
                Acesse aqui
              </Link>
            </Grid>
          </Grid>
          <p className="subT">Enviamos o código para seu e-mail</p>
          <p className="text">
            Insira o código de verificação de 6 dígitos enviando para
            *****@gmail.com.{" "}
            <Link className="Link" href="/redefinirsenha" underline="none">
              Alterar
            </Link>
          </p>
          <div className="h" />
          <TextField
            required
            sx={{ ["& fieldset"]: { borderRadius: 3 } }}
            type="text"
            id="codigo"
            label="Código"
            variant="outlined"
            name="codigo"
          />
          <FormLabel>
            <Button
              style={{
                color: "#382B57",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Reenviar código
            </Button>
          </FormLabel>
          <div className="h" />
          <Link
            underline="none"
            href="/redefinirsenhathirdstep"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 400,
            }}
          >
            <Button variant="contained" className="Button">
              Continuar
            </Button>
          </Link>
          <p className="text" style={{ textAlign: "center" }}>
            Se não encontrar o e-mail na sua caixa de entrada, verifique a pasta
            de spam.
          </p>
        </div>
      </Grid>
    </div>
  );
}

export default Redefinirsenhasecondstep;
