import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Halaman Tidak Ditemukan</title>
      </Helmet>
      <div className="flex h-screen w-full items-center justify-center text-center text-xl">
        Halaman Tidak Ditemukan
      </div>
    </Layout>
  );
}
