import TopLeftGradient from '@/components/others/TopLeftGradient';
import TopRightGradient from '@/components/others/TopRightGradient';
import AppBar from '@/components/shared/AppBar';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import FAQ from '@/components/view_coin/FAQ';
import ViewCoinMain from '@/components/view_coin/ViewCoinMain';
import React from 'react';

const page = () => {
  return (
    <main>
      {/* Gradients in the right side and the left side of the top of the page */}
      <TopLeftGradient></TopLeftGradient>
      <TopRightGradient></TopRightGradient>
      {/* ------ */}

      <div className="container">
        <Navbar></Navbar>
        <AppBar></AppBar>
      </div>
      <ViewCoinMain></ViewCoinMain>
      <FAQ></FAQ>
      <Footer></Footer>
    </main>
  );
};

export default page;
