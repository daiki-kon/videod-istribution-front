import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { PlayVideoPage } from '../pages/playVideo'

export default {
  title: 'PlayVideoPage',
  component: PlayVideoPage,
} as Meta;

const Template: Story = (args) => <PlayVideoPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
