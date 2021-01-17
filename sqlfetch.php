<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $dbc = @mysqli_connect('localhost', tfeed, oslash@123, twitterdata);
    mysqli_set_charset($dbc, 'utf8');
    
    function mysql_safe($data)
    {
        global $dbc;
        return mysqli_real_escape_string($dbc, $data);
    }