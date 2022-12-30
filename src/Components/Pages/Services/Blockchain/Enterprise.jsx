import React from "react";
import EnterpriseAdvantages from "./EnterpriseBlockchain/EnterpriceAdvantages/enterpriseadvance";
import EnterpriseSparx from "./EnterpriseBlockchain/EnterpriceSparx/enterprisesparx";
import Enterprise from "./EnterpriseBlockchain/Enterprise";
import EnterpriseDevelopment from "./EnterpriseBlockchain/EnterpriseDevelopment/enterprisedevelop";
import EnterpriseFAQ from "./EnterpriseBlockchain/EnterpriseFQA/enterprisefaq";
import EnterpriseMap from "./EnterpriseBlockchain/EnterpriseMap/enterprisemap";
import EnterpriseProcess from "./EnterpriseBlockchain/EnterpriseProcess/enterpriseprocess";
import EnterpriseRequest from "./EnterpriseBlockchain/EnterpriseRequest/enterpriserequest";
import EnterpriseReadmore from "./EnterpriseBlockchain/EnterpriseReadmore/enterpriseread";
import EnterpriseTechnologies from "./EnterpriseBlockchain/EnterpriseTechnology/enterprisetech";
import EnterpriseTestimonals from "./EnterpriseBlockchain/EnterpriseTestimonal/enterprisereview";
const EnterpriseBlockchain = () => {
  return (
    <>
      <Enterprise />
      <EnterpriseMap />
      <EnterpriseDevelopment />
      <EnterpriseAdvantages />
      <EnterpriseTechnologies />
      <EnterpriseTestimonals />
      <EnterpriseSparx />
      <EnterpriseProcess />
      <EnterpriseFAQ />
      <EnterpriseReadmore />
      <EnterpriseRequest />
    </>
  );
};
export default EnterpriseBlockchain;
