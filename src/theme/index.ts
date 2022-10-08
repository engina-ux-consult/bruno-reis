import { createTheme } from "@mui/material";

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
  },
});
export default theme;
