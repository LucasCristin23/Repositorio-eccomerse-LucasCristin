//----Metodo para que funcione el generador de id
const { v4: uuidv4 } = require('uuid');

//---Creacion de la constructora
class bebida{
    constructor(name,category, precio,id,stock, place, img, mililitros){
        this.name =  name;
        this.category = category;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        this.place = place; 
        this.img = img;
        this.mililitros = mililitros;
    };
};

//----Creacion de los objetos(bebidas)
const fernetBranca = new bebida("Fernet Branca",'fernet', 700, '1', 20, 'home', '/images/fernetBranca1.jpg', 1000);
const malibu = new bebida("Malibu",'ron', 1000, uuidv4(),10, 'home', '/images/malibu.jpg', 750);
const vodkaSkyy = new bebida("Skyy",'vodka',900, uuidv4(),40, 'home', '/images/vodkaSkyy.jpg', 750);
const gancia = new bebida ("Gancia",'otros', 300, uuidv4(), 30, 'home', '/images/gancia.jpg', 950);
const jagermeister = new bebida("Jagermeister",'otros', 2500, uuidv4(), 6, 'home', '/images/jager.jpg', 700);
const fernet1882 = new bebida("Fernet 1882",'fernet', 450, uuidv4(), 15,'home', '/images/plantillaBebidas.jpg',750 );
const chandon = new bebida('Chandon', 'champagne', 900, uuidv4(), 33, 'home', '/images/plantillaBebidas.jpg', 750)
const vodkaSmirnoff = new bebida("Smirnoff",'vodka', 800, uuidv4(), 30, 'home', '/images/plantillaBebidas.jpg', 700);
const frizze = new bebida("Frizze", 'otros',150 ,uuidv4(),50, 'home', '/images/plantillaBebidas.jpg', 750);
const federicoAlvear = new bebida("Federico Alvear", 'champagne', 430, uuidv4(), 60, 'home', '/images/plantillaBebidas.jpg', 750)
const redLabel = new bebida("Red Label",'wisky' ,2000, uuidv4(), 5, 'home', '/images/plantillaBebidas.jpg', 1000);

//Combos
const comboSkyy = new bebida('Skyy + 2 Baggios', 'combos', 1100, uuidv4(), 20, 'home', '/images/plantillaBebidas.jpg', 750)

const bebidas = [];
bebidas.push(fernetBranca,malibu,vodkaSkyy,gancia,jagermeister,fernet1882,chandon,vodkaSmirnoff,frizze,federicoAlvear, redLabel,comboSkyy);

//---Exporto el array de bebidas
export default bebidas; 

//---------Notas
//---Terminar de editar todas las imagenes de las bebidas
//---Cuando tenga mas bebidas agregarle la propiedad categoria
console.log(chandon.id)