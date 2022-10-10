import { Box, styled, Theme, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import { useAuth } from "../../hooks/use-auth";
import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayoutRoot = styled("div")(({ theme }) => ({}));

export const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  const { logout } = useAuth();

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          maxWidth: "100%",
          ...(!lgUp
            ? {
                paddingTop: "73px",
              }
            : {
                paddingLeft: "95px",
              }),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
      {lgUp ? (
        <DashboardNavbar logout={logout} />
      ) : (
        <DashboardSidebar logout={logout} />
      )}
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
