import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MovieListItem from "./MovieListItem";
import { TMovieListItem } from "./MovieListItem";

import { Provider } from 'react-redux';
import store from "../../../store";

export default {
  title: "Components/MovieListItem",
  argTypes: {
    poster: { control: "file" },
  },
  component: MovieListItem,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof MovieListItem>;

const defaultArgs: TMovieListItem = {
  id: 'exampleID',
  poster: "https://is2-ssl.mzstatic.com/image/thumb/Video116/v4/72/f8/45/72f8456c-863a-81ed-dbeb-d17b00c4e5ce/pr_source.lsr/113x170bb.png",
  title: "Kandahar (2023)",
  description: "Tom Harris (Gerard Butler) an undercover CIA operative, is stuck deep in hostile territory in Afghanistan. After his mission is exposed, he must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
  selected: false,
}

const Template: ComponentStory<typeof MovieListItem> = (args: TMovieListItem) => {
  return <MovieListItem {...args} />;
};

export const MovieListItemExample = Template.bind({});
MovieListItemExample.args = {...defaultArgs}
