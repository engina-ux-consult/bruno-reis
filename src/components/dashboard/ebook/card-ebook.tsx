import { BoltSharp } from "@mui/icons-material";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import type { FC } from "react";
import { TCardEbook } from "../../../types/card-ebook";
import { TagNew } from "../tag-new";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type CardEbookProps = {
  ebook: TCardEbook;
  onSelect: () => void;
};

export const CardEbook: FC<CardEbookProps> = ({ ebook, onSelect }) => {
  const { isNew, thumbnail, title, subTitle } = ebook;
  return (
    <Box onClick={onSelect} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          width: "100%",
          height: ["207 px", "397px"],
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          margin: "auto",
        }}
      >
        {isNew && (
          <TagNew
            style={{
              top: "16px",
              right: "16px",
            }}
          />
        )}
        <CardMedia
          component="img"
          alt="Ebook"
          width="100%"
          height="100%"
          image={thumbnail}
        />
      </Box>
      <Box
        sx={{
          padding: "16px",
        }}
      >
        <Box
          sx={{
            marginBottom: "17px",
            display: "flex",
          }}
        >
          <BoltSharp sx={{ color: "#382B57" }} />
          <Typography sx={{ color: "#222222", fontSize: "16px" }}>
            Conteúdo exclusivo
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#222222",
            fontSize: "24px",
            marginBottom: "8px",
            fontWeight: 700,
            width: "100%",
            maxWidth: "365px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#222222",
            fontSize: "18px",
            marginBottom: "16px",
            width: "100%",
            maxWidth: "365px",
          }}
        >
          {subTitle}
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          variant="contained"
          size="large"
          sx={{
            height: "50px",
          }}
        >
          Ler conteúdo
        </Button>
      </Box>
    </Box>
  );
};
