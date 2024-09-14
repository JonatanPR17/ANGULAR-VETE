export const serviceList : Service[] = [
    {id:1 , name:"Vacunas", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.', imageUrl: ['image/VACUNA.jpg']},
    {id:2 , name:"Cirugias", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' , imageUrl: ['image/CIRUGIAS.jpeg']},
    {id:3 , name:"Farmacia", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' , imageUrl: ['image/FARMACIA.jpeg']},
    {id:4 , name:"Analisis Clinico", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' , imageUrl: ['image/ANALISISCLINICO.jpg']},
    {id:5 , name:"Tratamientos", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' , imageUrl: ['image/TRATAMIENTO.jpg']},
    {id:6, name:"Consultas", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' , imageUrl: ['image/CONSULTAS.jpg']},
    /* {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' } */
    
]

export interface Service{
    id : number ,
    name : string ,
    activities : string[],
    description : string,
    imageUrl: string[];
}