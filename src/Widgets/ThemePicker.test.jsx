import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
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
    const component = renderer.create(<ThemePicker {...props} />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    const label = component.toJSON().children[0].children[0].children[0]
      .children[0].children[0];
    const buttons = component.toJSON().children[0].children[0].children[0]
      .children[0].children[1];

    expect(label.children[0]).toBe('Test Theme Picker');
    expect(buttons.children[0].props.className).toContain('color1');
    expect(buttons.children[1].props.className).toContain('color2');
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
    const component = renderer.create(<ThemePicker {...props} colors={[]} />);

    let json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeNull();
  });
});
