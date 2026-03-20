import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Calculator from './components/Calculator';

test('verifica se o botão AC da calculadora está na tela', () => {
  render(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>
  );
  const buttonElement = screen.getByText(/AC/i);
  expect(buttonElement).toBeInTheDocument();
});
