import React from "react";
import ExchangeApp from "./ExchangeApp/exchange";
import ExchangeAdvantages from "./ExchangeApp/ExchangeAdvantages/exchangeadvantage";
import ExchangeDevelopment from "./ExchangeApp/ExchangeDevelopment/exchangedevelop";
import ExchangeFAQ from "./ExchangeApp/ExchangeFAQ/exchangefaq";
import ExchangeMap from "./ExchangeApp/ExchangeMap/exchangemap";
import ExchangeReadmore from "./ExchangeApp/ExchangeReadmore/exchangeread";
import ExchangeSparx from "./ExchangeApp/ExchangeSparx/exchangesparx";
import ExchangeTechnologies from "./ExchangeApp/ExchangeTechnology/exchnagetech";
import ExchangeTestimonals from "./ExchangeApp/ExchangeTestimonal/exchangereview";
import ExchangeRequest from "./ExchangeApp/ExchangeRequest/exchangerequest";
const Exchange = () => {
  return (
    <>
      <ExchangeApp />
      <ExchangeMap />
      <ExchangeSparx />
      <ExchangeAdvantages />
      <ExchangeTechnologies />
      <ExchangeTestimonals />
      <ExchangeDevelopment />
      <ExchangeFAQ />
      <ExchangeReadmore />
      <ExchangeRequest />
    </>
  );
};
export default Exchange;
