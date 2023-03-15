const NavBar =()=>{
    return(
        <nav className="links nav">

            <div className="logo">

                <a href="./index.html" title="Imagen logo"> <img src="./Assets/imagenes/Envy (2).png" class="imgLogo"
                        alt="Imagen logo" title="Img logo"/></a>

            </div>

        
            <ul class="nav nav-pills d-flex flex-row">
                <li class="nav-item">
                    <a class="nav-link underline-hover" aria-current="page" href="./index.html" title="Incio">Inicio</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle underline-hover" href="#" title="Productos" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./Pages/remeras.html">Remeras</a></li>
                        <li><a class="dropdown-item" href="./Pages/buzos.html">Buzos</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./Pages/contacto.html" title="Contacto">Contacto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./Pages/envios.html" title="Envios">Envios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./Pages/faqs.html" title="Faqs">FAQs</a>
                </li>
            </ul>

            <h1 class="paginaActual">Inicio</h1>
        </nav>
    )
}

export default NavBar;