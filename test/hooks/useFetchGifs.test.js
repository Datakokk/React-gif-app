import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook "useFetchGifs" ', () => { 

    test('debe de regresar el estado inicial del hook', () => { 

        const { result } = renderHook(() => useFetchGifs( 'Optimus' ));
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
     });

    test('debe de retornar un arreglo de imagenes e isLoading en false', async () => { 

        const { result } = renderHook(() => useFetchGifs('Optimus'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );

        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

    });
 });

