import React from 'react';
import {render} from '@testing-library/react';

import HighlightText from './'

describe('Test HiglighText component', () => {
  test('Should render with the props', () => {
    const {getByText} = render(<HighlightText text="hello " hightlight="world" />)
    expect(getByText(/hello/g)).toBeInTheDocument();
    expect(getByText(/world/g)).toBeInTheDocument();
  })
});