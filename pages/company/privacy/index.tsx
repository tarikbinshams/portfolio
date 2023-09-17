import AboutUs from "@components/Landing/AboutUs";
import Landings from "@components/TermsAndCondition/Landing";
import OurServices from "@components/Landing/OurServices";

import Tools from "@components/Landing/Tools";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PrivacyPolicy from "@components/PrivacyPolicy/Policy";

export default function Policy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Virtual Trading Solution</title>
        <meta
          name="description"
          content="Business Automation for Enterprises"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyPolicy />
    </div>
  );
}
