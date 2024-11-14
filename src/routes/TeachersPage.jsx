import React from "react";
import NavBar from "../assets/NavBar";
import teachers from "../AllData/dataGuruTsm/teachers.json";
import Footer from "../assets/Footer";

function Teachers() {
  return (
    <div className="teachers">
      <NavBar />
      <main className="teachers-main container">
        <h1 className="teachers-title">yuk kenalan sama guru tsm & tbsm</h1>
        <section className="baDown">
          <div className="baDown-img">
            <img src="/arrow.png" alt="Arrow" />
            <img src="/baDown.png" alt="Brand Ambassador" />
            <img src="/arrow.png" alt="Arrow" />
          </div>
        </section>
        <section className="tsm">
          <h2>data guru tsm & tbsm</h2>
              <div className="tsm-kepala">
                <h3>kepala bengkel</h3>
                <div className="render">
                  <img src={
                    teachers.find(teacher => teacher.id === 1).image
                  } alt="Kepala Bengkel" />
                  <h4>{
                    teachers.find(teacher => teacher.id === 1).name
                  }</h4>
                  <p className="tsm-mapel">
                    Guru TSM
                  </p>
                </div>
              </div>
          <div className="tsm-all">
            {teachers.map((teacher) => {
              if (teacher.id === 1){
                return;
              } else {
                return (
                  <div className="render">
                    <img src={teacher.image} alt="Anggota" />
                    <h4>{teacher.name}</h4>
                    <p className="tsm-mapel">
                      {teacher.mapel}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Teachers;
