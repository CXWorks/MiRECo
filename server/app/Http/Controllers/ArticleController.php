<?php
/**
 * Created by PhpStorm.
 * User: LZ
 * Date: 2017/2/28
 * Time: 23:19
 */

namespace app\Http\Controllers;


use app\Article;
use app\Conment;
use Illuminate\Support\Facades\Request;

class ArticleController extends Controller
{

    public function createArticle(Request $request){
        $id=$request->input('id');
        $title=$request->input('title');
        $author=$request->input('author');
        $content=$request->input('content');
        $state='normal';
        Article::create(['id'=>$id,'title'=>$title,'author'=>$author,'content'=>$content,'state'=>$state]);
        return response()->json("success");
    }
    public function getAllArticle(Request $request){

        $all=Article::all();
        return response()->json($all);
    }

    public function createComment(Request $request){
        $id=$request->input('id');
        $article=$request->input('article');
        $author=$request->input('author');
        $content=$request->input('content');
        $state='normal';
        Conmment::create(['id'=>$id,'article'=>$article,'author'=>$author,'content'=>$content,'state'=>$state]);
        return response()->json("success");
    }
    
}