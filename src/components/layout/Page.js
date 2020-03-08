import React from "react";
import Helmet from "react-helmet";
import Header from "../Header";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-icons.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/slicknav.min.css";
import "../../assets/css/style.css";

export default function Page({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content="Activitar Template" />
        <meta name="keywords" content="Activitar, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Mythologie</title>

        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      {children}
    </>
  );
}
