type Product = {
    title: string,
    price: number
};

// dados para simular informações do banco
const data: Product[] = [
    { title: 'Produto X', price: 10 },
    { title: 'Produto Y', price: 15 },
    { title: 'Produto W', price: 20 }
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};



