import {Facebook, FacebookApiException} from 'fb';

const fb = new Facebook(options);
fb.setAccessToken('access_token');


fb.api('4', function (res) {
    if(!res || res.error) {
     console.log(!res ? 'error occurred' : res.error);
     return;
    }
    console.log(res.id);
    console.log(res.name);
  });
