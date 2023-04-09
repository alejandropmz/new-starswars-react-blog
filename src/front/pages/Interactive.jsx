import React from "react";
import { GamesApps } from "../components/interactive/GamesApps";
import { BigCard } from "../components/interactive/BigCard";

export const Interactive = () => {
  return (
    <div className="container-fluid">
      <div className="type">
        <div className="type-title">
          <h1>Interactive</h1>
        </div>
      </div>
      <GamesApps
        title={"GAMES + APPS"}
        img={
          "https://lumiere-a.akamaihd.net/v1/images/new-swcom-slide-desktop_games_021d34b6.jpeg?region=0,0,2048,870&width=1536"
        }
        text={
          "Get the lastest official new, trailers, and insights on a galaxy of Star Wars games and apps."
        }
      />
      <div className="sub-title container">
        <h1>The Latest | Star Wars Games + Apps</h1>
      </div>
      <BigCard
        MediumImg={
          "https://lumiere-a.akamaihd.net/v1/images/swjs-story-trailer-merrin-advises-cal-on-the-dangers-ah_c8dbbfb4.jpeg?region=0,0,1536,864&width=480"
        }
        MediumText={
          "5 Things We Noticed in the Star Wars Jedi: Survivor Story Trailer"
        }
        SmallImg1={
          "https://lumiere-a.akamaihd.net/v1/images/star-wars-jedi-battle-scars-cover-tall_afdc327a.jpeg?region=0,0,960,540&width=600"
        }
        SmallText1={
          "Cal Kestis Looks to Infiltrate to an Enemy Stronghold in Star Wars."
        }
        SmallImg2={
          "https://lumiere-a.akamaihd.net/v1/images/the-cloe-wars-game-tall_e3f2d381.jpeg?region=0,0,1536,864&width=600"
        }
        SmallText2={"Star Wars: The Clone Wars Invades."}
        SmallImg3={
          "https://lumiere-a.akamaihd.net/v1/images/63935c247674f8000143e3e7-image_121064e9.jpeg?region=0,0,1536,864&width=600"
        }
        SmallText3={
          "Star Wars Jedi: Survivor: Cameron Monaghan on Cal Kestis’ Next."
        }
      />
      <GamesApps
        title={"VIRTUAL REALTY"}
        img={
          "https://lumiere-a.akamaihd.net/v1/images/vr-hero-desktop_25626109.jpeg?region=0,0,2048,870&width=1536"
        }
        text={
          "Discover new Star Wars virtual realty and immersive entertainment experiences from ILMxLAB and beyond."
        }
      />
      <div className="sub-title container">
        <h1>The Latest | Star Wars Virtual Realty</h1>
      </div>
      <BigCard
        MediumImg={
          "https://lumiere-a.akamaihd.net/v1/images/star-wars-tales-from-galaxys-edge-artwork-the-bounty-of_5398165a.jpeg?region=0,0,1536,864&width=600"
        }
        MediumText={
          "Exiting Combat, New enemies, and more in official Trailer for Star Wars: Tales from the galaxy's Edge - Enhanced Edition"
        }
        SmallImg1={
          "https://lumiere-a.akamaihd.net/v1/images/ilmxlab_talesee_tall_f2cf91f4.jpeg?region=0,0,1536,864&width=600"
        }
        SmallText1={
          "Star Wars: Tales from the Galaxy’s Edge – Enhanced Edition"
        }
        SmallImg2={
          "https://lumiere-a.akamaihd.net/v1/images/63210eae27d70a00018a5033-image_7d245d9f.jpeg?region=0,0,1536,864&width=600"
        }
        SmallText2={
          "Return to Batuu with Star Wars: Tales from the Galaxy’s Edge."
        }
        SmallImg3={
          "https://lumiere-a.akamaihd.net/v1/images/6293e87ddbbde50001f18b55-image_0e2297d6.jpeg?region=0,0,1536,864&width=600"
        }
        SmallText3={"SWCA 2022: The Women of ILMxLAB Discuss Their Career."}
      />
    </div>
  );
};
