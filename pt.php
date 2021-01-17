<?php
    require('sqlfetch.php');
    
    if(isset($_POST['tweet'])){
        if(mb_strlen(trim($_POST['tweet'])) > 0){
            $query = mysqli_query($dbc, "INSERT INTO twitterfeed(tweet) VALUES('".mysql_safe(trim($_POST['tweet']))."')");
            
            if(mysqli_affected_rows($dbc) > 0)
                echo json_encode(array('response' => 'success'));
            else
                echo json_encode(array('response' => 'error', 'result' => 'Could not save your tweet'));
                
        } else {
            echo json_encode(array('response' => 'error', 'result' => 'Please write something before posting'));
        }
    } else {
        echo json_encode(array('response' => 'error', 'result' => 'Invalid Activity'));
    }
    