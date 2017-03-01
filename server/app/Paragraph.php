<?php
/**
 * Created by PhpStorm.
 * User: cxworks
 * Date: 17-3-1
 * Time: 上午12:34
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Paragraph extends Model
{

    protected $table='paragraphs';
    protected $fillable=['author','title','url'];
}