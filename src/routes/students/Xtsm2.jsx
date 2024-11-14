import React from "react";
import NavBar from "../../assets/NavBar";
import students from "../../AllData/dataSiswaTsm/X/XTSM2.json";

const Xtsm2 = () => {
  return (
    <div className="students">
      <NavBar />
      <div className="down"></div>
      <h1>kelas x tsm 2</h1>
      <div className="students-wrapper container">
        {students.map((student) => {
          return (
            <div className="profile">
              <img src="/student.png" alt="Student Dummy" />
              <div className="info">
                <h4>{student.name}</h4>
                <p>{student.nis}</p>
              </div>
              <h1 className="absen">{student.absen}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Xtsm2;