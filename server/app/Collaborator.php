<?php
/**
 * Created by PhpStorm.
 * User: cxworks
 * Date: 17-2-22
 * Time: 上午11:19
 */

namespace app;


use Illuminate\Database\Eloquent\Model;

class Collaborator extends Model
{
    protected $table="collaborators";

    protected $fillable=['pname','uid','role'];


}