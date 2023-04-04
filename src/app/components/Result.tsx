import styled from '@emotion/styled';
import {
  primaryGradientStart,
  primaryGradientEnd,
  primaryTextLight,
  secondaryGradientEnd,
  secondaryGradientStart,
  secondaryTextLight,
} from '../palette';

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10%;
  padding; 10em;
  color: ${primaryTextLight};
  background: linear-gradient(${primaryGradientStart}, ${primaryGradientEnd});
  width: 35vw;
  height: 100%;

  & > div {
    padding-left: 1.2em;
    padding-right: 1.2em;
  }
`;

const Title = styled.div`
    font-size: 1.2em;
    padding-bottom: 1em;
    padding-top: 1.5em;
`;

const ResultBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  background: linear-gradient(
    ${secondaryGradientStart},
    ${secondaryGradientEnd}
  );
`;

const Level = styled.div`
    font-size: 1.8em;
    padding-bottom: 0.5em;
    padding-top: 1em;
`;

const Score = styled.div`
  color: ${primaryTextLight};
  font-size: 3.5em;
  font-weight: 800;
`;

const TotalScore = styled.div`
    color: ${secondaryTextLight};
`;

const Percentile = styled.div`
  color: ${secondaryTextLight};
  padding-bottom: 2em;
`;

const Result = () => {
  return (
    <StyledResult>
      <Title>Your Result</Title>
      <ResultBadge>
        <Score>76</Score>
        <TotalScore>of 100</TotalScore>
      </ResultBadge>
      <Level>Great</Level>
      <Percentile>
        You scored higher than 65% of the people who have taken these tests.
      </Percentile>
    </StyledResult>
  );
};

Result.displayName = 'Result';
export default Result;
