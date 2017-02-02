<?php
/*
	UserController.php
	author cxworks
	����6:57:41
*/
namespace App\Http\Controllers;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;





class UserController extends BaseController
{

	
	function checkUnique($table,$key,$value) {
	
		$target=DB::table($table)->where($key, $value)->value($key);
		return $target==null;
	
	}
	function json_ok($param) {
		
		return response()->json(['ret'=>'ok','msg'=>$param]);
	}
	function checkLogin($key,$value,$pass) {
		$right=DB::table('users')->where($key,$value)->value('password');
		return $right===$pass;
	}
	/**
	 * check unique
	 * @param Request $request
	 * @return string
	 */
	function checkUsername(Request $request) {
		$check=$_GET['check'];
		switch ($check) {
			case 'phone':
				$phone=$_GET['phone'];
				//call db
				$ans=$this->checkUnique('users',$check,$phone);
				return $this->json_ok($ans);
				break;
			case 'username':
				$username=$_GET['username'];
				//call db
				$ans=$this->checkUnique('users',$check,$username);
				return $this->json_ok($ans);
				
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

		
		
			$phone=$request->input('phonenum');
		
			$username=$request->input('username');
		
		
			$password=$request->input('password');



		
		//call db
		DB::table('users')->insert(['username'=>$username,'phone'=>$phone,'password'=>$password]);


		$r = new HttpRequest('http://localhost:3000/users/addUser', HttpRequest::METH_GET);
		$r->addQueryData(array('phone' => $phone,'password'=>$password));
		try {
			$r->send();
			if ($r->getResponseCode() == 200) {
                return response()->json(['ret'=>'ok','msg'=>"success","bucket"=>$r->getResponseBody()]);
			}
		} catch (HttpException $ex) {
			echo $ex;
		}

		return $this->json_ok('success');
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
				$username=$request->input('username');
				$password=$request->input('password');
				if ($this->checkLogin($method, $username, $password)) {
					return $this->json_ok('success');
				}
				else 
					return $this->json_ok('fail');
				break;
			case 'phone':
				$phone=$request->input('phonenum');
				$password=$request->input('password');
				if ($this->checkLogin($method, $phone, $password)) {
					return $this->json_ok('success');
				}
				else 
					return $this->json_ok('fail');
				break;
			default:
				abort(404);
		}
	}
}


?>
