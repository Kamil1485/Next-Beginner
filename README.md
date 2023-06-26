app klasörü dışında routing yaparken page.js yerine index.js kullanılır.
app klasörü içinde örneğin about klasörü ve içerisinde page.js olmalıdır.

module.exports = {
async redirects() {
return [
{
source: '/about', / /about adresine istek geldiğinde anasayfaya / yönlendirme(redirect) işlemi
destination: '/',
permanent: true,
},
]
},
}
async rewrite(){
return[
{source:"/:path\*",
messing:[{type:"header",key:"accessHeader",value:"true"},
],
has:[{type:"cookie",key:"accessToken",value:"3"},],
destination:"/"
},
]
},

server componentte olmana rağmen eğer ul etiketinde bir işlem yapıyorsan bu işlem client componentinde gerçekleşir.
