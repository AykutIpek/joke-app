class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io/';
        this.axionNesne = axios.create({
            baseURL : this.baseURL
        });
    }

    async randomSakaGetir(){
        try{
        const sakaResponse = await this.axionNesne.get('/jokes/random');
        console.log(sakaResponse.data.value);
        return sakaResponse.data.value;
        }catch(hata){
            console.log(hata);
        }
    }
}