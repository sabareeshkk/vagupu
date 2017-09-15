myApp.controller('LoginCtrl', LoginCtrl);

/**
@param $log[object] logging information
@param $state[object] state management
@param $http[object] handle http request
*/
function LoginCtrl($log, $state, $http) {
  const vm = this;
  vm.error = false;
  vm.submit = submit;
  
  /**
  @param user[object] user authentication
  used to authenticate user
  */
  function submit(user) {
      $http.get('../users.json')
        .then(resp => resp.data)
        .then(data => {
            return data.filter(item => {
            	return (item.email == user.email) && (item.password == user.password);
            });
        })
        .then(userData => {
        	if(userData.length) 
        	{
        		$log.info('logged in successfully');
                $state.go('home');
        	}
        	else 
        	{
        		$log.error('something wrong');
        		vm.error = true;
        	}
        })
  }
}
