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
		
		$info=DB::table('users')->select('username','phone','img','word')->where('phone',$user)->first();
		$interest=DB::table('interest')->select('interest')->where('phone',$user)->get();
		
		return response()->json([$info,$interest]);
	}
	

	/**
	 * 
	 * @param Request $request
	 */
	public function douserinfo(Request $request) {
		$user=$request->input('userphone');
        $img=Input::get('img');
        $word=Input::get('word');
        $interests=Input::get('interest');
        DB::table('users')->where('phone',$user)->update(['img'=>$img,'word'=>$word]);

        DB::table('interest')->where('phone',$user)->delete();
        foreach ($interests as $interest){
            DB::table('interest')->insert(['phone'=>$user,'interest'=>$interest]);
        }
        return 'ok';

    }


	
	

	

	
}


?>