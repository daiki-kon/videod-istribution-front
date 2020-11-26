import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, headerProps } from '../component/header'

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story<headerProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
