import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { CardHome } from "../../components/dashboard/home/card-home";
import { dataCard } from "../../data/data-card";
import { useAuth } from "../../hooks/use-auth";

function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Iknow - Dashboard</title>
      </Head>

      <Box
        sx={{
          height: "96px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F6F5FA",
          padding: ["24px 26px", "40px 28px"],
        }}
      >
        <Typography
          sx={{
            color: "#222222",
            fontSize: "24px",
            width: "100%",
            textAlign: "left",
          }}
        >
          Olá, <strong>{user?.name}</strong>
        </Typography>
      </Box>

      <Box component="main" sx={{ padding: ["0 16px", "0 40px"] }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            margin: ["16px 0", "40px 0"],
          }}
        >
          Conteúdos
        </Typography>

        <Grid container spacing={5}>
          {dataCard.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <CardHome dataCard={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
} 
export default Dashboard;
