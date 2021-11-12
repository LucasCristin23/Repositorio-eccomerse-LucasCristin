import React, {useState} from 'react'

//---Creo un contexto----Luego este Context lo llamo desde otros componentes
const Context = React.createContext()

//----Todo el provider-----Lo que voy a poder usar desde otros componentes
const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);

    const onAdd = (producto, cantidad) => {
        const evitarRepetidos = cart.find((item) => item.id === producto.id);
        if(!evitarRepetidos){
        setCart(...cart , {id: producto.id, name: producto.name, cantidad:cantidad, subtotal:(producto.precio*cantidad)}) 
        setTotal( total+ (producto.precio*cantidad));
        }else{
            const cartAux = cart.map((item) => {{
                if(item.id === producto.id){
                    item.cantidad += cantidad;
                    item.subtotal += (producto.precio*cantidad);
                };
                return item;
            }});
            setCart(cartAux);
            setTotal(total + (producto.precio*cantidad));
        };
        
    };


    //---Declaro el provider, donde children seran todos los componentes que usen lo brindado por el context
    return <Context.provider value={{cart, unidades, total, onAdd}}>
            {children}
           </Context.provider>
};

export {CartContext, Context};
