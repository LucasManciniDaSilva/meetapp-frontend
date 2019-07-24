import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(0deg, #9e323b, #440208);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 9px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #fff;
      }
    }
    span {
      color: #ffe342;
      align-self: flex-start;
      margin: 0 0 20px;
      font-weight: bold;
    }

    button {
      margin: 15px 0 0;
      height: 50px;
      background: #ddff54;
      font-weight: bold;
      color: #000;
      border: 0;
      border-radius: 9px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover{
        background: ${darken(0.3, '#ddff54')}
      }
    }

    a{
      margin-top: 40px;
      margin: 5px 0 0;
      height: 20px;
      background: #ffcc96;
      font-weight: bold;
      color: #000;
      border: 0;
      border-radius: 9px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover{
        background: ${darken(0.3, '#ffcc96')}
      }
    }
    }
  }
`;
