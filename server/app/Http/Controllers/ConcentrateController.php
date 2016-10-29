<?php
/*
	ConcentrateController.php
	author cxworks
	ÏÂÎç2:18:52
*/
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

class ConcentrateController extends Controller
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
	
	public function getConcentrate(Request $request){
		$user=$request->input('userphone');
		$tar=DB::table('concentrate')->select('target','date')->where('source',$user)->get();
		return response()->json($tar);
	}
	
	/**
	 * 
	 * @param Request $request
	 */
	public function doconcentrate(Request $request) {
		$method=$request->input('method');
		switch ($method){
			case 'concentrate':
				if ($this->addcon($request->input('sourceUserphone'), $request->input('targetUserphone'))) {
					return response()->json(['ret'=>'ok','msg'=>'success']);
				}
				else 
					abort(500);
			case 'cancelconcentrate':
				if ($this->delcon($request->input('sourceUserphone'), $request->input('targetUserphone'))) {
					return response()->json(['ret'=>'ok','msg'=>'success']);
				}
				else
					abort(500);
			default:
				abort(404);
		}
	}
	
	
	private function addcon($source,$target){
		$now=date("Y-m-d H:i:s");
		
		
		DB::table('concentrate')->insert(['source'=>$source,'target'=>$target,'date'=>$now]);
		return true;
	}
	
	private function delcon($source,$target){
		DB::table('concentrate')->where([['source',$source],['target',$target]])->delete();
		return true;
	}
	
}


?>
