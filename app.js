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
        img: 'images/taken.jpg'


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
var Movie = React.createClass({
    render: function() {
        return React.createElement('li', {},
            React.createElement(MovieTitle, { title: this.props.movie.title }),
            React.createElement(MovieDesc, { desc: this.props.movie.desc }),
            React.createElement(MovieImage, { src: this.props.movie.img })
        );
    },
    propsTypes: {
        movie: React.PropTypes.object.isRequired
    }


});
var MovieTitle = React.createClass({
    render: function() {
        return React.createElement('h1', {}, this.props.title);
    },
    propsTypes: {
        title: React.PropTypes.string.isRequired
    }
});
var MovieDesc = React.createClass({
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    },
    propsTypes: {
        desc: React.PropTypes.string.isRequired
    }
});
var MovieImage = React.createClass({
    render: function() {
        return React.createElement('img', { src: this.props.src });
    },
    propsTypes: {
        src: React.PropTypes.string.isRequired
    }

});
var MovieList = React.createClass({

    render: function() {
      var moviesList = this.props.movieArr.map(function(movie) {
             return React.createElement(Movie, {key: movie.id,movie: movie});
      });
       return React.createElement('ul', {}, moviesList);
    },
    propsTypes: {
      movieArr: React.PropTypes.array.isRequired
    }
});
var element = React.createElement(MovieList, { movieArr: movies });
ReactDOM.render(element, document.getElementById('app'));
