import React from 'react';
import PropTypes from 'prop-types';
import * as IO from 'react-icons/io';

import Button from '../button';

import {
  Wrapper,
  Buttons,
  ButtonsItem,
  Title,
  Description,
  IconWrapper,
} from './alert.styles';

const Alert = ({
  description,
  icon,
  primaryBtnText,
  secondaryBtnText,
  title,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  let iconType;

  switch (icon) {
    case 'plus':
      iconType = 'IoIosAddCircle';
      break;

    case 'alert':
      iconType = 'IoIosAlert';
      break;

    case 'tick':
      iconType = 'IoMdCheckboxOutline';
      break;

    default:
      break;
  }

  const Icon = icon ? IO[iconType] : null;

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      {description && <Description>{description}</Description>}

      {icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}

      <Buttons>
        <ButtonsItem>
          <Button
            type="primary"
            label={primaryBtnText}
            block={true}
            onClick={onPrimaryClick}
          />
        </ButtonsItem>
        <ButtonsItem>
          <Button
            type="secondary"
            label={secondaryBtnText}
            block={true}
            onClick={onSecondaryClick}
          />
        </ButtonsItem>
      </Buttons>
    </Wrapper>
  );
};

Alert.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.oneOf(['plus', 'alert', 'tick']),
  primaryBtnText: PropTypes.string,
  secondaryBtnText: PropTypes.string,
  title: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

Alert.defaultProps = {
  description: null,
  icon: null,
  title: null,
  primaryBtnText: 'Confirm',
  secondaryBtnText: 'Cancel',
  onPrimaryClick: null,
  onSecondaryClick: null,
};

export default Alert;
