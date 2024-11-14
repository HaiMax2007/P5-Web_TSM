import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="us">
        <h3>skensa tsm</h3>
        <p className="more">
          Di sekolah ini, kami berkomitmen untuk menciptakan lingkungan yang
          mendukung, di mana siswa tidak hanya memperoleh pengetahuan dan
          keterampilan, tetapi juga mengembangkan kepercayaan diri, rasa ingin
          tahu, dan kecintaan untuk belajar sepanjang hayat.
        </p>
      </div>
      <div className="links">
        <h3>service kami</h3>
        <ul className="more">
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/home/guru">guru</a>
          </li>
          <li>
            <a href="/home/kelas">kelas</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>contact</h3>
        <ul className="more">
          <li>
            <img src="/map.png" alt="Map" />
            <span>
              Jl. Cokroaminoto No.84, Pemecutan Kaja, Kec. Denpasar Utara, Kota
              Denpasar, Bali 80116
            </span>
          </li>
          <li>
            <img src="/telephone.png" alt="Telephone" />
            <span>081 339 276 998</span>
          </li>
          <li>
            <img src="/email.svg" alt="Email" />
            <span>contact@smkn1denpasar.sch.id</span>
          </li>
        </ul>
      </div>
      <div className="visit">
        <h3>kunjungi kami</h3>
        <div className="map-wrapper">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5624954399873!2d115.20475307585752!3d-8.63792999140862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f7f52570dc1%3A0x6f96db3e30ec6ffd!2sSMK%20Negeri%201%20Denpasar!5e0!3m2!1sen!2sid!4v1731529594611!5m2!1sen!2sid"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>  
      </div>
    </footer>
  );
};

export default Footer;
