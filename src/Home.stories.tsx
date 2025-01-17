import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Home from '../pages';

export default {
  component: Home,
  title: 'Pages/Home',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const Default = () => <Home />;

Default.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};
