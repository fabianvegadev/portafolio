import { useState, useEffect, useLayoutEffect } from 'react';

/** Modo de uso:
 * useMediaQuery('(max-width:420px)')
 */

// Verifica si el DOM está disponible (es decir, si el código se ejecuta en un navegador)
const canUseDom = () => 
    !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Utiliza `useLayoutEffect` si el DOM está disponible, de lo contrario, utiliza `useEffect`
const useSafeLayoutEffect = canUseDom() ? useLayoutEffect : useEffect;

// Hook personalizado para verificar si una consulta de medios coincide
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    // Crea un objeto MediaQueryList basado en la consulta proporcionada
    const mql = window.matchMedia(query);

    // Función que actualiza el estado `matches` cuando la consulta cambia
    const handler = () => { 
        setMatches(mql.matches);
    };
    // Efecto seguro que se ejecuta para añadir y eliminar el listener
    useSafeLayoutEffect(() => {
        // Agrega un listener para cambios en la consulta de medios
        mql.addEventListener('change', handler);
        // Limpieza: elimina el listener cuando el componente se desmonta
        return () => mql.removeEventListener('change', handler);
    }, []); // Dependencias vacías, solo se ejecuta al montar y desmontar

    // Devuelve si la consulta de medios coincide o no
    return matches;
};

export { useMediaQuery };
