import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;
const btnBgColor = props => {
  switch (props.actionType) {
    case 'good':
      return '#00ff1a';
    case 'neutral':
      return '#0040ff';
    case 'bad':
      return '#ff0000';

    default:
      return 'white';
  }
};
export const Button = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 900;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  border-width: 1px;
  :hover {
    background-color: ${btnBgColor};
    scale: 1.2;
    color: white;
    text-shadow: rgb(0, 0, 0) 1px 0 10px;
  }
`;
