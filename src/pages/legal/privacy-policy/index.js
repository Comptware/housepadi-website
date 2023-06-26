import React from "react";
import DashboardLayout from "components/layout";
import {
  privacyPolicy,
  boldIndicator,
  linkIndicator,
  tabIndicator,
} from "utils";
import Header from "./Header";
import Footer from "../Footer";

const PrivacyPolicyList = () => {
  const renderTextLink = (text, link) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-blue underline"
      key={text + Math.random()}
    >
      {text}
    </a>
  );

  const renderBoldText = (text) => (
    <span className="medium-font" key={text + Math.random()}>
      {text}
    </span>
  );
  const renderTabText = (text) => (
    <span className="ml-6 md:ml-8" key={text + Math.random()}>
      {text}
    </span>
  );

  return (
    <div>
      {/* <DashboardLayout> */}
      <Header />
      <div className="flex flex-col justify-start items-start h-fit w-full py-14 px-5 sm:px-[50px] md:px-[70px] slg:px-[100px] pt-8">
        <h1 className="text-black bold-font text-3.5xl mb-4">
          PRIVACY NOTICE
        </h1>
        <div className="w-full text-black">
          {privacyPolicy?.split("\n").map((text, i) => {
            return (
              <p className="mb-6 w-full text-xl" key={text + i}>
                {text.split("\b").map((str) => {
                  if (
                    str.includes(boldIndicator) ||
                    str.includes(tabIndicator)
                  ) {
                    return str.includes(tabIndicator)
                      ? renderTabText(str.replace(tabIndicator, "") + " ")
                      : renderBoldText(str.replace(boldIndicator, ""));
                  } else if (str.includes(linkIndicator)) {
                    return str.split(" ").map((linkStr) => {
                      const linkStrLink = linkStr.includes(
                        "info@housepadi.ng"
                      )
                        ? "mailto:info@housepadi.ng"
                        : linkStr.includes("www.housepadi.ng")
                          ? "https://housepadi.ng/"
                          : "";
                      return linkStr.includes(linkIndicator)
                        ? renderTextLink(
                          linkStr.replace(linkIndicator, "") + " ",
                          linkStrLink
                        )
                        : linkStr + " ";
                    });
                  }
                  return str + " ";
                })}
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
      {/* </DashboardLayout> */}
    </div>
  );
};
export default PrivacyPolicyList;
