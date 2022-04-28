import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('renders learn react link', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change color'})
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
});

test('Expects that the button turns MidnightBlue on click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change color'})
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})
});

test('Expects that the button is initially enabled', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change color'});
  expect(colorButton).toBeEnabled();
})

test('Expects that the checkbox is initially unchecked', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('Expects the button get disables if the checkbox is checked and enable if it is unchecked', (() => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change color'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
}))

test('Expects the button to turn gray when disabled', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name:'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change color'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
});

describe('Function to replace camel with space works', () => {
  test('Is just one word', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('Are just two words', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('Are multiple words', () => {
    expect(replaceCamelWithSpaces('MidnightBlueDark')).toBe('Midnight Blue Dark');
  })
})
