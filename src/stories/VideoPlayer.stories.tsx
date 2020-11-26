import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { VideoPlayer, videoPlayerProps } from '../component/videoPlayer'

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
} as Meta;

const Template: Story<videoPlayerProps> = (args) => <VideoPlayer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
};