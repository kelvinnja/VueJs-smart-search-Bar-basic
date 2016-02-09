<?php
    namespace App\Http\Controllers;
    use App\User;
    use Illuminate\Http\Request;
    use App\Http\Requests;
    
     class ApiController extends Controller
    {
      public function userSearch($name, Request $request)
        {
          if($request->ajax())
          abort(401);
          //select('name') is for minimize data transfer via ajax
            return User::where('name', 'like', '%'.$name.'%')->select('name')->get()->take(10)->toJson;
        }
    
    }
