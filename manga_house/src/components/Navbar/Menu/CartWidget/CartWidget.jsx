import Cart from "../../../../img/cart.png";

const CartWidget = () => {
    return ( 
        <div className="nav-item botonCarrito">
            <a> 
                <img src={Cart} alt="Logo de MangaHouse" />
                Carrito (0)
            </a>
        </div>
    );
}

export default CartWidget;
