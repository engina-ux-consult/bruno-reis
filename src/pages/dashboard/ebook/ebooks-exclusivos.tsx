import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";
import { CardEbook } from "../../../components/dashboard/ebook/card-ebook";
import { HeaderPage } from "../../../components/dashboard/header-page";
import { DataEbook } from "../../../data/ebooks-sistemas-adesivos";
import { TCardEbook } from "../../../types/card-ebook";

const Ebooks: NextPage = () => {
  const [dataVideos, setDataVideos] = useState<TCardEbook[]>(DataEbook);

  const router = useRouter();
  const handleOpenPDF = (pdf: string) => {
    window.open(pdf);
  };

  return (
    <>
      <Head>
        <title>Iknow - E-books de conteúdos exclusivos</title>
      </Head>
      <HeaderPage
        title="E-books de conteúdos exclusivos"
        onClick={() => router.push("/dashboard")}
      />
      <Box
        sx={{
          padding: ["24px", "40px"],
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Grid container spacing={[3, 5]}>
          {dataVideos.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardEbook
                ebook={item}
                onSelect={() => handleOpenPDF(item.url)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

Ebooks.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Ebooks;
