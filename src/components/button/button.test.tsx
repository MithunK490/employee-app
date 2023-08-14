import Button, { ButtonPropTypes } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('If button works properly', () => {
  test('If snapshot matches correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      value: 'Button'
    };
    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });

  test('If label rendered correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      value: 'Button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    if (element) expect(element).toHaveTextContent('Button');
  });
  test('If type is assigned correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      type: 'button',
      value: 'Button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.getAttribute('type')).toBe('button');
  });

  //test onClick()
});
