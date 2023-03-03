import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./Nav";
import Banner from "../locationDetail/banner";

type Props = {
  prop: any;
  title?: string;
  _site?: any;
  datas: any;
  children?: React.ReactNode;
};

const PageLayout = ({ children, prop }: Props) => {
  return (
    <div className="min-h-screen">
      <Header
        navigate={prop.c_headerNavigation}
        image={prop.c_headerLogo}
        c_socialButton={prop.c_socialButton}
      />
      {/* <Nav/> */}
      <Banner
        c_bannerheading={prop.c_bannerHeading}
        bannerpara={prop.c_bannerpara}
        bannerImage={prop.c_bannerphoto}
        c_bannerCtas={prop.c_bannerCtas}
      />
      {children}
      <Footer
        footerData={prop.c_footerData}
        copyrighttext={prop.c_copyrighttext}
        c_footerLogo={prop.c_footerLogo}
        c_privacy={prop.c_privacy}
        c_newPatient={prop.c_newPatient}
        contactUsTitle={prop.contactUsTitle}
        c_socialPhoto={prop.c_socialPhoto}
      />
    </div>
  );
};

export default PageLayout;
