import { PermIdentity, TimerSharp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";
import { HeaderPage } from "../../../components/dashboard/header-page";
import { TagNew } from "../../../components/dashboard/tag-new";
import { CardVideo } from "../../../components/dashboard/video/card-video";
import { DataVideo } from "../../../data/data-video-resinas-compostas";
import { TCardVideo } from "../../../types/card-video";

const ResinasCompostas: NextPage = () => {
  const [dataVideos, setDataVideos] = useState<TCardVideo[]>(DataVideo);
  const [showVideo, setShowVideo] = useState<TCardVideo | undefined>();

  const router = useRouter();

  const handleSelectVideo = (id: number) => {
    const select = DataVideo.find((item) => item.id === id);
    if (select) {
      setShowVideo(select);
      setDataVideos(DataVideo.filter((item) => item.id !== id));
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleSelectVideo(1);
  }, []);

  return (
    <>
      <Head>
        <title>Iknow - Vídeos exclusivos sobre resinas compostas</title>
      </Head>
      <HeaderPage
        title="Vídeos exclusivos sobre resinas compostas"
        onClick={() => router.push("/dashboard")}
      />
      <Box
        sx={{
          padding: ["24px", "40px"],
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: ["312px", "512px", "834px"],
              height: ["207px", "307px", "555px"],
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "24px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${showVideo?.youtubeID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: ["312px", "400px"],
              paddingTop: ["40px", "50px"],
              paddingLeft: [0, 0, "40px"],
            }}
          >
            <TagNew
              style={{
                top: 0,
                left: [0, "40px"],
                right: "inherit",
              }}
            />
            <Typography
              sx={{ marginBottom: "24px", fontWeight: 700, color: "#222222" }}
            >
              {showVideo?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <PermIdentity />
                <Typography
                  sx={{ color: "#535353", fontSize: "16px", marginLeft: "8px" }}
                >
                  Por{" "}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "8px",
                    color: "#535353",
                    fontSize: "16px",
                  }}
                >
                  {showVideo?.author}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginLeft: ["8px", "26px"] }}>
                <TimerSharp />
                <Typography
                  sx={{ color: "#535353", fontSize: "16px", marginLeft: "8px" }}
                >
                  Duração{" "}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "8px",
                    color: "#535353",
                    fontSize: "16px",
                  }}
                >
                  {showVideo?.duration}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            margin: ["60px 0", "40px 0"],
          }}
        >
          Outros vídeos
        </Typography>
        <Grid container spacing={[3, 5]}>
          {dataVideos.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardVideo
                video={item}
                onSelect={() => handleSelectVideo(item.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

ResinasCompostas.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default ResinasCompostas;
