import React from "react";
import styles from "../styles/Home.module.css";
import { MolassesClient } from "@molassesapp/molasses-js";
import Link from "next/link";
function SSRExample(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        <h1 className={styles.title}>Welcome to Molasses on SSR Next.js!</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            Landing Page Headline is{" "}
            {props.landingPageActive ? "Active" : "Not Active"}
          </div>
          <div className={styles.card}>
            Checkout v2 is {props.checkoutV2 ? "Active" : "Not Active"}
          </div>
          <div className={styles.card}>
            Line Item Calculation is{" "}
            {props.lineItemCalculation ? "Active" : "Not Active"}
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const molassesClient = new MolassesClient({
    APIKey: process.env.MOLASSES_API_KEY,
  });

  await molassesClient.init();
  return {
    props: {
      checkoutV2: molassesClient.isActive("Checkout v2"),
      lineItemCalculation: molassesClient.isActive("Line Item Calculation"),
      landingPageActive: molassesClient.isActive("Landing Page Headline"),
    },
  };
}
export default SSRExample;
