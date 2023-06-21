import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppHeader from "./AppHeader";

export default {
  title: "Components/AppHeader",
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = function () {
  return <AppHeader />;
};

export const AppHeaderExample = Template.bind({});

AppHeaderExample.args = {};
