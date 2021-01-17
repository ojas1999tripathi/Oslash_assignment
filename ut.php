<?php
    require('sqlfetch.php');
    
    if(isset($_POST['tweet_id']) && isset($_POST['tweet'])){
        if(is_numeric($_POST['tweet_id']) && mb_strlen(trim($_POST['tweet'])) > 0){
            $query = mysqli_query($dbc, "UPDATE twitterfeed SET tweet = '".mysql_safe(trim($_POST['tweet']))."' WHERE id=".mysql_safe($_POST['tweet_id']));
            
            if(mysqli_affected_rows($dbc) > 0)
                echo json_encode(array('response' => 'success'));
            else
                echo json_encode(array('response' => 'error', 'result' => 'Could not update your tweet'));
                
        } else {
            echo json_encode(array('response' => 'error', 'result' => 'Invalid Activity'));
        }
    } else {
        echo json_encode(array('response' => 'error', 'result' => 'Invalid Activity'));
    }
    