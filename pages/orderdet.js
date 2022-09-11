import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const details = () => {
  return (
    <>
      <Header>
        <div class="top">
          <div class="orderno">
            <div class="square">
              <Link href="/orders">
                <i class="bi bi-arrow-left-square square"></i>
              </Link>
            </div>
            <div class="no">
              <b>#1003</b>
            </div>
            <div class="paid">
              <i class="bi bi-circle-fill"></i>
              <b>Paid</b>
            </div>
            <div class="unfulfilled">
              <i class="bi bi-circle"></i>
              <b> Unfulfilled</b>
            </div>
          </div>
          <div class="date">August 17th, 2022 at 15:33 from Draft Orders</div>
        </div>
        <div class="grid-container">
          <div class="item1">
            <h5 style={{marginTop:10, marginLeft:4,}}>
              <i class="bi bi-x-circle" style={{ marginRight: 4, marginLeft: 5, marginTop: 10,}}></i>
              Unfulfilled (1)
            </h5>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td style={{width:80, height:40,}}><img src="/shirtModel.png" alt="image" className="w-full h-auto" style={{width:60,}} /> </td>
                  <td scope="row">
                    <a href="#"><span id="name">Mickey Mouse Polo T-Shirt</span></a>
                    <p style={{color:"grey", fontSize:10,}}>Medium/White
                        <br />
                        SKU: 127
                    </p>
                  </td>
                  <td>$50 <i class="bi bi-x"></i> 1</td>
                  <td>$50</td>
                </tr>
                {/* <tr>
                  <td style={{width:80, height:40,}}><img src="/shirtModel.png" alt="image" className="w-full h-auto" style={{width:60,}} /> </td>
                  <td scope="row">
                    <a href="#"><span id="name">Mickey Mouse Polo T-Shirt</span></a>
                    <p style={{color:"grey", fontSize:10,}}>Medium/White
                        <br />
                        SKU: 127
                    </p>
                  </td>
                  <td>$50 <i class="bi bi-x"></i> 1</td>
                  <td>$50</td>
                </tr> */}
              </tbody>
            </table>
            <hr />
            <button type="button" class="btn btn-success" style={{marginLeft:635, marginTop:10,}}>Fulfill Item</button>
          </div>
          <div class="item2">
            <h5 style={{marginTop:11, marginLeft:4,}}>
              <i class="bi bi-check2-circle" style={{ marginRight: 4, marginLeft: 5, marginTop: 10,}}></i>
              Paid
            </h5>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td scope="row">Subtotal</td>
                  <td>1 item</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td scope="row">Tax</td>
                  <td>IGST 18%</td>
                  <td>$9</td>
                </tr>
                <tr>
                  <td scope="row">
                    <b>Total</b>
                  </td>
                  <td></td>
                  <td>
                    <b>$27</b>
                  </td>
                </tr>
                <tr class="table-group-divider">
                  <td scope="row">Paid by Customer</td>
                  <td></td>
                  <td>$27</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="item3">
            <h5 style={{ marginRight: 4, marginLeft: 5, marginTop: 10,}}>Customer</h5>
            <i className="bi bi-search mx-2 text-slate-400"></i>
            <input
              className="w-3/4  p-1 focus:outline-none text-slate-600"
              type="text"
              placeholder="Search Order"
            />
            <hr />
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td scope="row">
                    {" "}
                    <h6>Customer Information</h6>
                  </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">gaurisswain@gmail.com</td>
                  <td>
                    <i class="bi bi-clipboard2-fill"></i>
                  </td>
                </tr>
                <tr>
                  <td scope="row">+91 98614 57853</td>
                  <td></td>
                </tr>
                <tr class="table-group-divider">
                  <td scope="row">
                    <h6> Shipping Address </h6>
                  </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <p style={{ width: 50 + "%" }}>
                      QTR No. B12 Emami Paper Mills Colony At-Po Rasalpur Dist-
                      Balasore
                    </p>
                  </td>
                  <td>
                    <i class="bi bi-clipboard2-fill"></i>
                  </td>
                </tr>
                <tr>
                  <td scope="row">+91 98614 57853</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Header>
    </>
  );
};

export default details;
