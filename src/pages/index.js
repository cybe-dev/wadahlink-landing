import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Heart from "../images/Heart";
import Mobile from "../images/Mobile";
import Welcome from "../images/Welcome";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Wadah Link - Satu Link Untuk Semua</title>
        <meta
          name="description"
          content="Tampung semua linkmu menggunakan Wadah Link dan jangkau
              lebih banyak klik dari followermu sekarang."
        />
      </Helmet>
      <div className="bg-white-100 min-h-screen flex flex-col justify-end items-center pt-32 pb-12">
        <Container className="flex-1 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 flex flex-col justify-center flex-1 mr-0 lg:mr-20 mt-8 lg:mt-0 px-8 lg:px-0">
            <h1 className="rammetto-one text-2xl lg:text-3xl text-center lg:text-left">
              Satu Link Untuk Semua
            </h1>
            <h2 className="text-black-200 mt-3 text-base lg:text-lg text-center lg:text-left">
              Tampung semua linkmu menggunakan <b>Wadah Link</b> dan jangkau
              lebih banyak klik dari followermu sekarang.
            </h2>
            <a
              href="/panel/register"
              title="Buat Wadah Link"
              className="bg-primary-100 w-40 h-10 flex justify-center items-center text-white-100 mt-6 cabin font-bold rounded-full mx-auto lg:ml-0 hover:shadow-lg"
            >
              Buat Sekarang
            </a>
          </div>
          <Welcome className="text-black-100 w-1/2 lg:w-1/3 h-auto order-first lg:order-last" />
        </Container>
        <Container className="flex justify-center">
          <div className="w-full lg:w-1/3 mt-16 text-sm text-black-200 flex justify-center">
            <span className="mr-10">
              <Heart className="mr-2 inline-block w-5 h-5 text-primary-100" />
              Gratis Selamanya
            </span>
            <span>
              <Mobile className="mr-2 inline-block w-5 h-5 text-primary-100" />
              Android & iOS
            </span>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
