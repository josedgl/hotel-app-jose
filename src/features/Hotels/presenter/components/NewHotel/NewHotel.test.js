import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewHotel from '.';

// mock citiesList
jest.mock('../../../../../main/Utils/Lists/citiesList', () => ({
  citiesList: [
    { id: 1, name: 'Medellín' },
    { id: 2, name: 'Bogotá' },
  ],
}));

describe('NewHotel', () => {

  test('renderiza el formulario', () => {
    render(
      <NewHotel
        onCloseNew={jest.fn()}
        additionalData={jest.fn()}
      />
    );

    expect(screen.getByText('Crear Hotel')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre del Hotel')).toBeInTheDocument();
    expect(screen.getByLabelText('Ciudad')).toBeInTheDocument();
  });

  test('permite escribir el nombre', async () => {
    render(
      <NewHotel
        onCloseNew={jest.fn()}
        additionalData={jest.fn()}
      />
    );

    const input = screen.getByLabelText('Nombre del Hotel');

    await userEvent.type(input, 'Hotel Test');

    expect(input).toHaveValue('Hotel Test');
  });

  test('envía datos al guardar', async () => {
    const mockSave = jest.fn();

    render(
      <NewHotel
        onCloseNew={jest.fn()}
        additionalData={mockSave}
      />
    );

    // escribir nombre
    await userEvent.type(
      screen.getByLabelText('Nombre del Hotel'),
      'Hotel Demo'
    );

    // abrir select
    await userEvent.click(screen.getByLabelText('Ciudad'));

    // elegir ciudad
    await userEvent.click(await screen.findByText('Medellín'));

    // guardar
    await userEvent.click(
      screen.getByRole('button', { name: /guardar/i })
    );

    expect(mockSave).toHaveBeenCalledWith({
      name: 'Hotel Demo',
      city: 1,
    });
  });

});