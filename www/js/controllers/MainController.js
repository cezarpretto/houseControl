app.controller('MainController', function($scope, $http, $ionicLoading){
	$scope.msg = '';
	var ip = 'http://10.0.0.175:8081/';
	var ipNet = 'http://wirisalves.no-ip.biz:8081/';
	$scope.portao = function(){
		$scope.msg = '';
		$scope.carregando(true);
		$http.get(ip + '?ligar=true').success(function(retorno){
			$scope.msg = 'Comando efetuado com sucesso!';
			$scope.carregando(false);
		}).error(function(erro){
			$http.get(ipNet + '?ligar=true').success(function(retorno){
				$scope.msg = 'Comando efetuado com sucesso!';
				$scope.carregando(false);
			}).error(function(erro){
				$scope.msg = 'Erro de rede!';
				$scope.carregando(false);
			});
		});
	};

	$scope.porta = function(){
		$scope.msg = '';
		$scope.carregando(true);
		$http.get(ip + '?porta1=true').success(function(retorno){
			$scope.msg = 'Comando efetuado com sucesso!';
			$scope.carregando(false);
		}).error(function(erro){
			$http.get(ipNet + '?porta1=true').success(function(retorno){
				$scope.msg = 'Comando efetuado com sucesso!';
				$scope.carregando(false);
			}).error(function(erro){
				$scope.msg = 'Erro de rede!';
				$scope.carregando(false);
			});
		});
	};


	$scope.carregando = function(c){
		if(c === true){
			$ionicLoading.show({
				template: 'Carregando...'
			});
		}else{
			$ionicLoading.hide();
		}
	};
});