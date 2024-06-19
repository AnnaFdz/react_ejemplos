
function ProductItem({name, price, imageUrl, onAddToCart, inCart}) {
//     function onAddToCart() {
//         alert("Agregaste al carrito con exito");
//     }
//     const bold1 ={ fontSize: '20px', fontWeight: 'bold' };
//     const small1 = { fontSize: '16px' };
    
//     return (
//         <div className="box">
            
//             <img src={imageUrl} alt={name} />
//             <p className={bold1}>{name}</p>
//             <p className={small1}> Precio: ${price}</p>
//             <button onClick={onAddToCart}>Agregar a Carrito</button>
           
//         </div>
//     );
// };
// export default ProductItem;
return (
    <div className="card pt-5">
        {!inCart ? (
            <div className="card-image">
                <figure
                    className="image is-128x128"
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </figure>
            </div>
        ) : null}
        <div className="card-content">
            <div className="media">
                {inCart && (
                    <div className="media-left">
                        <figure
                            className="image is-48x48"
                            style={{ overflow: "hidden" }}
                        >
                            <img
                                src={imageUrl}
                                alt={name}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </figure>
                    </div>
                )}
                <div className="media-content">
                    <p className="title is-4">{name}</p>
                    <p className="subtitle is-6">${price}</p>
                </div>
            </div>
            {!inCart && (
                <div className="content">
                    <button
                        className="button is-primary"
                        onClick={onAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    </div>
);
}

export default ProductItem;