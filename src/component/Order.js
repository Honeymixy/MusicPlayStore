import React, { useState } from "react";
import { OrderPlan } from "./db";

const Order = () => {
  const [price, setPrice] = useState({
    Amount: 59.99,
    plan: "Annual Plan",
    subscription: "/year",
    currency: "$",
  });
  function Newplanbtn() {
    if (price.Amount === 59.99) {
      setPrice({
        plan: "Monthly Plan",
        Amount: 4.99,
        currency: "$",
        subscription: "Monthly",
      });
    } else {
      setPrice({
        plan: "Annual plan",
        Amount: 59.99,
        currency: "$",
        subscription: "/year",
      });
    }
  }
  function Canclebtn() {
    setPrice([]);
  }
  return (
    <div className="order">
      {OrderPlan.map((Singleplan) => {
        const { img } = Singleplan;
        return (
          <div className="orderpage">
            <div className="orderboard">
              <div className="pricetag">
                <img src={img} alt="" />
                <div>
                  <h4>{price.plan}</h4>
                  <p>
                    {price.currency}
                    {price.Amount}
                    {price.subscription}
                  </p>
                </div>
              </div>
              <a href="##" onClick={Newplanbtn}>
                Change
              </a>
            </div>
            <div className="canclebtn">
              <button>Proceed to payment</button>
              <a href="##" onClick={Canclebtn}>
                Cancle Plan
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
