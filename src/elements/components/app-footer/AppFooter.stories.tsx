import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppFooter from "./AppFooter";

export default {
  title: "Components/AppFooter",
  component: AppFooter,
} as ComponentMeta<typeof AppFooter>;

const Template: ComponentStory<typeof AppFooter> = function () {
  return <AppFooter />;
};

export const AppHeaderExample = Template.bind({});

AppHeaderExample.args = {};
