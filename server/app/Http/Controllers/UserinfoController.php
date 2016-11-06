<?php
/*
	UserinfoController.php
	author lz 
*/
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

class userinfoController extends Controller
{
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}
	
	public function getuserinfo(Request $request){
		$user=$request->input('userphone');
		
		$info=DB::table('user')->select('username','email','phone','password')->where('phone',$user)->get();
		$interest=DB::table('interest')->select('interest')->where('phone',$user)->get();
		
		return response()->json($info,$interest);
	}
	

	/**
	 * 
	 * @param Request $request
	 */
	public function douserinfo(Request $request) {
		$user=$request->input('userphone');
		
		$info=DB::table('user')->select('username','email','phone','password')->where('phone',$user)->get();
		$interest=DB::table('interest')->select('interest')->where('phone',$user)->get();

		if ($this->updateinfo($user,$info,$interest)) {
			return response()->json(['ret'=>'ok','msg'=>'success']);
		}
		else 
			abort(500);

		}
	}

	
	
	private function updateinfo($user,$tar,$interest){		
		
		DB::table('concentrate')->where('phone',$user)->update(['username','email','phone','password']=>tar);
		DB::table('interest')->where('phone',$user)->update('interest'=>$interest);
		
		return true;
	}
	

	
}


?>