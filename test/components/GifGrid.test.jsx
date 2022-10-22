import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => { 

    const category = "Optimus";
    
    test('debe de mostrar el loading inicialmente ', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        
        render(<GifGrid category={ category }/>);
        expect( screen.getByText( category  ));
        expect( screen.getByText( 'Cargando....'))

     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'bumblebee',
                url: 'https://shows/bumblebee.png'
            },
            {
                id: 'DEG',
                title: 'optimus',
                url: 'https://shows/optimus.png'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        
        
        render(<GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe( 2 );

      })
 })
