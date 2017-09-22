export default function controller($scope){
    $scope.test = 'from controller';

    $scope.body = 'about';

    $scope.changeBody = function(body){
        $scope.body = body;
    }

}