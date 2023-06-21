import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderIcon from "./HeaderIcon";

import gitlabIcon from "../../../gitlab-icon-rgb.png";

export default {
  title: "Components/HeaderIcon",
  argTypes: {
    icon: { control: "file" },
  },
  component: HeaderIcon,
} as ComponentMeta<typeof HeaderIcon>;

const Template: ComponentStory<typeof HeaderIcon> = function (args) {
  return <HeaderIcon {...args} />;
};

export const HeaderIconExample = Template.bind({});

HeaderIconExample.args = {
  icon: gitlabIcon,
  link: "https://gitlab.createit.pl:8888/js-dept/createflix",
  alt: "Gitlab Logo",
};
