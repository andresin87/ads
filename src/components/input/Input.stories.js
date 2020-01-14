import React from "react";

import Input from "./Input";

export default {
  title: "ADS|Atom|Avatar",

  parameters: {
    component: Input
  }
};

export const standard = () => (
  <Input
    size="large"
    username="Tom Coleman"
    src="https://avatars2.githubusercontent.com/u/132554"
  />
);
