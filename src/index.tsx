import React, { FC } from 'react';
import { HighlightTextProps } from './HighlightText.types';

const HighlightText: FC<HighlightTextProps> = ({ text, hightlight }) => {
  return (
    <>
      {text}
      <strong>{hightlight}</strong>
    </>
  );
};

export default HighlightText;
