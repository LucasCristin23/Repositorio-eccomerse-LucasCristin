import React, {useState} from 'react'

//---Creo un contexto----Luego este Context lo llamo desde otros componentes
const Context = React.createContext()

//----Todo el provider-----Lo que voy a poder usar desde otros componentes
const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);

    //----Funcion para agregar productos
    const onAdd = (producto, cantidad) => {
        const evitarRepetidos = cart.find((item) => item.id === producto.id);
        if(!evitarRepetidos){
        setCart([...cart , {id: producto.id, img: producto.img, name: producto.name, cantidad:cantidad, subtotal:(producto.precio*cantidad)}]) 
        setTotal( total+ (producto.precio*cantidad));
        setUnidades(unidades + 1);
        }else{
            const cartAux = cart.map((item) => {
                if(item.id === producto.id){
                    item.cantidad += cantidad;
                    item.subtotal += (producto.precio*cantidad);
                };
                return item;
            });
            setCart(cartAux);
            setTotal(total + (producto.precio*cantidad));
        };
        
    };

    //-----Funcion para remover productos
    const onDeleteItem = (id) => {
        const deleteItem = cart.findIndex(p => p.id === id);
        cart.splice(deleteItem,1);
        setCart(cart);
        console.log(cart);
    };

    //----Funcion para vaciar el carrito
    const onClean = () => {
        setCart([]);
        setUnidades(0)
        setTotal(0)
    };

    //---Declaro el provider, donde children seran todos los componentes que usen lo brindado por el context
    return <Context.Provider value={{cart, unidades, total, onAdd, onDeleteItem, onClean }}>
            {children}
           </Context.Provider>
};

export {CartContext, Context};
