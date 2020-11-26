import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { RatingButtonGroup, ratingButtonGroupProps } from '../component/ratingButtonGroup'

export default {
  title: 'RatingButtonGroup',
  component: RatingButtonGroup,
} as Meta;

const Template: Story<ratingButtonGroupProps> = (args) => <RatingButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  goodNum:100,
  badNum:100
};