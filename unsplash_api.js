class UnSplashApi{
    constructor(){
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID wi8o256pwWvE8Ot-sBWEGqqKzRJaFarU2NzmHuDNQhg';
        this.axionNesne = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            },
            params: {
                query : 'animal',
                count : 1
            }
        });
    }

    async randomResimGetir(){
        try{
        const resimResponse = await this.axionNesne.get('/photos/random');
        console.log(resimResponse.data[0].urls.regular);
        return resimResponse.data[0].urls.regular;
        }catch(err){
            console.log(err.response);
            return 'https://bulma.io/images/placeholders/1280x960.png';
        }
    }
}