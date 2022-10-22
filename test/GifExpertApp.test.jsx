import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente <GigExpertApp />', () => { 

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
     })

     test('Tratar de escribir en el input', () => { 

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Optimus'}});

        expect( input.value ).toBe('Optimus');
       
    })
 })

  