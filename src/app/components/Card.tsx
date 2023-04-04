import styled from '@emotion/styled';
import Result from './Result';
import Summary from './Summary';

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25%;
  padding; 10em;
  width: 80vw;
`;

const Card = () => {
  return (
    <StyledCard>
      <Result />
      <Summary />
    </StyledCard>
  );
};

Card.displayName = 'Card';
export default Card;
