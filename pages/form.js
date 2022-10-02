import React from "react";
import Header from "../components/Header";

const form = () => {
  return (
    <>
      <Header>
        <p class="headingx">Add Products</p>
        <center>
          <div class="flex-container">
            <div class="title">
              <form>
                <div class="mb-3">
                  <label
                    for="title"
                    class="form-label"
                    style={{ marginLeft: 15, marginTop: 10, display: "flex" }}
                  >
                    Title
                  </label>
                  <center>
                    <input
                      type="text"
                      id="sku"
                      className="form-control"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Short Sleeve T-Shirt"
                      style={{ width: 745 }}
                    />
                  </center>
                </div>
                <div class="mb-3 mt-0">
                  <label
                    for="title"
                    class="form-label"
                    style={{ marginLeft: 15, display: "flex" }}
                  >
                    Desciption
                  </label>
                  <center>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Describe the product here.."
                        id="floatingTextarea2"
                        style={{ height: 100, width: 745 }}
                      ></textarea>
                    </div>
                  </center>
                </div>
              </form>
            </div>
            <div class="media"></div>
            <div class="inventory">
              <h6 style={{ marginLeft: 10, marginTop: 15, display: "flex" }}>
                Inventory
              </h6>
              <div>
                <center>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td scope="col">
                          <label htmlFor="sku" className="form-label">
                            SKU (Stock Keeping Unit)
                          </label>
                          <input
                            type="text"
                            id="sku"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                          />
                        </td>
                        <td scope="col">
                          <label htmlFor="barcode" className="form-label">
                            Barcode (ISBN, UPC, GTIN etc.)
                          </label>
                          <input
                            type="text"
                            id="barcode"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </div>
              <div></div>
            </div>
            <div class="options">
              <h6 style={{ marginLeft: 10, marginTop: 15, display: "flex" }}>
                Options
              </h6>
              <hr />
              <div>
                <table class="table" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <td
                        scope="col"
                        style={{ paddingRight: 0, paddingBottom: 40 }}
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                        <i
                          class="bi bi-three-dots-vertical"
                          style={{ marginLeft: -10 }}
                        ></i>
                      </td>
                      <td
                        scope="col"
                        style={{ paddingLeft: 0, paddingBottom: 22 }}
                      >
                        <p
                          style={{
                            fontWeight: 500,
                            paddingBottom: 2,
                            marginBottom: 5,
                          }}
                        >
                          {" "}
                          Size{" "}
                        </p>
                        <div>
                          <button class="option1">Small</button>
                          {"  "}
                          <button class="option2">Medium</button>
                          {"  "}
                          <button class="option3">Large</button>
                          {"  "}
                          <button class="option4">Extra Large</button>
                          {"  "}
                        </div>
                      </td>
                      <td scope="col" style={{ paddingBottom: 22 }}>
                        <button type="button" class="btn btn-outline-dark">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        style={{ paddingRight: 0, paddingBottom: 25 }}
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                        <i
                          class="bi bi-three-dots-vertical"
                          style={{ marginLeft: -10 }}
                        ></i>
                      </td>
                      <td scope="col" style={{ paddingLeft: 0 }}>
                        <p
                          style={{
                            fontWeight: 500,
                            paddingBottom: 2,
                            marginBottom: 5,
                          }}
                        >
                          Color
                        </p>
                        <div>
                          <button class="option1">Red</button>
                          {"  "}
                          <button class="option2">Black</button>
                          {"  "}
                          <button class="option3">Blue</button>
                          {"  "}
                          <button class="option4">White</button>
                          {"  "}
                        </div>
                      </td>
                      <td scope="col">
                        <button type="button" class="btn btn-outline-dark">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="col"
                        style={{ paddingRight: 0, width: 50, paddingLeft: 10 }}
                      >
                        <i class="bi bi-plus" style={{ color: "blue" }}></i>
                      </td>
                      <td scope="col" style={{ paddingLeft: 0, color: "Blue" }}>
                        Add another option
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div class="variants">
              <h6 style={{ marginLeft: 12, marginTop: 15, display: "flex" }}>
                Variants
              </h6>
              <hr />
              <div class="d-flex justify-content-start mt-0">
                <p class="mr-3 ml-4 fw-lighter">Select</p>
                <p class="mr-3 fw-lighter">
                  <a href="#" class="text-decoration-none">
                    All
                  </a>
                </p>
                <p class="mr-3 fw-lighter">
                  <a href="#" class="text-decoration-none">
                    None
                  </a>
                </p>
                <p class="mr-3 fw-lighter">
                  <a href="#" class="text-decoration-none">
                    Size <i class="bi bi-caret-down-fill"></i>
                  </a>
                </p>
              </div>
              <div>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <td scope="col">
                        <i class="bi bi-app"></i>
                      </td>
                      <td scope="col"></td>
                      <th scope="col" class="fw-bold fs-6">
                        Variant
                      </th>
                      <th scope="col" class="fw-bold fs-6">
                        Price
                      </th>
                      <th scope="col" class="fw-bold fs-6">
                        Quantity
                      </th>
                      <th scope="col" class="fw-bold fs-6">
                        SKU
                      </th>
                      <td scope="col"></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="col">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>
                        <i class="bi bi-image"></i>
                      </td>
                      <td>Small</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </td>
                      <td>
                        <input
                          class="bg-light border border-dark"
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="5"
                        />
                      </td>
                      <td>
                        <div class="col-xs-1">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </td>
                      <td>
                      <button type="button" class="btn btn-light border">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>
                        <i class="bi bi-image"></i>
                      </td>
                      <td>Medium</td>
                      <td>
                        <div class="col-xs-1">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          class="bg-light border border-dark"
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="5"
                        />
                      </td>
                      <td>
                        <div class="col-xs-1">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </td>
                      <td>
                      <button type="button" class="btn btn-light border">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>
                        <i class="bi bi-image"></i>
                      </td>
                      <td>Large</td>
                      <td>
                        <div class="col-xs-1">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </td>
                      <td>
                        <input
                          class="bg-light border border-dark"
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="5"
                        />
                      </td>
                      <td>
                        <div class="col-xs-1">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </td>
                      <td>
                      <button type="button" class="btn btn-light border">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </center>
      </Header>
    </>
  );
};

export default form;
