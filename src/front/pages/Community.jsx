import React from "react";
import { SimpleCard } from "../components/SimpleCard";
import { BigCard } from "../components/interactive/BigCard";

export const Community = () => {
  const lastest = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/jon-favreau-hollywood-walk-of-fame-feature_464fe901.jpeg?region=0%2C0%2C1536%2C864",
      text: "Jon Favreau Honored with Star on Hollywood Walk of Fame",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/celebrating-representation-galax_e8497a75.jpeg?region=0%2C0%2C1536%2C864",
      text: "Unidos: Celebrating Latin Representation in the Galaxy Far, Far Away",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/628506bbdbbde50001f99f79-image_c7b87520.jpeg?region=0%2C0%2C1536%2C864",
      text: '"Imagine Yourself Doing Impossible Things”: A Conversation with Kelly Marie Tran for AANHPI Heritage Month"',
    },
  ];

  const quizzes = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/sw-soulmate-the-mandalorian-feature_778a4754.jpeg?region=0%2C0%2C1536%2C864",
      text: "Which Star Wars Character is Your Soulmate?",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/how-well-do-you-know-the-bad-batch-quiz-feature_4cfbb845.jpeg?region=0%2C0%2C1536%2C864",
      text: "Quiz: How Well Do You Know Star Wars: The Bad Batch?",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/what-percent-omega-are-you-quiz-feature_0649c3db.jpeg?region=0%2C0%2C1536%2C864",
      text: " Quiz: What Percent Omega Are You?",
    },
  ];

  const crafts = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/star-wars-gift-crate-tall_3a2c2d06.jpeg?region=0%2C0%2C1536%2C864",
      text: "This Upcycled Star Wars-Style Crate Makes a Great Galactic Gift Box",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/star-wars-cornucopia-craft-tall_8710c764.jpeg?region=0%2C0%2C1536%2C864",
      text: "Make This AT-ST Diorama the Center of Attention",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/star-wars-andor-pumpkin-stencil_3b33e383.jpeg?region=0%2C0%2C1536%2C864",
      text: "Fight Against the Dark with a Jack-O’-Lantern Inspired by Andor",
    },
  ];

  const recipes = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/yellow-travel-biscuits-tall_7b8f533b.jpeg?region=0%2C0%2C1536%2C864",
      text: "These Yellow Travel Biscuits Will Transport You to the Age of the Empire",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/pog-soup-tall_ecb3eca1.jpeg?region=0%2C0%2C1536%2C864",
      text: "Enjoy Pog Soup, a Meal for a Mandaloria",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/carbonite-crunch-tall_68e6530d.jpeg?region=0%2C0%2C1536%2C864",
      text: 'Tell Your Partner "I Know" with Carbonite Crunch',
    },
  ];

  const stories = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/5f85fdbd3ee83f000170eb44-image_12a6302f.jpeg?region=0%2C0%2C1536%2C864",
      text: "The Vibrant World of Brandon Jackson’s Star Wars Photography",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/5e7279490092c7000129ce30-image_ba8176cc.jpeg?region=0%2C0%2C1536%2C864",
      text: "Our Star Wars Stories Returns, Celebrating Fans Across the Galaxy",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/5bdce97bfb71080001fddaa1-image_8e17e64c.jpeg?region=0%2C0%2C1536%2C864",
      text: "Our Star Wars Stories: What is Your Favorite Star Wars Event Experience?",
    },
  ];

  const families = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/5e00e9b280e9d50001a59105-image_69fce640.jpeg?region=0,0,1536,864&width=320",
      text: "Meet the Photographers Behind Star Wars Families Presented by eBay",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/5de6a7d1ad8a680001c29731-image_4194c8b6.jpeg?region=0,0,1536,864&width=320",
      text: "Star Wars Families Presented by eBay Is Here",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/5ddef5e580e9d50001c8b87f-image_625da640.jpeg?region=0,0,1536,864&width=320",
      text: "Star Wars Families Presented by eBay to Celebrate the Star Wars Saga and Fans Worldwide",
    },
  ];

  const fan = [
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/fan-spotlight-abi-julie-swgs-honeymoon_feature_3196b54f.jpeg?region=0%2C0%2C1536%2C864",
      text: "StarWars.com Fan Spotlight: Honeymoon Aboard the Halcyon",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/sw-fan-spotlight-blue-milk-mama_4033116d.jpeg?region=0%2C0%2C1536%2C864",
      text: "StarWars.com Fan Spotlight: As Blue Milk Mama, Jacquelyn Smith Bakes Up Delectable Desserts",
    },
    {
      img: "https://lumiere-a.akamaihd.net/v1/images/633eef87d7e2f30001b6ac99-image_b12e23e8.jpeg?region=0%2C0%2C1536%2C864",
      text: "StarWars.com Fan Spotlight: Isabella Holguin’s High Republic Cosplay Is For Light and Life",
    },
  ];

  return (
    <div className="row container-fluid community-container">
      <div id="community-title" className="sub-title container">
        <h3>Community</h3>
      </div>
      <div className="sub-title container">
        <h4>Latest News + Features</h4>
      </div>
      {lastest.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <SimpleCard img={item.img} title={item.text} />
        </div>
      ))}
      <div className="sub-title container">
        <h4>Quizzes + Polls</h4>
      </div>
      {quizzes.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <SimpleCard img={item.img} title={item.text} />
        </div>
      ))}
      <div className="sub-title container">
        <h4>Crafts</h4>
      </div>
      {crafts.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <SimpleCard img={item.img} title={item.text} />
        </div>
      ))}
      <div className="sub-title container">
        <h4>Recipes</h4>
      </div>
      {recipes.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <SimpleCard img={item.img} title={item.text} />
        </div>
      ))}
      <div className="sub-title container">
        <h4>Our Star Wars Stories</h4>
      </div>
      {stories.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <SimpleCard img={item.img} title={item.text} />
        </div>
      ))}
      <div className="sub-title container">
        <h4>Star Wars Families Presented by eBay</h4>
      </div>

      <BigCard
        MediumImg={
          "https://sm.ign.com/t/ign_es/screenshot/default/how-much-every-star-wars-movie-has-made-at-the-box-office-2j_jw5p.1280.jpg"
        }
        MediumText={
          "The Force in All of Us: Star Wars Families Presented by eBay"
        }
        SmallImg1={families[0].img}
        SmallText1={families[0].text}
        SmallImg2={families[1].img}
        SmallText2={families[1].text}
        SmallImg3={families[2].img}
        SmallText3={families[2].text}
      />
      <div className="sub-title container">
        <h4>Fan Spotlights</h4>
      </div>
      {fan.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <SimpleCard img={item.img} title={item.text} />
        </div>
      ))}

      <div className="text-buttom">
        <p>
          Notice: Lucasfilm Ltd. strives to foster an inclusive, diverse and
          safe environment for our fans and we ask the same of our fan
          community.
        </p>
        <small>
          Fan organizations, websites, blogs, clubs, podcasts, social media
          accounts, etc. are not owned, endorsed, sponsored, controlled, or in
          any way affiliated with Lucasfilm Ltd. or The Walt Disney Company, and
          do not necessarily reflect the views or opinions of Lucasfilm Ltd.,
          The Walt Disney Company or any of their affiliates, and no warranty
          expressed or implied is made regarding accuracy, adequacy,
          completeness, legality, reliability or usefulness of any information.
          Please see terms of use agreements and privacy policies that apply to
          such third-party services and content. Star Wars logos, trademarks,
          character names, and all related elements © & ™ Lucasfilm Ltd. and/or
          The Walt Disney Company.
        </small>
      </div>
    </div>
  );
};

/* 
  MediumImg,
  MediumText,
  SmallImg1,
  SmallText1,
  SmallImg2,
  SmallText2,
  SmallImg3,
  SmallText3,
*/
