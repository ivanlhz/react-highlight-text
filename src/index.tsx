import React, { FC } from 'react';
import { HighlightTextProps } from './HighlightText.types';

const baseComponentHighlight = (text: string, highlight?: string) => (
  <React.Fragment key={Math.random()}>
    {text}
    {highlight && <strong>{highlight}</strong> }
  </React.Fragment>
);

const HighlightText: FC<HighlightTextProps> = ({ text, highlight }) => {
  const getComponents = (text: string, highlight: string): JSX.Element[] => {
    const splittedText = text.split(highlight);
    const toReturn: JSX.Element[] = splittedText.map((textFragment, index) =>
      index < splittedText.length - 1 ? baseComponentHighlight(textFragment, highlight) : baseComponentHighlight(textFragment)
    );
    return toReturn;
  };

  return <>{getComponents(text, highlight).map((comp) => comp)}</>;
};

export { HighlightText };
