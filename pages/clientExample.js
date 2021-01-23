import React from "react";
import { MolassesClient } from "@molassesapp/molasses-js";
import styles from "../styles/Home.module.css";
import Link from "next/link";
class ClientExample extends React.Component {
  state = {
    loading: true,
    checkoutV2: false,
    lineItemCalculation: false,
    landingPageActive: false,
  };
  async componentDidMount() {
    const molassesClient = new MolassesClient({
      APIKey: process.env.NEXT_PUBLIC_MOLASSES_API_KEY,
    });

    await molassesClient.init();
    this.setState({
      loading: false,
      checkoutV2: molassesClient.isActive("Checkout v2"),
      lineItemCalculation: molassesClient.isActive("Line Item Calculation"),
      landingPageActive: molassesClient.isActive("Landing Page Headline"),
    });
  }
  render() {
    if (this.state.loading) {
      return <div>This page is loading</div>;
    }
    return (
      <div className={styles.container}>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Molasses on Client Fetching Next.js!
          </h1>

          <div className={styles.grid}>
            <div className={styles.card}>
              Landing Page Headline is{" "}
              {this.state.landingPageActive ? "Active" : "Not Active"}
            </div>
            <div className={styles.card}>
              Checkout v2 is {this.state.checkoutV2 ? "Active" : "Not Active"}
            </div>
            <div className={styles.card}>
              Line Item Calculation is{" "}
              {this.state.lineItemCalculation ? "Active" : "Not Active"}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ClientExample;
