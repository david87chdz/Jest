import { mayorEdad } from "../components/ParentalCard.jsx";

describe('Test de pruebas para comenzar con Jest', () => {
    
    describe('Test para las pruebas de la función mayorEdad', () => {

        test('debe devolver un booleano', () => {
       
            expect(typeof mayorEdad(19)).toBe('boolean')
        })

        test('debe devolver true', () => {
            expect(mayorEdad(18)).toBeTruthy()
        })
    })
})