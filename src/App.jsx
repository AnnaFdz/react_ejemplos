// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
// import ProductItem from './components/ProductItem'
// import Comment from './components/Comment'
// import Modal from './components/Modal'
// import { useState } from 'react'
// import ProductList from './components/ProductList'
// import productList from './assets/products.json'
import Products from './components/Products'

// function App() {
// const [hide, setHide] = useState(true);
// function handleHide(){
//   if (hide === false) {
//     setHide(true);
//   }
//   setHide(false);
// }
// const products = productList;
//   return (
//       <div className="App">
//         <header className="App-header">
//           <div className='container'>
//             {hide ?(
//           <Modal title={"Bienvenido"} content={"Gracias por visitarnos"} onClose={handleHide} />
//             ):null}
//           </div>
//           <p className='title'>Productos Destacados</p>
//           <ProductList
//           products={products}
//           onAddToCard={(x)=> console.log(x)}
//           />
//           <ProductItem name={"Vite"} price={100} imageUrl={viteLogo}/>
         
          
//           <ProductItem name={"React"} price={200} imageUrl={reactLogo}/>
//           <p className='title'>Comentarios</p>
//           <Comment username={"Juan"} content={"Este es un comentario"} date={"2023-04-01"}/>
//           <Comment username={"Pedro"} content={"Otro comentario"} date={Date.now()} />

//         </header>
//       </div>
//   )
// }

// export default App


function App() {
    return (
        <div className="hero is-fullheight is-flex is-flex-direction-column">
            <div className="container">
                <Products />
            </div>
        </div>
    );
}

export default App;
