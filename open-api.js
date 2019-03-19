const headers = {"X-RapidAPI-Key": "a2be6da4c0mshbbdec467b737b20p11a67ejsnd67a8ceb8a48"};
const resp$ = rxjs.ajax.ajax.getJSON(`https://restcountries-v1.p.rapidapi.com/all`, headers);

  resp$
    .subscribe(resp => console.log(resp), (error) => console.log(error))
