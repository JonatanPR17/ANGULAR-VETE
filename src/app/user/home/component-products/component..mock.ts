export const listProduct : Product[] = [
    {id:1, name:'Ricocan', price: 10 , marca:'vinitapia' },
    {id:2, name:'Perritos', price: 5 , marca:'delis' },
    {id:3, name:'Gatiros', price: 20 , marca:'morochas' },
    {id:4, name:'Pelicos', price: 18 , marca:'miski' },
    {id:5, name:'Leon', price: 18 , marca:'muña' },
    {id:6, name:'Tarantula', price: 18 , marca:'peine' },
    {id:7, name:'Lobo', price: 18 , marca:'papel' },
    {id:8, name:'Araña', price: 18 , marca:'llabe' },
    {id:9, name:'Puercoespin', price: 18 , marca:'correa' },
    {id:10, name:'Aladin', price: 18 , marca:'luis' },
    {id:11, name:'Alibaba', price: 16 , marca:'pedro' },
]

export interface Product{
    id : number | string,
    name : string,
    price : number,
    marca: string
}