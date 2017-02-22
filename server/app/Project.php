<?php
/**
 * Created by PhpStorm.
 * User: cxworks
 * Date: 17-2-22
 * Time: 上午11:12
 */

namespace app;


use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $table="projects";
    protected $fillable=['name','author','description','state'];
}