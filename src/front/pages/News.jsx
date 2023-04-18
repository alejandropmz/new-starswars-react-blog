import React from "react";
import { BigCard } from "../components/interactive/BigCard";
import { NewsSimpleCard } from "../components/news/NewsSimpleCard";
import { YearCard } from "../components/news/YearCard";

export const News = () => {
  const elements = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/2025-swce-articlefeat_afce93f9.jpeg?region=0,0,1600,900&width=480",
      title: "Celebration Heads to Japan in 2025",
      date: "April 10, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/micro-galaxy-wave-v-swce-articlefeat-1600x900_c58fade7.jpeg?region=0,0,1600,900&width=480",
      title: "SWCE 2023: Check Out Jazwares' Star Wars",
      date: "April 10, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/visions-swce-articlefeat_587d3953.jpeg?region=0,0,1600,900&width=320",
      title: "Star Wars: Visions Volume 2Trailer, Key Art, and Cast Revealed",
      date: "April 10, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/marvel-swce-articlefeat_5f81e98a.jpeg?region=0,0,1600,900&width=320",
      title: "SWCE 2023: Marvel Reveals Horror Event and More",
      date: "April 10, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/the-bb-s3-swce-articlefeat_b17ebbff.jpeg?region=0,0,1600,900&width=320",
      title: "SWCE 2023: Star Wars: The Bad Batch Season 3 Coming in 2024",
      date: "April 10, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/swce-2023-lfl-panel-swce-articlefeat_3bb21ffe.jpeg?region=0,0,1600,900&width=320",
      title: "SWCE 2023: 10 Reveals from the Lucasfilm Publishing Panel",
      date: "April 9, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/ahsoka-panel-swce-articlefeat_4b1f77ee.jpeg?region=0,0,1600,900&width=320",
      title: "SWCE 2023: 10 Things We Learned from the Panel",
      date: "April 9, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/swce-funko-articlefeat_c8f9d9d8.jpeg?region=0,0,1600,900&width=320",
      title:
        "SWCE 2023: Funko Reveals New Micro-Sized Star Wars Bitty Pop! Line",
      date: "April 9, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/dark-horse-thr-comics_d140e6ea.jpeg?region=0,0,1280,720&width=320",
      title:
        "SWCE 2023: Dark Horse Reveals a Star Wars: The High Republic Adventures Phase III Teaser, New Jaxxon Art, and More",
      date: "April 9, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/swjs-swce-articlefeat_ff584ddf.jpeg?region=0,0,1600,900&width=320",
      title:
        "SWCE 2023: Respawn’s Stig Asmussen Breaks Down New Star Wars Jedi: Survivor Final Gameplay Trailer - Exclusive",
      date: "April 9, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/swce23-sw-tales-of-the-jedi-featured_0fa38a64.jpeg?region=0,0,1600,900&width=320",
      title: "SWCE 2023: Star Wars: Tales of the Jedi Season 2 Announced",
      date: "April 9, 2023",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/swce-2023-sw-hasbro-reveals-swce-articlefeat_02964ac5.jpeg?region=0,0,1600,900&width=320",
      title: "SWCE 2023: See Over 20 Hasbro Star Wars Reveals",
      date: "April 9, 2023",
    },
  ];

  const years = [
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
  ];

  return (
    <div className="container-fluid row">
      <div className="sub-title container">
        <h4>Lastest news + Features</h4>
      </div>
      <BigCard
        MediumImg={
          "https://lumiere-a.akamaihd.net/v1/images/vote-webbys-2023-featured_96bf21a0.jpeg?region=0,0,1536,864&width=768"
        }
        MediumText={"Vote for Star Wars in the 2023 Webby Awards!"}
        SmallImg1={
          "https://lumiere-a.akamaihd.net/v1/images/mando-mania-week-7-products-feature_6c816645.jpeg?region=0,0,1600,900&width=320"
        }
        SmallText1={
          "Mando Mania: Cobb Vanth and Cad Bane Duel in Hasbro’s The Black Series, and More!"
        }
        SmallImg2={
          "https://lumiere-a.akamaihd.net/v1/images/yja-articlefeat_75e331ea.jpeg?region=0,0,1536,864&width=320"
        }
        SmallText2={"Watch the New Star Wars: Young Jedi Adventures Trailer"}
        SmallImg3={
          "https://lumiere-a.akamaihd.net/v1/images/swce-bignews-mon_fd3423e1.jpeg?region=0,0,1280,720&width=320"
        }
        SmallText3={"SWCE 2023: All the Big News"}
      />
      <div className="sub-title container">
        <h4>More News + Features</h4>
      </div>
      {elements.map((element, index) => (
        <div key={index} className="col-sm-12 col-md-3">
          <NewsSimpleCard
            img={element.img}
            title={element.title}
            date={element.date}
          />
        </div>
      ))}
      <div className="d-flex justify-content-center show-more-button">
        <button className="d-flex justify-content-center align-items-center">
          SHOW MORE <i class="bx bx-chevron-down"></i>
        </button>
      </div>
      <div className="sub-title container">
        <h4>Archives</h4>
      </div>
      {years.map((year) => (
        <div key={year} className="col-sm-12 col-md-3">
          <YearCard title={year} />
        </div>
      ))}
    </div>
  );
};
