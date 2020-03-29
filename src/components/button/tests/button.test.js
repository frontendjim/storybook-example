import React from 'react';
import { render } from '@testing-library/react';

import Button from '..';

describe('<Button />', () => {
  const mockProps = {
    label: 'Test label',
    onClick: () => null,
  };

  it('should render as expended', () => {
    const { asFragment } = render(<Button {...mockProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render an icon when requested', () => {
    const { container } = render(<Button {...mockProps} icon="plus" />);

    const iconEl = container.firstChild.querySelector('span');
    expect(iconEl).not.toBeNull();
  });
});
