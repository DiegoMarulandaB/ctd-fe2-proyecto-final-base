import { act, cleanup, render, screen } from '../../../__test__/test-utils';
import { waitFor, fireEvent } from '@testing-library/react';
import Cita from '../../quote/__test__/Cita';

describe('Cita', () => {
  beforeEach(() => {
    render(<Cita />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Should render button 'Obtener cita aleatoria' and empty input by default", async () => {
    const citaRandomButton = screen.queryByRole('button', { name: 'Obtener cita aleatoria' });

    const input = screen.queryByPlaceholderText('Ingresa el nombre del autor');

    expect(citaRandomButton).toBeInTheDocument();
    expect(input).toBeEmptyDOMElement();
  });

  it("should fetch random quote when clicking button 'Obtener cita aleatoria' ", async () => {
    const citaRandomButton = await screen.findByRole('button', { name: /Obtener cita aleatoria/i });

    act(async () => {
      await waitFor(() => {
        fireEvent.click(citaRandomButton);
      });
      await waitFor(() => {
        expect(screen.getByText('Inflammable means flammable? What a country!')).toBeInTheDocument();
      });
    });
  });
});

export {};
