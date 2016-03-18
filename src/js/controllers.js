var app = angular.module('app', []);

app.controller('TeamController', ['$scope', function ($scope) {
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
	
}]);

app.controller('StepsController', ['$scope', function($scope) {
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
	
	$scope.tips =[{
		title: '1. Escolha um ambiente bem iluminado',
		image: '../img/about/tip1.jpg',
	},{
		title: '2. Opte por planos de fundo claros',
		image: '../img/about/tip2.jpg',
	},{
		title: '3. Se distancie de sua webcam de modo que ela capture seu corpo por completo',
		image: '../img/about/tip3.jpg',
	},{
		title: '4. Se vai dar continuidade a um vídeo que já existe, observe como foi o último passo e tente continuar de onde parou',
		image: '../img/about/tip4.jpg',
	}];
	
		
 	$scope.openTipsModal = function () {
 		$('#tipsModal').modal('show');
 	};
}]);

app.controller('VideosController', ['$scope', function($scope) {
	
	$scope.n = null;
	
	$scope.getCurrentSong = function(n){
		$scope.n = n;
		console.log($scope.songs[n].name);
	};
	
	//teste
	$scope.songs = [{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'Pokerface',
		singer: 'Lady Gaga',
		music: '../song/1/pokerface.mp3',
		image: '../img/grid/imgSong1.jpg',
		time: 42000,
		nextPart: '../song/1/1.mp3',
		parts: [{
			music:"../song/1/1.mp3",
			time: 42000,
			video: null
		},{
			music:"../song/1/2.mp3",
			time: 42000,
			video: null
		},{
			music:"../song/1/3.mp3",
			time: 46000,
			video: null
		}]
	},{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'Chorando Se Foi',
		singer: 'Kaoma',
		music: '../song/2/chorandoSeFoi.mp3',
		image: '../img/grid/imgSong2.jpg',
		time: 34000,
		nextPart: '../song/2/1.mp3',
		parts: [{
			music:"../song/2/1.mp3",
			time: 34000,
			video: null
		},{
			music:"../song/2/2.mp3",
			time: 40000,
			video: null
		},{
			music:"../song/2/3.mp3",
			time: 41000,
			video: null
		}]
	},{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'Figure 8',
		singer: 'FKA Twigs',
		music: '../song/3/figure8.mp3',
		image: '../img/grid/imgSong3.jpg',
		time: 40000,
		nextPart: '../song/3/1.mp3',
		parts: [{
			music:"../song/3/1.mp3",
			time: 40000,
			video: null
		},{
			music:"../song/3/2.mp3",
			time: 48000,
			video: null
		},{
			music:"../song/3/3.mp3",
			time: 45000,
			video: null
		}]
	},{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'Do It',
		singer: 'Cherish',
		music: '../song/4/doIt.mp3',
		image: '../img/grid/imgSong4.jpg',
		time: 52000,
		nextPart: '../song/4/1.mp3',
		parts: [{
			music:"../song/4/1.mp3",
			time: 52000,
			video: null
		},{
			music:"../song/4/2.mp3",
			time: 51000,
			video: null
		},{
			music:"../song/4/3.mp3",
			time: 53000,
			video: null
		}]
	},{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'One Way Or Another',
		singer: 'Blondie',
		music: '../song/5/oneWayOrAnother.mp3',
		image: '../img/grid/imgSong5.jpg',
		time: 46000,
		nextPart: '../song/5/1.mp3',
		parts: [{
			music:"../song/5/1.mp3",
			time: 46000,
			video: null
		},{
			music:"../song/5/2.mp3",
			time: 59000,
			video: null
		}]
	},{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'Preta',
		singer: 'Beto Barbosa',
		music: '../song/6/preta.mp3',
		image: '../img/grid/imgSong6.jpg',
		time: 43000,
		nextPart: '../song/6/1.mp3',
		parts: [{
			music:"../song/6/1.mp3",
			time: 43000,
			video: null
		},{
			music:"../song/6/2.mp3",
			time: 59000,
			video: null
		}]
	},{
		done: false,
		nVideos: 0,
		message: 'Essa música ainda não foi gravada. Seja o primeiro!',
		name: 'Evil Boy',
		singer: 'Die Antword',
		music: '../song/7/evilBoy.mp3',
		image: '../img/grid/imgSong7.jpg',
		time: 28000,
		nextPart: '../song/7/1.mp3',
		parts: [{
			music:"../song/7/1.mp3",
			time: 28000,
			video: null
		},{
			music:"../song/7/2.mp3",
			time: 41000,
			video: null
		},{
			music:"../song/7/3.mp3",
			time: 35000,
			video: null
		},{
			music:"../song/7/4.mp3",
			time: 44000,
			video: null
		}]
	}];
	
	$scope.updateMusic = function(songN, videoSrc){
		console.log($scope.songs[songN].message);
		console.log($scope.songs[songN].nVideos);
		console.log($scope.songs[songN].nextPart);
		var song = $scope.songs[songN]; 
		song.nVideos++;
		
		if(song.nVideos < song.parts.length){
			song.message = 'Esses são os passos que temos para essa música até o momento. Contribua com seus movimentos também!';			
		}
		else if(song.nVideos == song.parts.length){
			song.done = true;
			song.message = 'Que pena, essa música já foi completada :( Mas você pode checar o resultado logo abaixo!';	
		}
		
		for(var i = 0; i < song.parts.length; i++){
			if (song.parts[i].video === null){
				song.parts[i].video = videoSrc;
				
				if(!song.done){
					song.nextPart = song.parts[i+1].music;
					song.time = song.parts[i+1].time;
				}
				console.log($scope.songs[songN].message);
				console.log($scope.songs[songN].nVideos);
				console.log($scope.songs[songN].nextPart);
				console.log($scope.songs[songN]);

				return;
			}
		}
		
	};
	
	$scope.openModalSong = function (song) {
		$('#modalSong' + song).modal('show');
	};
	
	$scope.closeModalSong = function (song) {
    	$('#modalSong' + song).modal('hide');
		var song = document.getElementById('audioInHTML'+song);
		song.pause();
		song.currentTime = 0.0;
	};

    $scope.closeModalVideo = function () {
        $('#videoModal').modal('hide');
        var song = document.getElementById('partSong');
        song.pause();
        song.currentTime = 0.0;
    };
}]);