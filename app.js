var movies = [{
        id: 1,
        title: 'Matrix',
        desc: 'Członkowie sekty wmawiają pracownikowi biurowemu, że jest ich mesjaszem.',
        img: 'images/matrix.jpg'

    },
    {
        id: 2,
        title: 'Królewna Śniezka',
        desc: 'Mężczyzna całuje zwłoki przy uciesze siedmiu karłów.',
        img: 'images/krolewnasniezka.jpg'


    },
    {
        id: 3,
        title: 'Opowieści z Narnii',
        desc: 'Dziecko wychodzi z szafy.',
        img: 'images/narnia.jpg'


    },
    {
        id: 4,
        title: 'Uprowadzona',
        desc: 'Tata pojechał odebrać swoją córke.',
        img: './images/taken.jpg'


    },
    {
        id: 5,
        title: 'Koszmar z ulicy wiązów',
        desc: 'Mężczyzna udowadnia dziewczynie że sny się spełniają.',
        img: 'images/krugger.jpg'


    },
    {
        id: 6,
        title: 'Harry Potter',
        desc: 'Pozbawiony nosa mężczyzna ma niezdrową obsesję na punkcie pewnego chłopca.',
        img: 'images/heripota.jpg'


    }
];
var moviesElement = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h1', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img',{src:movie.img})
    );
});
var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmow'),
    React.createElement('ul', {}, moviesElement)
);
console.log(moviesElement);
ReactDOM.render(element, document.getElementById('app'));
