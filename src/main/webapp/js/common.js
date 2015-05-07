$('#facebook-login').on('click', function(e) {
	FB.login(function(response) {
		if (response.authResponse) {
			console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', function(response) {
				FB.api(response.id + '/picture?type=large', function(response) {
					if (response && !response.error) {
						console.log(response.data.url);
						$('#facebook-profile-img').attr('src', response.data.url);
						$('#facebook-profile-img').show();
					}
				});

				console.log(response);
				console.log('Good to see you, ' + response.name + '.');
			});
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {
		scope : 'email,user_likes,user_friends'
	});
});

$('#facebook-logout').on('click', function(e) {
	FB.logout(function(response) {
		$('#facebook-profile-img').attr('src', '');
		$('#facebook-profile-img').hide();
	});
});

$('#vk-login').on('click', function(e) {
	VK.Auth.login(function(response) {
		if (response.session) {
			VK.Api.call('users.get', {user_ids: response.session.mid, fields: 'photo_max'}, function(r) {
				if(r.response) {
					console.log(r.response[0]);
					$('#vk-profile-img').attr('src', r.response[0].photo_max);
					$('#vk-profile-img').show();
				}
			});
			
			console.log('user: '+response.session.mid);
		} else {
			console.log('not auth');
		}
	}, 4);
});

$('#vk-logout').on('click', function(e) {
	VK.Auth.logout(function(response) {
		$('#vk-profile-img').attr('src', '');
		$('#vk-profile-img').hide();
	});
});
