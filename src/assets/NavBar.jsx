import React, {useState} from "react";
import LogOutModal from "./LogOutModal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a href="https://www.instagram.com/smkn1denpasar/" target="#">
          <img src="/skensa.png" alt="Logo Skensa" width={"50px"} />
        </a>
        <div className="explain">
          <h3>skensa</h3>
          <p>smk negeri 1 denpasar</p>
        </div>
      </div>
      <nav>
        <ul>
          <li className="nav-item">
            <img src="/home.png" alt="Home" />
            <a href="/home">home</a>
          </li>
          <li className="nav-item">
            <img src="/teacher.png" alt="Guru" />
            <a href="/home/guru">guru</a>
          </li>
          <li className="nav-item">
            <img src="/class.png" alt="kelas" />
            <a href="/home/kelas">kelas</a>
          </li>
          <div className="bar"></div>
          <li className="nav-item">
            <img src="/logout.png" alt="Home" />
            <button onClick={toggleModal}>logout</button>
          </li>
        </ul>
      </nav>
      {
        showModal && (
          <LogOutModal onClose={toggleModal} />
        )
      }
    </header>
  );
};

export default NavBar;
