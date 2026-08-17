function validarPassword(password) {

    // Debe tener al menos 8 caracteres
    const longitudValida = password.length >= 8;

    // Debe contener al menos una letra mayúscula
    const tieneMayuscula = /[A-Z]/.test(password);

    // Debe contener al menos un número
    const tieneNumero = /[0-9]/.test(password);

    // Todas las condiciones deben cumplirse
    return longitudValida && tieneMayuscula && tieneNumero;
}

module.exports = validarPassword;