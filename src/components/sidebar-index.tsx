import { Card, CardContent, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import theme from "../theme";
import { Index } from "../types";

type SidebarIndexProps = {
  indexMenu: Index[];
};

export const SidebarIndex: FC<SidebarIndexProps> = ({ indexMenu }) => {
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      console.log('entry', entry);
      
      if(entry.target.id === '3M'){
        console.log('OK');
        
        window.document
          .querySelectorAll(".scroll-actives")
          .forEach((active) => active.classList.remove("active"));

        window.document
          .getElementById("scroll-" + entry.target.id)
          ?.classList.add("active");
      }

      if (entry.isIntersecting) {
        window.document
          .querySelectorAll(".scroll-actives")
          .forEach((active) => active.classList.remove("active"));

        window.document
          .getElementById("scroll-" + entry.target.id)
          ?.classList.add("active");

        console.log("enter" + entry.target.id);

        return;
      } else {
        console.log("leave" + entry.target.id);
      }
    },
    { root: null, threshold: 0.1 }
  );

  useEffect(() => {
    window.document.querySelectorAll(".index_selection").forEach((element) => {
      console.log(element);

      observer.observe(element);
    });
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
