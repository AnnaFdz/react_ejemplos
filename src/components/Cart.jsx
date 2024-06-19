import { useState} from 'react';
import ProductItem  from './ProductItem';
import Modal from './Modal';

function Cart({cartItems =[]}){
    const [hide, setHide] = useState(false);

    function handleHide() {
        if (hide) {
            setHide(false);
        } else {
            setHide(true);
        }
    }
    function getTotalPrice(){
        return cartItems
            .reduce((total, item) => total + item.price, 0)
            .toFixed(2);
    }
    //renderizar el carrito
    return (
        <div className="cart">
            <h1 className="title">Carrito</h1>
            <div className="cart-header columns">
                <div className="column">
                    <p className="subtitle">
                        Total: <strong>${getTotalPrice()}</strong>
                    </p>
                    </div>
                    <div className="column">
                        <button className="button is-primary"  onClick={handleHide}>Comprar</button>
                    </div>
                    </div>
                    <div className="cart-items">
                        {cartItems.map((product, index)=>{
                                <ProductItem
                                key={index}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                inCart={true}
                                
                                />
                        })}
                </div>
                {hide ? (
                <Modal
                    title="Confirmar compra"
                    content={`Su compra es de $ ${getTotalPrice()}`}
                    onClose={handleHide}
                    onAccept={() => console.log("Comprado")}
                />
            ) : null}
            </div>
        
           );

}
export default Cart; 