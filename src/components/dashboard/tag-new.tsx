import { SxProps, Theme, Typography } from "@mui/material";
import type { FC } from "react";

type TagNewProps = {
  style?: SxProps<Theme>;
};

export const TagNew: FC<TagNewProps> = ({ style }) => {
  return (
    <Typography
      variant="action"
      sx={{
        position: "absolute",
        right: "16px",
        top: "16px",
        color: "#382B57",
        fontSize: "14px",
        padding: "4px 8px",
        backgroundColor: "#00C9A3",
        borderRadius: "30px",
        fontWeight: "bold",
        ...style,
      }}
    >
      NOVO
    </Typography>
  );
};
