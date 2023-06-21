import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppLogo from "./AppLogo";

export default {
  title: "Components/AppLogo",
  component: AppLogo,
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = function () {
  return <AppLogo />;
};

export const AppLogoExample = Template.bind({});

AppLogoExample.args = {};
