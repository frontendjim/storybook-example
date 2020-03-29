import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Button from '../../src/components/button';

export default {
  title: 'Atoms',
  component: Button,
  decorators: [withKnobs, withA11y],
};

const buttonTypes = ['primary', 'secondary', 'tertiary'];
const iconTypes = {
  '-': null,
  plus: 'plus',
  alert: 'alert',
};

export const button = () => (
  <Button
    block={boolean('block', false)}
    className={text('className', null)}
    icon={select('icon', iconTypes)}
    label={text('label', 'Submit')}
    title={text('title', null)}
    type={select('type', buttonTypes)}
    onClick={action('clicked')}
  />
);
