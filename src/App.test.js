import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se o botão AC da calculadora está na tela', () => {
  render(<App />);
  const buttonElement = screen.getByText(/AC/i);
  expect(buttonElement).toBeInTheDocument();
});