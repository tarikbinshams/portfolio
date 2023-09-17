import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/fonts.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@components/layout/Layout";
import { makeTitleFromRoute } from "../utils/String";
import { QueryClient, QueryClientProvider } from "react-query";
import AdminLayout from "@components/AdminLayout/AdminLayout";
import dynamic from "next/dynamic";
const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  }
);
import AdminAppStore from '../context/AdminAppContext';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const client = new QueryClient();
  return (
    <div className="">
      <Head>
        <title>
          Deepchain Labs | {""}
          {router.asPath == "/"
            ? "Building The Web3 Internet Ecosystem"
            : makeTitleFromRoute(router.asPath)}
        </title>
        <meta
          name="title"
          content="Deepchain Labs | Building the next generation internet ecosystems"
        />
        <meta
          name="description"
          content="Deepchain Labs is a Bangladeshi blockchain R&D software firm. Our goal is to build the next generation web and its ecosystem via deep technologies."
        />
        <meta name="keywords" content="Deepchain Labs" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://www.deepchainlabs.com/" />
        <meta name="robots" content="index" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@DeepchainLabs" />
        <meta
          name="twitter:title"
          content="Deepchain Labs | Building The Web3 Internet Ecosystem"
        />
        <meta
          name="twitter:description"
          content="Deepchain Labs is a Bangladeshi blockchain R&D software firm. Our goal is to build the next generation web and its ecosystem via deep technologies."
        />

        <meta
          property="og:title"
          content="Deepchain Labs | Building The Web3 Internet Ecosystem"
        />
        <meta property="og:site_name" content="Deepchain Labs" />
        <meta property="og:url" content="https://www.deepchainlabs.com/" />
        <meta
          property="og:description"
          content="Deepchain Labs is a Bangladeshi blockchain R&D software firm. Our goal is to build the next generation web and its ecosystem via deep technologies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.deepchainlabs.com/images/bg-hero.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="GmxOKYFVi1bYWTSlYIfBDqxtoMZW671lpFkAYaHC-sI"
        />
      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-C3SX0SY7GP');
      `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C3SX0SY7GP%22%3E"
        strategy="afterInteractive"
      />

      <QueryClientProvider client={client}>
        <div className="">
          {router.pathname.startsWith("/admin") ? (
            <AdminAppStore>
              <AdminLayout>
                <Component {...pageProps} />
                <Toaster position="bottom-right" />
              </AdminLayout>
            </AdminAppStore>
          ) : (
            <Layout>
              <Component {...pageProps} />
              <Toaster position="bottom-right" />
            </Layout>
          )}
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
