## Xpresser Router (Xjs)

Router for Xpresser Framework!

```javascript
const Router = new (require('@xpresser/router'))();

Router.get('/', 'Home@index');
Router.get('/profile', 'Home@profile').name('profile');

Router
    .path('/api', () => {
    
        Router.get('', 'auth');
        Router.post('', 'login');
        
        Router.get('@users');
        
        Router.path('user/:user', () => {
            
            Router.get('', 'view');
            Router.post('', 'update');
            
            Router.post('@ban');
            Router.delete('@delete');
            
        }).controller('UserApi').as('user').actionsAsName();

        Router.get('posts', 'PostApi@all').name('posts');
        
        Router.path('post/:post', ()=> {
            
            Router.get('@view');
            Router.delete('@delete');
            
            
        }).controller('PostApi').as('post').actionsAsName();
        
    }).as('api').controller('Api')
    
    // set Controller methods as name if no name exists.
    
    .actionsAsName();


module.exports = Router;
```


| Method | Path | Controller | Name |
| ------ | ---- | ---------- | ---- |
| GET   | /     | HomeController@index |  |
| GET   | /profile  |  HomeController@profile | {profile} |
| GET   | /api  |  ApiController@auth | {api.auth}    |
| POST  | /api  |  ApiController@login | {api.login}   |
| GET   | /api/users    |  ApiController@users | {api.users}   |
| GET   | /api/user/:user   |  UserApiController@view | {api.user}    |
| POST  | /api/user/:user   |  UserApiController@update | {api.user}    |
| POST  | /api/user/:user/ban   |  UserApiController@ban |{api.user.ban}    |
| DELETE    | /api/user/:user/delete    | UserApiController@delete | {api.user.delete} |
| GET    | /api/posts    | PostApiController@all | {api.posts} |
| GET    | /api/post/:post/view    | PostApiController@view | {api.post.view} |
| DELETE    | /api/post/:post/delete    | PostApiController@delete | {api.post.delete} |