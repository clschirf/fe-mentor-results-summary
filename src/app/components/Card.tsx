import styled from '@emotion/styled';
import { primaryGradientStart } from '../palette';

const StyledCard = styled.div`
  display: flex;
  border: 2px solid ${primaryGradientStart};
`;

const Card = () => {
  return <StyledCard>card</StyledCard>;
};

Card.displayName = 'Card';
export default Card;
