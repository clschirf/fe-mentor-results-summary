import styled from '@emotion/styled';
import { primaryTextDark, primaryTextMid } from '../palette';

type SummaryBadgeProps = {
  summaryTitle: string;
  score: number;
  icon: any;
  textColour: string;
  backgroundColour: string;
};

const StyledSummaryBadge = styled.div<
  Pick<SummaryBadgeProps, 'textColour' | 'backgroundColour'>
>`
  color: ${(props) => props.textColour};
  background: ${(props) => props.backgroundColour};
  padding: 0.25em;
  display: flex;
  border-radius: 0.75em;
  flex-direction: row;

  & > * {
    padding: 0.5em;
  }
`;

const Score = styled.span`
  font-weight: 700;
  color: ${primaryTextDark};
`;

const TotalScore = styled.span`
  color: ${primaryTextMid};
`;

const Icon = styled.div<Pick<SummaryBadgeProps, 'textColour'>>`
  color: ${(props) => props.textColour};
`;

const SummaryBadge = (props: SummaryBadgeProps) => {
  return (
    <StyledSummaryBadge
      textColour={props.textColour}
      backgroundColour={props.backgroundColour}>
      {/* <Icon textColour={props.textColour}>{props.icon}</Icon> */}
      {/* {props.icon} */}
      <div>{props.summaryTitle}</div>
      <div>
        <Score>{props.score}</Score> <TotalScore>/ 100</TotalScore>
      </div>
    </StyledSummaryBadge>
  );
};

SummaryBadge.displayName = 'SummaryBadge';
export default SummaryBadge;
