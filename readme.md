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
            
        }).controller('UserApi').as('.user').actionsAsName();

    }).as('api').controller('Api')
    
    // set Controller methods as name if no name exists.
    
    .actionsAsName();


module.exports = Router;
```

```console
GET /   [Home@index]
GET /profile    {profile}   [Home@profile]

GET /api    {api.auth}  [Api@auth]
POST /api    {api.login}  [Api@auth]

GET /api/users    {api.users}  [Api@users]

GET /api/user/:user    {api.user}  [UserApi@view]
POST /api/user/:user    {api.user}  [UserApi@update]

POST /api/user/:user/ban    {api.user.ban}  [UserApi@ban]
DELETE /api/user/:user/delete    {api.user.delete}  [UserApi@delete]
```