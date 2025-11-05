import { useEffect,useState } from 'react';
import imagen from './tapaCarta.jpeg'

const CardDeJuego = ({ imagenFoto, id, cartaSeleccionada, setCartaSeleccionada }) => {
  const [bocaArriba, setBocaArriba] = useState(false);

  const voltear = () => {
    // Evita voltear más de dos cartas a la vez
    if (bocaArriba || cartaSeleccionada.length === 2) return;

    setBocaArriba(true);
    setCartaSeleccionada((prev) => [...prev, { id, imagenFoto }]);
  };

  // Efecto para voltear las cartas que no hacen par
  useEffect(() => {
    if (cartaSeleccionada.length === 2) {
      const [primera, segunda] = cartaSeleccionada;
      // Si no hacen par, las giramos después de 1s
      if (primera.id.ide !== segunda.id.ide) {
        setTimeout(() => {
          if (bocaArriba && (id.ide === primera.id.ide || id.ide === segunda.id.ide)) {
            setBocaArriba(false);
          }
        }, 1000);
      }
    }
  }, [cartaSeleccionada]);

  return (
    <div onClick={voltear}>
      <img
        className="cardJuegoStyle"
        src={bocaArriba ? imagenFoto : imagen}
        alt="carta"
      />
    </div>
  );
};

export default CardDeJuego;