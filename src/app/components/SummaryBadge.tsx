import styled from '@emotion/styled';
import { primaryTextDark, primaryTextMid } from '../palette';

type SummaryBadgeProps = {
  summaryTitle: string;
  score: number;
  icon: string;
  iconAltText: string;
  textColour: string;
  backgroundColour: string;
};

const StyledSummaryBadge = styled.div<
  Pick<SummaryBadgeProps, 'textColour' | 'backgroundColour'>
>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.textColour};
  background: ${(props) => props.backgroundColour};
  padding: 0.25em;
  border-radius: 0.75em;
  width: 100%;

  & > * {
    padding: 0.5em;
  }
`;

const TitleContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
`;

const ScoreContainer = styled.div`
  text-align: right;
  justify-content: flex-end;
`;

const Score = styled.span`
  font-weight: 700;
  color: ${primaryTextDark};
`;

const TotalScore = styled.span`
  color: ${primaryTextMid};
`;

const Icon = styled.div`
  padding-right: 0.5em;
`;

const SummaryBadge = (props: SummaryBadgeProps) => {
  console.log('icon: ', props.icon);

  return (
    <StyledSummaryBadge
      textColour={props.textColour}
      backgroundColour={props.backgroundColour}>
      <TitleContainer>
        <Icon>
          <img
            src={props.icon}
            alt={props.iconAltText}
          />
        </Icon>
        <div>{props.summaryTitle}</div>
      </TitleContainer>
      <ScoreContainer>
        <Score>{props.score}</Score> <TotalScore>/ 100</TotalScore>
      </ScoreContainer>
    </StyledSummaryBadge>
  );
};

SummaryBadge.displayName = 'SummaryBadge';
export default SummaryBadge;
