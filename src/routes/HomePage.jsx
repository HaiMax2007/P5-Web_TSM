import React, { useEffect } from "react";
import NavBar from "../assets/NavBar";
import Footer from "../assets/Footer";

function HomePage() {
  
  return (
    <div className="home">
      <div id="home"></div>
      <NavBar />
      <main className="home-main">
        <section className="home-banner">
          <div className="dark"></div>
          <div className="banner-welcome">
            <img src="/school.jpg" alt="School Front" />
          </div>
          <h1>Welcome to our website</h1>
        </section>
        <section className="principal container">
          <img src="/crown.png" alt="Crown" />
          <img src="/particle.png" alt="Particle" />
          <h1 className="principal-title">principal of smkn 1 denpasar</h1>
          <div className="principal-profile">
            <div className="principal-img">
              <img src="/principal.jpg" alt="principal" />
            </div>
            <div className="principal-desc">
              <h2 className="principal-name">I Wayan Mustika, S.Pd., M.Pd.</h2>
              <p className="principal-word">
                Berkarya dengan Tulus Ikhlas, Cepat, Cerdas, Inovatif, Tuntas,
                dan Berdikari untuk Mecapai Pemajuan Ilmu Pengetahuan dan
                Teknologi Kekinian
              </p>
              <div className="principal-sosmed">
                <a href="">
                  <img src="/instagram.png" alt="Instagram" />
                </a>
                <a href="">
                  <img src="/youtube.png" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="detail container">
          <div className="detail-left">
            <img src="butterfly.png" alt="Crown" />
            <h1 className="detail-title">apa sih itu jurusan tsm & tbsm?</h1>
            <div className="detail-desc">
              <p>
                TBSM adalah singkatan dari Teknik dan Bisnis Sepeda Motor, yaitu
                jurusan yang mempelajari tentang cara merancang, membuat, dan
                mengembangkan alat transportasi darat yang menggunakan mesin,
                khususnya sepeda motor. Lalu pada tahun 2023 TBSM berganti nama
                menjadi TSM Yaitu Teknik Sepeda Motor.
              </p>
              <p>
                Tujuan dari jurusan TBSM adalah untuk menyiapkan siswa agar
                mampu memasuki lapangan kerja sebagai mekanik otomotif,
                mengembangkan sikap profesional, dan memilih karier yang sesuai.
              </p>
            </div>
          </div>
          <div className="detail-right">
            <img src="/baMikir.png" alt="Brand Ambassador" />
            <img src="question.png" alt="question" />
          </div>
        </section>
        <section className="facilities container">
          <h1>fasilitas jurusan tsm dan tbsm</h1>
          <div className="facilities-all">
            <div className="box">
              <img src="/plane.png" alt="Plane" />
              <div>
                <img src="/suasanaBengkel1.jpg" alt="Bengkel" />
              </div>
              <h3>bengkel</h3>
            </div>
            <div className="box">
              <img src="/gear.png" alt="Gear" />
              <div>
                <img src="/alat.jpg" alt="Alat" />
              </div>
              <h3>alat</h3>
            </div>
            <div className="box">
              <img src="/motor.png" alt="Motor" />
              <div>
                <img src="/suasanaBengkel2.jpg" alt="Motor" />
              </div>
              <h3>motor</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
