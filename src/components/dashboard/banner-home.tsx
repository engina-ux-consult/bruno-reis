import { Box, Typography } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";
import theme from "../../theme";

export const BannerHome: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: ["32px 16px", "32px 36px"],
        borderRadius: "8px",
        background: "linear-gradient(90deg, #382B57 0%, #3D237C 100%)",
      }}
    >
      <Box sx={{ maxWidth: "500px" }}>
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: "40px",
            color: "#ffff",
            marginBottom: "8px",
            [theme.breakpoints.up("md")]: {
              fontSize: "40px",
            },
          }}
        >
          Plataforma de conteúdos exclusivos <b>Bruno Reis</b>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            color: "#ffff",
            marginBottom: "24px",
          }}
        >
          Aqui você encontra os melhores conteúdos e conhecimentos do mundo da
          odontologia.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Image
          src="/imgs/logo-trans.png"
          layout="fill"
          objectFit="contain"
          quality={80}
        />
      </Box>
    </Box>
  );
};
