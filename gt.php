<?php
    require('sqlfetch.php');
    
    $query = mysqli_query($dbc, "SELECT id, tweet, UNIX_TIMESTAMP(post_timestamp) AS post_timestamp FROM twitterfeed ORDER BY id DESC LIMIT 25");
    
    $tweets = array();
    while($query && $result=mysqli_fetch_array($query, MYSQLI_ASSOC)){
        array_push($tweets, array('id'=>$result['id'], 'tweet'=>$result['tweet'], 'time'=>$result['post_timestamp']));
    }
    
    echo json_encode(array('response' => 'success', 'result' => $tweets));