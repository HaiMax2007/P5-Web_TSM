import React from "react";
import NavBar from "../../assets/NavBar";
import students from "../../AllData/dataSiswaTsm/XII/XIITBSM1.json";

const XIItbsm1 = () => {
  return (
    <div className="students">
      <NavBar />
      <h1>kelas xii tbsm 1</h1>
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

export default XIItbsm1;
