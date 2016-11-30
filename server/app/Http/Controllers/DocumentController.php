<?php
/**
 * Created by PhpStorm.
 * User: cxworks
 * Date: 16-11-28
 * Time: 下午11:08
 */

namespace App\Http\Controllers;
require '../vendor/autoload.php';
use App\Document;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Request;

class DocumentController extends Controller

{
    public function __construct()
    {
        Image::configure(array('driver' => 'gd'));
    }

    public function uploadImage(Request $request){
        $img=Image::make(Input::file('photo'));
        $user_phone=Input::get('phone');
        $type='.'.explode('/',$img->mime())[1];
        $img_name=$user_phone.time();
        $img->save('editorimg/'.$img_name.$type);
        return ('/server/editorimg/'.$img_name.$type);
    }

    public function uploadHtml(Request $request){
        $html=Input::get('html');
        $user_phone=Input::get('phone');
        $author=Input::get('author');
        $title=Input::get('title');
        Document::create(['phone'=>$user_phone,'title'=>$title,'author'=>$author,'document'=>$html]);
        $id=DB::table('documents')->select('id')->where('phone',$user_phone)->latest()->first();
        return response()->json($id);
    }

    public function getDocument(Request $request){
        $id=Input::get('id');
        $d=Document::where('id',$id)->first();
        return response()->json($d);
    }

    public function getTitle(Request $request){
        $docs=Document::select('id','title','author')->get();
        return response()->json($docs);
    }
}