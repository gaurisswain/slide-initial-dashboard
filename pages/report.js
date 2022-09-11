import React from "react";
import Header from "../components/Header";

const report = () => {
  return (
    <>
      <Header>
        <div class="grid-container4">
          <div className="itema">
            <i class="bi bi-instagram" style={{ width: 40, height: 40 }}></i>
            <p
              style={{
                marginLeft: 70,
                marginTop: "-35px",
                fontFamily: '"Spartan"',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              Instagram Post
            </p>
            <center>
              <img src="https://picsum.photos/240" />
              <button
                style={{
                  background: "#109CF1",
                  boxShadow: "0px 4px 10px rgba(16, 156, 241, 0.24)",
                  borderRadius: 4,
                  border: "none",
                  width: 240,
                  height: 30,
                  marginTop: 10,
                }}
              >
                {" "}
                Content Sales Report
              </button>
            </center>
          </div>
          <div class="itema1">
            
          </div>
          <div class="itema2">

          </div>
        </div>
      </Header>
    </>
  );
};

export default report;
