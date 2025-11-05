import portal from './portal-rick-and-morty.gif'
import { useEffect, useState } from 'react'
import CardDeJuego from './CardDeJuego'
import { useSelector, useDispatch } from "react-redux";
import festejo from './UKb9.gif'
import { getCharsByGame, reiniciarJuego } from "../redux/action";

const Juego = () => {
    const dispatch = useDispatch();
    const cartasBocaArriba = useSelector((state) => state.cartasBocaArriba);
    const charsByGame = useSelector((state) => state.charsByGame);

    const [cartaSeleccionada, setCartaSeleccionada] = useState([]);

    useEffect(() => {
        if (cartaSeleccionada.length === 2) {
            // Si hacen par, se mantienen dadas vuelta
            const [primera, segunda] = cartaSeleccionada;
            if (primera.id.ide === segunda.id.ide) {
                // Acá podrías actualizar un contador o estado de pares encontrados
            }

            // Vaciar la selección tras 1 segundo (para permitir seguir jugando)
            setTimeout(() => setCartaSeleccionada([]), 1000);
        }
    }, [cartaSeleccionada]);

    const [loading, setLoading] = useState(false);

    const handleBarajar = async () => {
        setLoading(true);
        await dispatch(getCharsByGame());
        setLoading(false);
    };

    const handleReiniciar = () => {
        dispatch(reiniciarJuego());
    };

    const todasLasCartas = charsByGame.length === 12;
    const juegoGanado = cartasBocaArriba.length === 12;

    const BotonPrincipal = () => (
        <button className="botonPrincipal" onClick={todasLasCartas ? handleReiniciar : handleBarajar}>
            {todasLasCartas ? "Reiniciar" : "Barajar"}
        </button>
    );

    if (loading) {
        return (
            <div className="flex flex-col items-center">
                {/* <BotonPrincipal /> */}
                <img src={portal} alt="Cargando..." />
                <p>Cargando personajes...</p>
            </div>
        );
    }

    if (juegoGanado) {
        return (
            <div className="flex flex-col items-center">
                <BotonPrincipal />
                <img className="festejoStyle" src={festejo} alt="festejo" />
                <p>¡Ganaste!</p>
            </div>
        );
    }

    if (!todasLasCartas) {
        return (
            <div className="flex flex-col items-center">
                <BotonPrincipal />
                <p>Presioná “Barajar” para comenzar</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <BotonPrincipal />
            <div className="card-grid grid grid-cols-6 gap-4 margin-top: 4rem">
                {charsByGame.map(({ image, id }) => (
                    <CardDeJuego
                        key={`${id.ide}-${id.key}`}
                        imagenFoto={image}
                        id={id}
                        cartaSeleccionada={cartaSeleccionada}
                        setCartaSeleccionada={setCartaSeleccionada}
                    />
                ))}
            </div>
        </div>
    );
};

export default Juego;