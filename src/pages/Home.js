import Page from "../components/layout/Page";
import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Page>
      <Hero
        carousel={[
          {
            image: "img/hero-slider/hero-1.jpg",
            line1: "Divinité originelle",
            line2: "RIEN",
            url: "/nothing",
            button: "Voir le profil"
          },
          {
            image: "img/hero-slider/hero-2.jpg",
            line1: "Divinité originelle",
            line2: "CONSÉQUENCE",
            url: "/consequence",
            button: "Voir le profil"
          }
        ]}
      />
    </Page>
  );
}
