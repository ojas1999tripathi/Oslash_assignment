<?php
    require('sqlfetch.php');
    
    if(isset($_POST['tweet_id'])){
        if(is_numeric($_POST['tweet_id'])){
            $query = mysqli_query($dbc, "DELETE FROM twitterfeed WHERE id=".mysql_safe($_POST['tweet_id']));
            
            if(mysqli_affected_rows($dbc) > 0)
                echo json_encode(array('response' => 'success'));
            else
                echo json_encode(array('response' => 'error', 'result' => 'Could not delete your tweet'));
                
        } else {
            echo json_encode(array('response' => 'error', 'result' => 'Invalid Activity'));
        }
    } else {
        echo json_encode(array('response' => 'error', 'result' => 'Invalid Activity'));
    }
    