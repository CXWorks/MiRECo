<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 2017/2/28
 * Time: 23:54
 */

namespace app;


use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $table="projects";
    protected $fillable=['user','title','author','content','state'];
}