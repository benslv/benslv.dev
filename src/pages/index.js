import React from "react";
import styled from "styled-components";
import { BiTimer } from "react-icons/bi";

import { Layout } from "@components/Layout";
import { Card } from "../components/Card";

import { color, font } from "@theme/config";

const IndexPage = () => {
  return (
    <Layout>
      <Card
        title="Coming Soon"
        description="I'm working hard on designing this site at the moment, and am aiming to actually start
        coding it as soon as possible!"
      />
    </Layout>
  );
};

export default IndexPage;
