import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Alert from '../../src/components/alert';

export default {
  title: 'Molecules',
  component: Alert,
  decorators: [withKnobs, withA11y],
};

const iconTypes = {
  '-': null,
  plus: 'plus',
  alert: 'alert',
  tick: 'tick',
};

export const alert = () => (
  <Alert
    description={text(
      'description',
      'Your booking has been successfully added to your basket'
    )}
    icon={select('icon', iconTypes, 'tick')}
    primaryBtnText={text('primaryBtnText', 'Checkout')}
    secondaryBtnText={text('secondaryBtnText', 'Close')}
    title={text('title', 'Successfully added to basket')}
    onPrimaryClick={action('primary click')}
    onSecondaryClick={action('secondary click')}
  />
);
