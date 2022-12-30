import React from "react";
import Quality from "./Quality Assurance/quality";
import QualityAdvantages from "./Quality Assurance/Quality Advantages/qualityadvantages";
import QualityDevelopment from "./Quality Assurance/Quality Development/qualitydevelopment";
import QualityTestimonals from "./Quality Assurance/Quality Testimonals/qualitytestimonals";
import Qualityfaq from "./Quality Assurance/QualityFAQ/qualityfaq";
import Qualitymap from "./Quality Assurance/QualityMap/qualitymap";
import QualityReadmore from "./Quality Assurance/QualityReadmore/qualityread";
import QualityRequest from "./Quality Assurance/QualityRequestfees/qualityrequest";
import QualitySparx from "./Quality Assurance/QualitySparx/qualitysparx";
const Assurance = () => {
  return (
    <>
      <Quality />
      <Qualitymap />
      <QualitySparx />
      <QualityAdvantages />
      <QualityTestimonals />
      <QualityDevelopment />
      <Qualityfaq />
      <QualityReadmore />
      <QualityRequest />
    </>
  );
};
export default Assurance;
