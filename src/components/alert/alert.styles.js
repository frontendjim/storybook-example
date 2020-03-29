import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f1f4f5;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px #999;
  margin: 20px auto;
  max-width: 400px;
  padding: 20px;
`;

export const Buttons = styled.div`
  @media only screen and (min-width: 500px) {
    display: flex;
    margin: 0 -10px;
  }
`;

export const ButtonsItem = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 500px) {
    flex: 1;
    margin: 0 10px;
  }
`;

export const Title = styled.h2`
  color: #7bbb54;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px;
  padding: 0;
  text-align: center;
`;

export const Description = styled.p`
  color: #333;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 0 0 20px;
  padding: 0 40px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  color: #7bbb54;
  font-size: 100px;
  margin: 0 20px;
  text-align: center;
`;
