<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function show(string $id)
    {
        $ticket = Activity::where('ticket_id', $id)->with('user')->orderBy('id', 'desc')->get();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
