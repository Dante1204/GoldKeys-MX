// Controlador básico de autenticación (puedes expandirlo)
exports.login = async (req, res) => {
    try {
      // Lógica de autenticación
      res.json({ message: 'Login exitoso' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  exports.register = async (req, res) => {
    try {
      // Lógica de registro
      res.status(201).json({ message: 'Usuario registrado' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };