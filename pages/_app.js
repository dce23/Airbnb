import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const proBar = new ProgressBar({
  size: 5,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", proBar.start);
Router.events.on("routeChangeComplete", proBar.finish);
Router.events.on("routeChangeError", proBar.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
