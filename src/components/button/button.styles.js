import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: #999;
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  padding: 0 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: filter 0.2s;
  white-space: nowrap;
  width: 100%;

  ${props =>
    props.block &&
    `
    display: block !important;
    width: 100% !important;
  `}

  ${props =>
    props.type === 'primary' &&
    `
    background-color: #7bbb54;

    &:hover {
      background-color: #5d8c41;
    }
    `}

  ${props =>
    props.type === 'secondary' &&
    `
      background-color: #f28939;

      &:hover {
        background-color: #df7c30;
      }
    `}
  
  ${props =>
    props.type === 'tertiary' &&
    `
      background-color: #4cb6eb;

      &:hover {
        background-color: #005eb8;
      }
    `}
  
  @media only screen and (min-width : 500px) {
    display: inline-block;
    width: auto;
  }
`;

export const IconWrapper = styled.span`
  font-size: 22px;
  margin: 0 10px 0 -5px;
  position: relative;
  top: 4px;
`;
