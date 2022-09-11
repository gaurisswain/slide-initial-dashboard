import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const inventory = () => {
  return (
    <div>
      <Header>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link href="/form">
          <button class="btn btn-secondary" type="button">
            Add Products
          </button>
          </Link>
        </div>
        <div class="list">
          <table class="table table2">
            <thead>
              <tr>
                <th scope="col">SKU</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Catagory</th>
                <th scope="col">Variants</th>
                <th scope="col">Stock Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="details">134</td>
                <td class="details">Mickey Mouse T-Shirt</td>
                <td class="details">T-shirt</td>
                <td class="details">6</td>
                <td class="details">20</td>
              </tr>
              <tr>
                <td class="details">134/01</td>
                <td class="details">Mickey Mouse T-Shirt/ White S</td>
                <td class="details">T-shirt</td>
                <td class="details">-</td>
                <td class="details">20</td>
              </tr>
              <tr>
                <td class="details">134/02</td>
                <td class="details">Mickey Mouse T-Shirt/ White M</td>
                <td class="details">T-shirt</td>
                <td class="details">-</td>
                <td class="details">3</td>
              </tr>
              <tr>
                <td class="details">134/03</td>
                <td class="details">Mickey Mouse T-Shirt/ White L</td>
                <td class="details">T-shirt</td>
                <td class="details">-</td>
                <td class="details">4</td>
              </tr>
              <tr>
                <td class="details">134/04</td>
                <td class="details">Mickey Mouse T-Shirt/ Blue S</td>
                <td class="details">T-shirt</td>
                <td class="details">-</td>
                <td class="details">3</td>
              </tr>
              <tr>
                <td class="details">134/05</td>
                <td class="details">Mickey Mouse T-Shirt/ Blue M</td>
                <td class="details">T-shirt</td>
                <td class="details">-</td>
                <td class="details">4</td>
              </tr>
              <tr>
                <td class="details">134/06</td>
                <td class="details">Mickey Mouse T-Shirt/ Blue L</td>
                <td class="details">T-shirt</td>
                <td class="details">-</td>
                <td class="details">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Header>
    </div>
  );
};

export default inventory;
