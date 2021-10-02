export class products{
    static async getData(){
        let response = await fetch("../dataProducts/products.json");
        let request = await response.json();
        return request; 
    }
} 
