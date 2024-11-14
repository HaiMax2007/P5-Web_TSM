import React from "react";
import NavBar from "../assets/NavBar";
import Footer from "../assets/Footer"

function kelas() {

  return (
    <div className="class">
      <NavBar />
      <main className="class-main container">
        <h1>see our generation</h1>
        <section className="class-arrow">
          <img src="/arrow.png" alt="Arrow Curl" />
          <img src="/downArrow.png" alt="Arrow Down" />
          <img src="/arrow.png" alt="Arrow Curl" />
        </section>
        <section className="class-gen">
          <div className="box">
            <p>hover to see detail's</p>
            <img src="/62.png" alt="Image Generation" />
            <div className="gen">
              <div>
                <img src="/XTSM1.png" alt="X TSM 1" />
                <a href="/home/kelas/xtsm1">see student's</a>
              </div>
              <div>
                <img src="/XTSM2.png" alt="X TSM 2" />
                <a href="/home/kelas/xtsm2">see student's</a>
              </div>
            </div>
          </div>
          <div className="box">
            <p>hover to see detail's</p>
            <img src="/61.png" alt="Image Generation" />
            <div className="gen">
              <div>
                <img src="/XITSM1.png" alt="XI TSM 1" />
                <a href="/home/kelas/xitsm1">see student's</a>
              </div>
              <div>
                <img src="/XITSM2.png" alt="XI TSM 2" />
                <a href="/home/kelas/xitsm2">see student's</a>
              </div>
            </div>
          </div>
          <div className="box">
            <p>hover to see detail's</p>
            <img src="/60.png" alt="Image Generation" />
            <div className="gen">
              <div>
                <img src="/XIITBSM1.png" alt="XII TBSM 1" />
                <a href="/home/kelas/xiitbsm1">see student's</a>
              </div>
              <div>
                <img src="/XIITBSM2.png" alt="XII TBSM 2" />
                <a href="/home/kelas/xiitbsm2">see student's</a>
              </div>
              <div>
                <img src="/XIITBSM3.png" alt="XII TBSM 3" />
                <a href="/home/kelas/xiitbsm3">see student's</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default kelas;
