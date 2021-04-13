// import App from 'next/app'

import "../styles/global.css";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto ">
      <Nav colorLogo="white" />
      <div className="mx-auto w-full my-4 sm:w-9/12 md:w-6/12">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
