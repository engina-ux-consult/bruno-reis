import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { BannerHome } from "../../components/dashboard/banner-home";
import { CardHome } from "../../components/dashboard/home/card-home";
import { useAuth } from "../../hooks/use-auth";

import { dataCard } from "../../data/data-card";

function Dashboard() {
  const { user } = useAuth();

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

        <Grid container spacing={5}>
          {dataCard.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardHome dataCard={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default Dashboard;
