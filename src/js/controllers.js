var app = angular.module('app', []);

app.controller('TeamController', function ($scope) {
	$scope.teamCC = [{
		name: 'Maysa Macedo',
		course: 'Ciência da Computação',
		image: '../img/team/maysa.jpeg',
		github: 'https://github.com/MaysaMacedo',
		linkedin: 'https://br.linkedin.com/in/maysa-macedo-29094798/en'
	},{
		name: 'Michelly Menezes',
		course: 'Ciência da Computação',
		image:'../img/team/michelly.jpeg',
		github: 'https://github.com/michellymenezes',
		linkedin: 'https://br.linkedin.com/in/martha-michelly-galvão-menezes-8544438b'
	},{
		name: 'Rinaldo Melo',
		course: 'Ciência da Computação',
		image: '../img/team/rinaldo.jpeg',
		github: 'https://github.com/rinaldo7272',
		linkedin: 'https://br.linkedin.com/in/rinaldo-melo-81492198'

	}];
	
	$scope.teamArtArq = [{
		name: 'Layza Lys',
		course: 'Arquitetura e Urbanismo',
		image: '../img/team/layza.jpeg',
		facebook: 'https://www.facebook.com/layza.lys'
	},{
		name: 'Wallisson Carvalho',
		course: 'Arquitetura e Urbanismo',
		image:'../img/team/wallisson.jpeg',
		facebook: 'https://www.facebook.com/wallisson.carvalho.3'
	},{
		name: 'Matheus Fernandes',
		course: 'Arte e Mídia',
		image:'../img/team/matheus.jpeg',
		facebook: 'https://www.facebook.com/m6th66s'
	},{
		name: 'Zilmarc Paulino',
		course: 'Arte e Mídia',
		image: '../img/team/zilmarc.jpeg',
		facebook: 'https://www.facebook.com/zilmarc.paulino'
	}];
	
});

app.controller('StepsController', function($scope) {
	$scope.steps =[{
		title: 'Escolha sua música',
		description: "Let's go? Para começar, escolha uma música da nossa lista abaixo e veja se alguém já enviou uma coreografia e até onde está gravada.",
		image: '../img/about/icon1.jpg',
	},{
		title: 'Contribua',
		description: 'Dê continuidade! Deixe o seu toque na coreografia, grave uma parte dela agora!',
		image: '../img/about/icon2.jpg',
	},{
		title: 'Publique',
		description: 'Pronto! Faça o upload para o site e veja milhares de pessoas se unirem a você em uma só dança!',
		image: '../img/about/icon3.jpg',
	}];
});

app.controller('VideosController', function($scope) {
	//teste
	$scope.videos = [{
		name: 'Pokerface',
		singer: 'Lady Gaga',
		music: '../song/habits.mp3',
		p1: {
				music: '../song/habits.mp3',
				video: '',
				size: 3000
		}	
	}];
});