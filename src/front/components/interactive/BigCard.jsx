import React from "react";
import { MediumCard } from "./MediumCard";
import { SmallCard } from "./SmallCard";

export const BigCard = ({
  MediumImg,
  MediumText,
  SmallImg1,
  SmallText1,
  SmallImg2,
  SmallText2,
  SmallImg3,
  SmallText3,
}) => {
  return (
    <div className="container-fluid row big-card-container">
      <div className="col-md-6 col-sm-12">
        <MediumCard img={MediumImg} text={MediumText} />
      </div>
      <div className="col-md-6 col-sm-12">
        <SmallCard img={SmallImg1} text={SmallText1} />
        <SmallCard img={SmallImg2} text={SmallText2} />
        <SmallCard img={SmallImg3} text={SmallText3} />
      </div>
    </div>
  );
};
