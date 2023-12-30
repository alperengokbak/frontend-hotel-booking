import { createTheme } from "@mui/material/styles";

const colors = {
  black: "#000000",
  twitterBlue: "#1DA1F2",
  white: "#FFFFFF",
  spanGray: "rgb(83, 100, 113)",
};
export const MainTheme = createTheme({
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.twitterBlue,
    },
    third: {
      main: colors.white,
    },
  },
  components: {},
});
