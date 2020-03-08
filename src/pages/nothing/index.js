import Page from "../../components/layout/Page";
import React from "react";
import Hero from "../../components/Hero";

export default function Nothing() {
  return (
    <Page>
      <Hero
        carousel={[
          {
            image: "img/hero-slider/hero-1.jpg"
          }
        ]}
      />
    </Page>
  );
}
