import { act, cleanup, render, screen, findByRole } from '../../../__test__/test-utils';
import { waitFor, fireEvent } from '@testing-library/react';
import Cita from '../../quote/__test__/Cita';
// import { server } from '../../../__test__/server/server';
// import { rest } from 'msw';
// import { API_URL } from '../../../app/constants';
// import {  mockResponse, mockResponseLisaSimpson } from '../../../__test__/mocks/mock';

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
        expect(screen.getByText("Hey, I'm the chief here. Bake him away, toys.")).toBeInTheDocument();
      });
        const quote = await screen.findByText("Hey, I'm the chief here. Bake him away, toys.");
        const author = await screen.findByText('Chief Wiggum');

        expect(quote).toBeInTheDocument();
        expect(author).toBeVisible();
    });
  });

// it("should fetch character's quote when submitting a character name by clicking button 'Obtener cita' ", async () => {
//     const citaRandomButton = await screen.findByRole('button', { name: /Obtener cita/i });

//     act(() => {
//       server.use(
//         rest.get(`${API_URL}?character=Lisa Simpson`, (req, res, ctx) => {
//           return res(ctx.status(200), ctx.json(mockResponseLisaSimpson));
//         })
//       );
//       fireEvent.click(citaRandomButton);
//     });

//     const quote = await screen.findByText(
//       "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will."
//     );
//     const author = await screen.findByText('Lisa Simpson');

//     expect(quote).toBeInTheDocument();
//     expect(author).toBeVisible();
//   });

});
export {};






