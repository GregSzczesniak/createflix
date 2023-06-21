import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = function (args) {
  return <Navbar {...args} />;
};

export const NavigationExample = Template.bind({});

NavigationExample.args = {
  elements: ["Movie List", "Favorites ", "Instructions"],
};
