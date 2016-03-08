var app = angular.module('app', []);

app.controller('TeamController', function ($scope) {
	$scope.teamCC = [{
		name: 'Maysa Macedo',
		course: 'Ciência da Computação',
		image: '../img/team/maysa.jpeg'
	},{
		name: 'Michelly Menezes',
		course: 'Ciência da Computação',
		image:'../img/team/michelly.jpeg'
	},{
		name: 'Rinaldo Melo',
		course: 'Ciência da Computação',
		image: '../img/team/rinaldo.jpeg'
	}];
	
	$scope.teamArtArq = [{
		name: 'Layza Lys',
		course: 'Arquitetura e Urbanismo',
		image: '../img/team/layza.jpeg'
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