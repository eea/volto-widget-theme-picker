import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ThemePicker from './ThemePicker';

describe('ThemePicker', () => {
  const props = {
    id: 'test-theme-picker',
    title: 'Test Theme Picker',
    value: 'color1',
    colors: [
      { name: 'color1', label: 'Color 1' },
      { name: 'color2', label: 'Color 2' },
    ],
    onChange: () => {},
  };

  it('renders correctly', () => {
    const { container } = render(<ThemePicker {...props} />);

    expect(container.querySelector('.wrapper label')).toBeInTheDocument();
    expect(
      container.querySelector('.wrapper .buttons .color1[title="Color 1"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.wrapper .buttons .color2[title="Color 2"]'),
    ).toBeInTheDocument();
  });

  it('calls onChange with correct value when a color button is clicked', () => {
    const onChange = jest.fn();
    const { getByTitle } = render(
      <ThemePicker {...props} onChange={onChange} />,
    );

    fireEvent.click(getByTitle('Color 2'));
    expect(onChange).toHaveBeenCalledWith('test-theme-picker', 'color2');
  });

  it('does not render when no colors are provided', () => {
    const { container } = render(<ThemePicker {...props} colors={[]} />);

    expect(
      container.querySelector('.wrapper .field-test-theme-picker'),
    ).not.toBeInTheDocument();
  });
});
