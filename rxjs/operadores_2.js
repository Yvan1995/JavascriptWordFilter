const { XMLHttpRequest } = require('xmlhttprequest');
const { interval,from,ajax  } = require('rxjs/ajax');
const { map, concatAll } = require('rxjs/operators');
//interval(1000)
//esse metodo itera sobre os elementos do array individualmente.
//from([1,2,3])

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
}).pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repo => repo.full_name)
        //ja com map o retorno é de todos os arrays
        //map(_=>[1,2,3]),
        //concatAll()
    )
    .subscribe(console.log)

