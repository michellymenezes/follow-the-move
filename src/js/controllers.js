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
		image:'../img/team/wallisson.jpeg'
	},{
		name: 'Matheus Ramires',
		course: 'Arte e Mídia',
		image:'../img/team/matheus.jpeg'
	},{
		name: 'Zilmark Paulino',
		course: 'Arte e Mídia',
		image: '../img/team/zilmark.jpeg'
	}];
	
});

app.controller('StepsController', function($scope) {
	$scope.steps =[{
		title: 'Escolha sua música',
		description: '',
		image: '../img/about/icon1.jpg',
	},{
		title: 'Contribua',
		description: '',
		image: '../img/about/icon2.jpg',
	},{
		title: 'Publique',
		description: '',
		image: '../img/about/icon3.jpg',
	}];
});

app.controller('VideosController', function($scope) {
	$scope.videos = [];
	
	$scope.createVideo = function(){
		
	};
});