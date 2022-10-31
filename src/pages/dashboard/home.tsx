import { ArrowForward } from "@mui/icons-material";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { useRouter } from "next/router";
import { BannerHome } from "../../components/dashboard/banner-home";
import { useAuth } from "../../hooks/use-auth";

function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Iknow - Dashboard</title>
      </Head>
      <Box component="main" sx={{ padding: ["16px", "32px"] }}>
        <Typography sx={{ fontSize: "18px" }}>
          Olá, <strong>{user?.name}</strong>
        </Typography>

        <Box sx={{ margin: ["16px 0", "60px 0 32px 0"] }}>
          <BannerHome />
        </Box>

        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Conteúdos
        </Typography>

        <Box sx={{ paddingY: "32px" }}>
          <Card
            sx={{ maxWidth: 397, boxShadow: "none", cursor: "pointer" }}
            onClick={() => router.push("/conteudo/guia-resinas")}
          >
            <CardMedia
              component="img"
              alt="Guia Resinas"
              height="264"
              width="397"
              image="/imgs/guia-resinas.jpg"
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
              <Button
                style={{ fontFamily: "Open Sans, sans-serif" }}
                variant="contained"
                className="Button"
                endIcon={<ArrowForward />}
              >
                Ler conteúdo
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
}
export default Dashboard;
