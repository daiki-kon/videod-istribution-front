import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserLabel, userLabelProps } from '../component/userLabel'

export default {
  title: 'UserLabel',
  component: UserLabel,
} as Meta;

const Template: Story<userLabelProps> = (args) => <UserLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  userName: 'Elliot',
  iconUrl: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
};