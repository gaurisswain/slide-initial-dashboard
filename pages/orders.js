import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const orders = () => {
  return (
    <div>
      <Header>
        <div>
          <table class="table table-dark bg-dark " style={{ borderRadius: 10 + 'px', }}>
            <thead>
              <tr>
                <td
                  scope="col"
                  style={{ paddingBottom: 20 + "px", fontWeight: "bold" }}
                >
                  30 Days
                </td>
                <td scope="col">
                  <span style={{ color: "grey" }}>Orders</span>
                  <br />
                  <b>
                    <span>1</span>
                  </b>
                </td>
                <td scope="col">
                  <span style={{ color: "grey" }}>Ordered Items</span> <br />
                  <b>
                    <span>1</span>
                  </b>
                </td>
                <td scope="col">
                  <span style={{ color: "grey" }}>Returned items</span> <br />
                  <b>
                    <span>0</span>
                  </b>
                  <span style={{ color: "grey" }}>
                    {"   "}
                    <i class="bi bi-arrow-down-short"></i>0%
                  </span>
                </td>
                <td scope="col">
                  <span style={{ color: "grey" }}>Fulfilled Orders</span> <br />
                  <b>
                    <span>1</span>
                  </b>
                </td>
                <td scope="col">
                  <span style={{ color: "grey" }}>Time to fulfill </span>
                  <br />
                  <b>
                    <span>8 days 16 hrs</span>
                  </b>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div
          style={{
            margin: 17 + "px",
            borderRadius: 17 + "px",
            backgroundColor: "white",
          }}
        >
          <table class="table table2">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Date</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Quantity</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Fullfilment Status</th>
                <th scope="col">Tracking</th>
              </tr>
            </thead>
            {/* </table>
            <table class="table"> */}
            <tbody>
              <tr>
              <Link href="/orderdet">
                <th scope="row" class="orderid">
                  #1003
                </th>
                </Link>
                <td class="details">26 Sept at 15:03</td>
                <td class="details">9861457853</td>
                <td class="details">869</td>
                <td class="details">10</td>
                <td>
                  <center>
                    <div class="pending">Pending</div>
                  </center>
                </td>
                <td>
                  <center>
                    <div class="pending">Pending</div>
                  </center>
                </td>
                <td>
                  <div class="addink">
                    <button
                      style={{
                        width: 70,
                        height: 25,
                        backgroundColor: "#885AF8",
                        color: "white",
                        border: "none",
                        borderRadius: 6,
                        fontFamily: '"Poppins"',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 11,
                        textAlign: "center",
                        letterSpacing: "0.02em",
                        marginTop: 3 + "px",
                      }}
                    >
                      {" "}
                      Add Link{" "}
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <Link href="/orderdet">
                <th scope="row" class="orderid">
                  #1003
                </th>
                </Link>
                <td class="details">26 Sept at 15:03</td>
                <td class="details">9861457853</td>
                <td class="details">869</td>
                <td class="details">10</td>
                <td>
                  <center>
                    <div class="approved">Approved</div>
                  </center>
                </td>
                <td>
                  <center>
                    <center>
                      <div class="approved">Approved</div>
                    </center>
                  </center>
                </td>
                <td class="link">
                  <button
                    style={{
                      width: 70,
                      height: 25,
                      backgroundColor: "#885AF8",
                      color: "white",
                      border: "none",
                      borderRadius: 6,
                      fontFamily: '"Poppins"',
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: 11,
                      textAlign: "center",
                      letterSpacing: "0.02em",
                      marginTop: 3 + "px",
                    }}
                  >
                    {" "}
                    Add Link{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <Link href="/orderdet">
                <th scope="row" class="orderid">
                  #1003
                </th>
                </Link>
                <td class="details">26 Sept at 15:03</td>
                <td class="details">9861457853</td>
                <td class="details">869</td>
                <td class="details">10</td>
                <td>
                  <center>
                    <div class="pending">Pending</div>
                  </center>
                </td>
                <td>
                  <center>
                    <div class="pending">Pending</div>
                  </center>
                </td>
                <td class="link">
                  <button
                    style={{
                      width: 70,
                      height: 25,
                      backgroundColor: "#885AF8",
                      color: "white",
                      border: "none",
                      borderRadius: 6,
                      fontFamily: '"Poppins"',
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: 11,
                      textAlign: "center",
                      letterSpacing: "0.02em",
                      marginTop: 3 + "px",
                    }}
                  >
                    {" "}
                    Add Link{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Header>
    </div>
  );
};

export default orders;
