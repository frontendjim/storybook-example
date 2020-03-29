import React from 'react';
import PropTypes from 'prop-types';
import * as IO from 'react-icons/io';

import { Wrapper, IconWrapper } from './button.styles';

const Button = ({ block, className, icon, label, title, type, onClick }) => {
  let iconType;

  switch (icon) {
    case 'plus':
      iconType = 'IoIosAddCircle';
      break;

    case 'alert':
      iconType = 'IoIosAlert';
      break;

    default:
      break;
  }

  const Icon = icon ? IO[iconType] : null;

  return (
    <Wrapper
      className={className}
      type={type}
      title={title}
      block={block}
      onClick={onClick}
    >
      {icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {label}
    </Wrapper>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.oneOf(['plus', 'alert']),
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  block: false,
  className: null,
  icon: null,
  title: null,
  type: 'primary',
};

export default Button;
