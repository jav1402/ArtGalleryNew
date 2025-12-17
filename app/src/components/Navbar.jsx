import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

function Navbar() {
    // Estado que guarda si el menú móvil está abierto o cerrado
    // false = cerrado, true = abierto
    const [open, setOpen] = useState(false);

    // Lista de links del menú (para no escribirlos a mano)
    const linkList = [
        { to: "/home", label: "Home" },
        { to: "/artistas", label: "Artistas" },
        { to: "/exposicion", label: "Exposición" },
        { to: "/gallery", label: "Galería" },
        // { to: "/servicios", label: "Servicios" },
    ];

    // Alterna el estado: si estaba cerrado -> abre; si estaba abierto -> cierra
    const toggle = () => setOpen((v) => !v);

    // Cierra el menú (útil al hacer click en un link)
    const close = () => setOpen(false);

    // Efecto que se ejecuta al montar el componente (una sola vez por el [])
    // Objetivo: si el usuario abre el menú en móvil y luego agranda la pantalla a desktop,
    // se cierra automáticamente para evitar estados raros.
    useEffect(() => {
        // Media query que coincide con tu breakpoint de CSS (max-width: 768px)
        const mq = window.matchMedia("(max-width: 768px)");

        // Se llama cuando cambia el resultado de la media query (pasa de match a no-match, o al revés)
        const handleChange = (e) => {
            // Si ya NO es móvil (o sea, pasaste a desktop), cerramos el menú
            if (!e.matches) setOpen(false);
        };

        // Escucha cambios de la media query
        mq.addEventListener("change", handleChange);

        // Cleanup: cuando el componente se desmonta, quitamos el listener
        // (esto evita listeners “colgados”)
        return () => mq.removeEventListener("change", handleChange);
    }, []);

    return (
        <nav className="navbar">
            {/* Parte superior: logo + nombre + botón hamburguesa */}
            <div className="navbar-inner">
                <img
                    className="imglogo"
                    src="src/img/JV/los 4 apostoles logo.png"
                    alt=""
                />

                <div className="brand">Los 4 Apóstoles</div>

                {/* Botón hamburguesa (solo se ve en móvil por CSS)
            aria-controls="mainMenu" -> dice qué elemento controla (el div del menú)
            aria-expanded={open} -> dice si el menú está expandido (true) o colapsado (false)
        */}
                <button
                    type="button"
                    className="hamburger"
                    aria-controls="mainMenu"
                    aria-expanded={open}
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    onClick={toggle}
                >
                    ☰
                </button>
            </div>

            {/* Contenedor del menú:
    - id="mainMenu" para que aria-controls apunte aquí
    - className incluye "is-open" cuando open === true
    - El CSS en móvil hace:
        .nav-links { display:none }
        .nav-links.is-open { display:flex }
      */}
            <div id="mainMenu" className={`nav-links ${open ? "is-open" : ""}`}>
                {linkList.map((l) => (
                    // Link navega a l.to sin recargar
                    // onClick={close} cierra el menú al seleccionar una opción (en móvil)
                    <Link key={l.to} to={l.to} className="nav-link" onClick={close}>
                        {l.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;




// import { Link } from "react-router-dom";

// function Navbar() {
//     const linkList = [
//         { to: "/home", label: "Home" },
//         { to: "/artistas", label: "Artistas" },
//         { to: "/exposicion", label: "Exposición" },
//         { to: "/gallery", label: "Galería" },
//         // { to: "/servicios", label: "Servicios" },
//     ];

//     return (
//         <nav className="navbar">


//             <div className="navbar-inner">
//                 <img className="imglogo" src="src/img/JV/los 4 apostoles logo.png" alt="" />
//                 <div className="brand">Los 4 Apóstoles</div>
//             </div>

//             <div className="nav-links">
//                 {linkList.map(l => (
//                     <Link key={l.to} to={l.to} className="nav-link">
//                         {l.label}
//                     </Link>
//                 ))}
//             </div>
//         </nav>
//     );
// }
// export default Navbar;