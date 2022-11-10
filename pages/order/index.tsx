import React, { Fragment } from "react";
import Head from "next/head";
import { FormLayout } from "../../layouts/FormLayout";

function Order() {
  return (
    <Fragment>
      <Head>
        <title>Order</title>
      </Head>

      <h1>Order Home</h1>
    </Fragment>
  );
}

Order.PageLayout = FormLayout;

export default Order;
