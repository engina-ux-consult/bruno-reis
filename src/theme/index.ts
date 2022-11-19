import { createTheme } from "@mui/material";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    action: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "#382B57",
          boxShadow: "none",
          color: "#fff",
          textTransform: "none",
          ":hover": {
            backgroundColor: "#584389",
          },
          ":active": {
            backgroundColor: "#7C65B3",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          ":focus": {
            boxShadow: "0 0 0 10px red",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
          fontStyle: "normal",
        },
      },
      variants: [
        {
          props: { variant: "action" },
          style: {
            fontFamily: "Inter",
            fontStyle: "normal",
          },
        },
      ],
    },
  },
});
export default theme;
