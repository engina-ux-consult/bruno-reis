import { Card, CardContent, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import theme from "../theme";
import { Index } from "../types";

import $ from "jquery";

type SidebarIndexProps = {
  indexMenu: Index[];
};

export const SidebarIndex: FC<SidebarIndexProps> = ({ indexMenu }) => {
  const jQuerycode = () => {
    const links = $(".scroll-actives");
    $(window).on("scroll", () => {
      const topScroll = $(window).scrollTop();
      $(links).each((index) => {
        const item = links[index];
        const href = $(links[index]).attr("href");

        const el = $(href as string);
        const posSection = (el as JQuery<HTMLElement>)?.offset()?.top;
        const hSection = el?.height();
        if (
          posSection &&
          topScroll &&
          hSection &&
          posSection <= topScroll &&
          posSection + hSection > topScroll
        ) {
          links.removeClass("active");
          $(item)?.addClass("active");
        }
      });
    });
  };

  useEffect(() => {
    jQuerycode();
  }, []);

  return (
    <Card
      sx={{
        float: "left",
        borderRadius: "0.5rem",
        gap: "1rem",
        padding: "1rem",
        top: "6rem",
        position: "sticky",
        width: "14.063rem",
        color: "#A09E9E",
        marginLeft: "12px",
        display: "none",
        [theme.breakpoints.up("lg")]: {
          display: "block",
        },
      }}
    >
      <CardContent>
        <Typography sx={{ marginBottom: "16px" }}>ÍNDICE</Typography>
        {indexMenu.map((item, index) => (
          <Typography
            id={"scroll-" + item.name}
            className={`scroll-actives${item.active ? " active" : ""}`}
            key={item.name}
            component="a"
            href={"#" + item.name}
            sx={{
              marginY: "4px",
              display: "block",
              textDecoration: "none",
              color: "#A09E9E",
              "&.active": {
                color: "#382B57",
                fontWeight: 700,
              },
              "&:hover": {
                color: "#382B57",
                fontWeight: 700,
              },
            }}
          >
            {(index + 1).toString().padStart(2, "0")}
            {" - "}
            {item.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
