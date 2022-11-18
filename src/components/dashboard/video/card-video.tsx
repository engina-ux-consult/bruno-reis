import { BoltSharp } from "@mui/icons-material";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import type { FC } from "react";
import { TCardVideo } from "../../../types/card-video";
import { TagNew } from "../tag-new";

type CardVideoProps = {
  video: TCardVideo;
  onSelect: () => void;
};

export const CardVideo: FC<CardVideoProps> = ({ video, onSelect }) => {
  const { title, youtubeID } = video;
  return (
    <Box onClick={onSelect} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          width: '100%',
          height: ["207px", "264px"],
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          margin:'auto'
        }}
      >
        <TagNew
          style={{
            top: "16px",
            right: "16px",
          }}
        />
        <CardMedia
          component="img"
          alt="YouTube video player"
          width="100%"
          height="100%"
          image={`http://img.youtube.com/vi/${youtubeID}/sddefault.jpg`}
          sx={{
            borderRadius: "16px",
          }}
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
            marginBottom: "16px",
            fontWeight: 700,
            width: "100%",
            maxWidth: "365px",
          }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            height: "50px",
          }}
        >
          Assistir vídeo
        </Button>
      </Box>
    </Box>
  );
};
