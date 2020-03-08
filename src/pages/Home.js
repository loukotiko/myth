import Page from "../components/layout/Page";
import React from "react";
import Hero from "../components/Hero";
import useCharacters from "../services/characters/useCharacters";

export default function Home() {
  const { getCharacterUrl } = useCharacters();
  return (
    <Page>
      <Hero
        carousel={[
          {
            image: "img/hero-slider/hero-1.jpg",
            line1: "Divinité originelle",
            line2: "RIEN",
            url: getCharacterUrl("nothing"),
            button: "Voir le profil"
          },
          {
            image: "img/hero-slider/hero-2.jpg",
            line1: "Divinité originelle",
            line2: "CONSÉQUENCE",
            url: getCharacterUrl("consequences"),
            button: "Voir le profil"
          }
        ]}
      />
    </Page>
  );
}
