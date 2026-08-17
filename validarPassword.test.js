const validarPassword = require('./validarPassword');

describe('Pruebas de validarPassword', () => {

    test('Contraseña válida', () => {
        expect(validarPassword('Clave123')).toBe(true);
    });

    test('Contraseña muy corta', () => {
        expect(validarPassword('Cla1')).toBe(false);
    });

    test('Contraseña sin mayúscula', () => {
        expect(validarPassword('clave123')).toBe(false);
    });

    test('Contraseña sin número', () => {
        expect(validarPassword('ClaveSegura')).toBe(false);
    });

    test('Contraseña vacía', () => {
        expect(validarPassword('')).toBe(false);
    });

});