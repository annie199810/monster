import React from "react";
import MetaverseApp from "./Metaverse/metaverse";
import MetaverseAdvantages from "./Metaverse/MetaverseAdvantages/metaadvance";
import MetaverseDevelopment from "./Metaverse/MetaverseDevelopment/metadevelop";
import MetaverseMap from "./Metaverse/MetaverseMap/metamap";
import MetaverseProcess from "./Metaverse/MetaverseProcess/metaprocess";
import MetaverseReadmore from "./Metaverse/MetaverseReadmore/metaread";
import MetaverseRequest from "./Metaverse/MetaverseRequest/metarequest";
import MetaverseSparx from "./Metaverse/MetaverseSparx/metasparx";
import MetaverseTechnologies from "./Metaverse/Metaversetechnology/metatech";
import MetaverseTestimonals from "./Metaverse/MetaverseTestimonals/metareview";
const Metaverse = () => {
  return (
    <>
      <MetaverseApp />
      <MetaverseMap />
      <MetaverseDevelopment />
      <MetaverseAdvantages />
      <MetaverseTechnologies />
      <MetaverseTestimonals />
      <MetaverseSparx />
      <MetaverseProcess />
      <MetaverseReadmore />
      <MetaverseRequest />
    </>
  );
};
export default Metaverse;
