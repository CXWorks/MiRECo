<?php



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});
$app->get('/checkuser', 'UserController@checkUsername');
$app->post('/register', 'UserController@register');
$app->post('/login/{method}', 'UserController@login');
$app->post("/concentrate", 'ConcentrateController@doconcentrate');
$app->get('/concentrate', 'ConcentrateController@getConcentrate');
$app->post('/userinfo', 'UserinfoController@douserinfo');
$app->get('/userinfo', 'UserinfoController@getuserinfo');
$app->post('/upload/img','DocumentController@uploadImage');
$app->post('/upload/html','DocumentController@uploadHtml');
$app->get('/document','DocumentController@getDocument');
$app->get('/document/abstract','DocumentController@getTitle');

$app->post('/project/create','ProjectController@createProject');
$app->get('/project/get','ProjectController@getAllProject');
$app->post('/project/addCollaborator','ProjectController@addCoworker');
$app->get('/project/queryCollaborator','ProjectController@queryCoworker');

$app->post('/p/create','ProjectController@createP');
$app->get('/p/query','ProjectController@queryPByID');
$app->get('/p/delete','ProjectController@delPByID');