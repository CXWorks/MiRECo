<?php
/*
	UserController.php
	author cxworks
	下午6:57:41
*/
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class UserController extends BaseController
{
	/**
	 * 检查用户名、手机号是否被注册
	 * @param Request $request
	 * @return string
	 */
	function checkUsername(Request $request) {
		$check=$_GET['check'];
		switch ($check) {
			case 'phone':
				$phone=$_GET['phone'];
				//call db
				return $check.$phone;
				break;
			case 'username':
				$username=$_GET['username'];
				//call db
				return $check.$username;
				break;
			
			default:
				abort(404);
		}
	}
	/**
	 * user register
	 * @param Request $request
	 * @return string
	 */
	function register(Request $request) {
		$phone=$_POST['phonenum'];
		$username=$_POST['username'];
		$password=$_POST['password'];
		//call db
		return $phone.' '.$password.' '.$username;
	}
	/**
	 * user login
	 * @param Request $request
	 * @param unknown $method
	 * @return string
	 */
	function login(Request $request,$method) {
		switch ($method) {
			case 'username':
				$username=$_POST['username'];
				$password=$_POST['password'];
				//call db
				return 'use username';
				break;
			case 'phone':
				$phone=$_POST['phone'];
				$password=$_POST['password'];
				//call db
				return  'use phone';
				break;
			default:
				abort(404);
		}
	}
}


?>
