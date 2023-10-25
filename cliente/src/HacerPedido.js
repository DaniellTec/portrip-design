import React, { useState } from 'react';

const App = () => {
  const [correo, setCorreo] = useState('');
  const [vehiculo, setVehiculo] = useState('coche');
  const [objeto, setObjeto] = useState('pequeño');
  const [transportista, setTransportista] = useState('');
  const [puntoInicio, setPuntoInicio] = useState('');
  const [puntoFinal, setPuntoFinal] = useState('');

  // Definir datos de transportistas y precios (simulados)
  const transportistas = {
    coche: ['Transportista 1', 'Transportista 2'],
    furgoneta: ['Transportista 3', 'Transportista 4'],
    caravana: ['Transportista 5', 'Transportista 6'],
  };

  const precios = {
    coche: {
      pequeño: 50,
      mediano: 75,
      grande: 100,
    },
    furgoneta: {
      pequeño: 70,
      mediano: 90,
      grande: 120,
    },
    caravana: {
      pequeño: 90,
      mediano: 110,
      grande: 140,
    },
  };

  const handleVehiculoChange = (e) => {
    setVehiculo(e.target.value);
    setTransportista(''); // Reiniciar la selección de transportista
  };

  const handleTransportistaChange = (e) => {
    setTransportista(e.target.value);
  };

  const handleObjetoChange = (e) => {
    setObjeto(e.target.value);
  };

  const calcularPrecio = () => {
    if (transportista && precios[vehiculo] && precios[vehiculo][objeto]) {
      return precios[vehiculo][objeto];
    }
    return 0; // Precio predeterminado si no se selecciona un transportista o no se encuentra el precio
  };

  return (
    <div>
      <h1>Formulario de Pedido</h1>
      <form>
        <div>
          <label>Correo de Contacto:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label>Donde recoger objetos:</label>
          <input
            type="text"
            value={puntoInicio}
            onChange={(e) => setPuntoInicio(e.target.value)}
          />
        </div>
        <div>
          <label>Donde dejar objetos:</label>
          <input
            type="text"
            value={puntoFinal}
            onChange={(e) => setPuntoFinal(e.target.value)}
          />
        </div>
        <div>
          <label>Vehículo:</label>
          <select value={vehiculo} onChange={handleVehiculoChange}>
            <option value="coche">Coche</option>
            <option value="furgoneta">Furgoneta</option>
            <option value="caravana">Caravana</option>
          </select>
        </div>
        <div>
          <label>Transportista:</label>
          <select
            value={transportista}
            onChange={handleTransportistaChange}
            disabled={!vehiculo}
          >
            <option value="">Selecciona un transportista</option>
            {transportistas[vehiculo].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tipo de Objeto:</label>
          <select value={objeto} onChange={handleObjetoChange}>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <div>
          <p>Precio: {calcularPrecio()} USD</p>
        </div>

      </form>
    </div>
  );
};
export default App;

