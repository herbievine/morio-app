import type { NextPage } from "next";
import React from "react";
import Page from "../layouts/Page";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return <Page title="Dashboard" component={<div></div>} />;
};

export default Index;
