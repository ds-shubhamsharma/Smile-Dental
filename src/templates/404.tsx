// src/template/404.tsx
import {
    TemplateProps,
    TemplateRenderProps,
    GetHeadConfig,
    GetPath,
    TemplateConfig,
    Template,
  } from "@yext/pages";
  import * as React from "react";
  import "../index.css";
  import Header from "../components/layouts/header";
  import Footer from "../components/layouts/footer";
  import PageLayout from "../components/layouts/PageLayout";
  // import {favicon} from "../../sites-global/global"
  import {
    AnalyticsProvider,
    AnalyticsScopeProvider,
    Link,
  } from "@yext/pages/components";
import { AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
  // The path must be exactly 404.html
  export const getPath: GetPath<TemplateProps> = () => {
    return "404.html";
  };
  
  // export const config: TemplateConfig = {
  //   stream: {
  //     $id: "not-found-page",
  //     fields: [],
  //     localization: {
  //       locales: ["en"],
  //       primary: false,
  //     },
  //     filter: {
  //       entityIds: ["header"],
  //     },
  //   },
  // };
  
  function MyFunction() {
    document.body.scrollTop = 20;
    document.documentElement.scrollTop = 20;
  }
  
  // Add a title to the page
  export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
    return {
      title: "Page Not Found",
      tags: [
        {
          // type: "meta",
          // attributes: {
          //   description: document.description,
          //   type: "image/x-icon",
          //    href: faviconA,
  
          type: "link",
          attributes: {
            rel: "icon",
            type: "image/x-icon",
            href: favicon,
          },
        },
        {
          type: "meta",
          attributes: {
            name: "meta:description",
            content: "Pecific Smile Dental",
          },
        },
  
        {
          type: "meta",
          attributes: {
            name: "robots",
            content: "nofollow,noindex",
          },
        },
        {
          type: "meta",
          attributes: {
            name: "author",
            content: "Pecific Smile Dental",
          },
        },
      ],
    };
  };
  
  type props = {
    data: any;
    facebookPageUrl: any;
    instagramHandle: any;
    twitterHandle: any;
    c_tikTok: any;
    prop: any;
  };
  
  // Template that will show as the page
  const FourOhFour: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
    __meta,
  }) => {
    const { _site, head } = document;
    let templateData = { document: document, __meta: __meta };
    // console.log(_site.c_menu[0].menu, "data");
    return (
      <>
      <AnalyticsProvider
          templateData={templateData}
          enableDebugging={AnalyticsEnableDebugging} 
          enableTrackingCookie={AnalyticsEnableTrackingCookie}
        >
          <AnalyticsScopeProvider name={"header"}>
        <PageLayout prop={_site} datas={undefined}>
        
          <div className="">
            <div className="text-center text-[#255ec1] text-6xl pt-32">
             {StaticData.PagenotFound}
            </div>
       
  
  
          <div className="pb-32 pt-8">
            <Link href="/">
            <button className="flex button px-2 text-white bg-[#255ec1] hover:bg-[#10365b] font-bold py-2 px-4 mx-auto">
            {StaticData.goHomeCTA}
            </button>
            </Link>
          </div>
          </div>
  
        </PageLayout>
        </AnalyticsScopeProvider>
        </AnalyticsProvider>
      </>
    );
  };
  
  export default FourOhFour;
  