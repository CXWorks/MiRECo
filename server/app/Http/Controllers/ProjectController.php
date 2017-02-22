<?php
/**
 * Created by PhpStorm.
 * User: cxworks
 * Date: 17-2-22
 * Time: 上午11:34
 */

namespace app\Http\Controllers;


use app\Collaborator;
use app\Project;
use Illuminate\Support\Facades\Request;

class ProjectController extends Controller
{

    public function createProject(Request $request){
        $user=$request->input('userphone');
        $name=$request->input('name');
        $description=$request->input('description');
        $state='doing';
        Project::create(['name'=>$name,'author'=>$user,'description'=>$description,'state'=>$state]);
        return response()->json("success");
    }
    public function getAllProject(Request $request){

        $all=Project::all();
        return response()->json($all);
    }

    public function addCoworker(Request $request){
        $user=$request->input('userphone');
        $name=$request->input('name');
        $role=$request->input('role');
        $col=Collaborator::where('pname',$name)->where('uid',$user)->first();
        if ($col==null){
            Collaborator::create(['pname'=>$name,'uid'=>$user,'role'=>$role]);
        }
        else{
            $col->role=$role;
            $col->save();
        }
        return response()->json('ok');
    }

    public function queryCoworker(Request $request){
        $name=$request->input('name');
        $col=Collaborator::where('pname',$name)->all();
        return response()->json($col);
    }


}