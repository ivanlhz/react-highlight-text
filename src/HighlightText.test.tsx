import React from 'react';
import {render} from '@testing-library/react';

import {HighlightText} from './'

describe('Test HiglighText component', () => {
  test('Should render with the props', () => {
    const {getByText} = render(<HighlightText text="hello world " highlight="world" />)
    expect(getByText(/hello/g)).toBeInTheDocument();
    expect(getByText(/world/g)).toBeInTheDocument();
  })
  test('Should found multiple words or letters', () => {
    const {getByText, getAllByText} = render(<HighlightText text="hello world" highlight="o" />)
    expect(getByText(/hell/g)).toBeInTheDocument();
    expect(getByText(/w/g)).toBeInTheDocument();
    expect(() => getByText(/hello/g)).toThrowError();
  })
  test('Should not contain the highlight letter at the end of the text', () => {
    const {getAllByText, debug} = render(<HighlightText text="hello world" highlight="o" />)
    debug()
    expect(getAllByText(/^o/).length).toBe(2)
  })
});