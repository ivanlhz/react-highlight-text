import React from 'react';
import {HighlightText} from './index';

export default {
  title: 'HighlightText Component'
}

export const initialState = () => <HighlightText text="Hello world" highlight="world" />
export const searchMultiple = () => <HighlightText text="Hello world" highlight="o" />