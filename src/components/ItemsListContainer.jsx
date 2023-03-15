const Productos = () => {
    return (
        <main className="mainProductos container">
            <div className="TextoIndex">
                <p>Somos una Marca de Ropa Streetwear que recien comienza con el fin de hacer ropa del estilo Oversize
                    Unisex.
                </p>
            </div>
            <div id="coincidencia" className="mainMercado"></div>
            <section className="mainMercado" id="inicioMercado">
                 <div className="productos">
                    <img src="./Assets/imagenes/buzo2.png"
                        className="ropa" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana"/>
                    <h3 className="productoText">Buzo black</h3>
                    <span itemprop="price">$5000</span>
                </div>
                <div className="productos">
                    <img src="./Assets/imagenes/Remera.png"
                        className="ropa" alt="remera negra 100% algodon" title="Remera negra 100% algodon"/>
                    <h3 className="productoText">Remera RT</h3>
                    <span itemprop="price">$5000</span>
                </div>
                <div className="productos">
                    <img src="./Assets/imagenes/buzo3.png"
                        className="ropa" alt=" buzo gris fria liviana" title="Buzo gris fria liviana"/>
                    <h3 className="productoText">Buzo Monitor</h3>
                    <span itemprop="price">$5000</span>
                </div>
                <div className="productos">
                   <img src="./Assets/imagenes/Remera3.png"
                        className="ropa" alt="remera blanca 100% algodon" title="Remera blanca 100% algodon"/>
                    <h3 className="productoText">Remera ST</h3>
                    <span itemprop="price">$5000</span>
                </div>
                <div className="productos">
                    <img src="./Assets/imagenes/buzo4.png"
                        className="ropa" alt=" buzo negra fria liviana" title="Buzo negra fria liviana" />                <h3 class="productoText">Buzo Meteorite</h3>
                    <span itemprop="price">$5000</span>
                </div>
                <div className="productos">
                    <img
                        src="./Assets/imagenes/Remera-Negra-logomedio.png" className="ropa" alt="remera negra 100% algodon"
                        title="Remera negra 100% algodon" />
                    <h3 classNameName="productoText">Remera JK</h3>
                    <span itemprop="price">$5000</span>
                </div>

            </section>

        </main>
    )
}

export default Productos;