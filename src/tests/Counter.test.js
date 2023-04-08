import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("-1");
});
