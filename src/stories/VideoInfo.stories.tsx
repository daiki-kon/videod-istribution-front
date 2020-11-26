import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { VideoInfo, videoInfoProps } from '../component/videoInfo'

export default {
  title: 'VideoInfo',
  component: VideoInfo,
} as Meta;

const Template: Story<videoInfoProps> = (args) => <VideoInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  videoTitle: 'this is titile'
};