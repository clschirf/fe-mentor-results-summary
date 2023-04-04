import styled from '@emotion/styled';
import {
  verbalText,
  verbalBackground,
  visualText,
  visualBackground,
  reactionText,
  reactionBackground,
  memoryText,
  memoryBackground,
  primaryGradientStart,
  primaryGradientEnd,
  primaryTextLight,
} from '../palette';
import SummaryBadge from './SummaryBadge';

import { default as MemoryIcon } from 'assets/images/iconMemory.svg';
import { default as ReactionIcon } from 'assets/images/iconReaction.svg';
import { default as VerbalIcon } from 'assets/images/iconVerbal.svg';
import { default as VisualIcon } from 'assets/images/iconVisual.svg';

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: align-start;
  justify-content: center;
  padding-left: 2em;
  width: 35vw;

  & > * {
    margin-top: 1em;
  }
`;

const ContinueButton = styled.button`
  border-radius: 22px;
  color: ${primaryTextLight};
  margin-top: 3em;
  padding: 1em 3em;
  border: none;
  background: linear-gradient(${primaryGradientStart}, ${primaryGradientEnd});
`;

const Summary = () => {
  return (
    <StyledSummary>
      Summary
      <SummaryBadge
        summaryTitle={'Reaction'}
        score={80}
        icon={ReactionIcon}
        iconAltText='Lightning icon'
        textColour={reactionText}
        backgroundColour={reactionBackground}
      />
      <SummaryBadge
        summaryTitle={'Memory'}
        score={92}
        icon={MemoryIcon}
        iconAltText='Brain icon'
        textColour={memoryText}
        backgroundColour={memoryBackground}
      />
      <SummaryBadge
        summaryTitle={'Verbal'}
        score={61}
        icon={VerbalIcon}
        iconAltText='Speech bubble icon'
        textColour={verbalText}
        backgroundColour={verbalBackground}
      />
      <SummaryBadge
        summaryTitle={'Visual'}
        score={72}
        icon={VisualIcon}
        iconAltText='Eye icon'
        textColour={visualText}
        backgroundColour={visualBackground}
      />
      <ContinueButton>Continue</ContinueButton>
    </StyledSummary>
  );
};

Summary.displayName = 'Summary';
export default Summary;
