import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});