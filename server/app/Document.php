<?php
/**
 * Created by PhpStorm.
 * User: cxworks
 * Date: 16-11-28
 * Time: 下午11:24
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $table='documents';
    protected $fillable=['phone','title','author','document'];
}