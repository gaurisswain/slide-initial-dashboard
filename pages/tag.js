import React from "react";
import Header from "../components/Header";

const tag = () => {
  return (
    <>
      <Header>
      <div className="grid-container1">
  <div className="itema">
  <i class="bi bi-instagram" style={{width: 40, height:40}}></i>
    <p
      style={{
        marginLeft: 70,
        marginTop: "-35px",
        fontFamily: '"Spartan"',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: "-0.02em",
        color: "#000000"
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
          marginTop: 10
        }}
      >
        {" "}
        Content Sales Report
      </button>
    </center>
  </div>
  <div className="itemb">
    <p className="sale"> Sales</p>
  </div>
  <div className="itemc">
    <p className="tagprod">Tagged Product</p>
    <div style={{ display: "flex" }}>
      <img src="https://picsum.photos/160" className="img" />
      <div className="detail">
        <p className="det">Melange popcorn t-shirt</p>
        <p className="stock">23 in stock</p>
        <button className="remprod">Remove Product</button>
      </div>
    </div>
    <div style={{ display: "flex" }}>
      <img src="https://picsum.photos/160" className="img" />
      <div className="detail">
        <p className="det">Melange popcorn t-shirt</p>
        <p className="stock">23 in stock</p>
        <button className="remprod">Remove Product</button>
      </div>
    </div>
    <div style={{ display: "flex" }}>
      <img src="https://picsum.photos/160" className="img" />
      <div className="detail">
        <p className="det">Melange popcorn t-shirt</p>
        <p className="stock">23 in stock</p>
        <button className="remprod">Remove Product</button>
      </div>
    </div>
    <center>
      <button className="addprod">Add Product</button>
    </center>
  </div>
</div>

      </Header>
    </>
  );
};

export default tag;
