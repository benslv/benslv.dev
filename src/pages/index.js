import React from "react";
import styled from "styled-components";
import { BiTimer } from "react-icons/bi";

import { Layout } from "@components/Layout";
import { Card } from "../components/Card";

import { color, font } from "@theme/config";
import { TextLink } from "../components/TextLink";

const IndexPage = () => {
  return (
    <Layout>
      <TextLink to="https://google.com">Hello!</TextLink>
    </Layout>
  );
};

export default IndexPage;
