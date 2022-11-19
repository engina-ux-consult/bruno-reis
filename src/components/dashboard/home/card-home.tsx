import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import { ArrowForward, Bolt as BoltIcon } from "@mui/icons-material";
import { TCardHome } from "../../../types/card-home";
import { useRouter } from "next/router";
import { TagNew } from "../tag-new";

type CardHomeProps = {
  dataCard: TCardHome;
};

export const CardHome: FC<CardHomeProps> = ({ dataCard }) => {
  const router = useRouter();
  const { description, isNew, thumbnail, title, type, url } = dataCard;

  return (
    <Card
      sx={{
        maxWidth: 397,
        boxShadow: "none",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => router.push(url)}
    >
      {isNew && <TagNew />}

      <CardMedia
        component="img"
        alt={title}
        width="397"
        height="264"
        image={thumbnail}
        sx={{
          borderRadius: "16px",
        }}
      />
      <CardContent sx={{ padding: "16px" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "flex",
            color: "#222222",
            alignItems: "center",
            fontSize: "16px",
            marginBottom: "16px",
          }}
        >
          <BoltIcon
            sx={{
              color: "#382B57",
            }}
          />
          Conteúdo exclusivo
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{
            fontWeight: "bold",
            color: "#222222",
            fontSize: "24px",
            marginBottom: "8px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: "18px", color: "#535353" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 16px" }}>
        <Button
          style={{ fontFamily: "Inter, sans-serif" }}
          variant="contained"
          className="Button"
          endIcon={<ArrowForward />}
        >
          {type == "VIDEO" && "Assistir vídeos"}
          {type == "BLOG" && "Ler conteúdo"}
        </Button>
      </CardActions>
    </Card>
  );
};
