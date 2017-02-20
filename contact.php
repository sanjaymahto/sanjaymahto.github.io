<?php
    error_reporting(0);
    if(isset($_POST['submit'])){
        $subject = $_POST['subject'];
        $subject = mysqli_real_escape_string($con,$name);
        $subject = strip_tags($name);
        
        $email = $_POST['email'];
        $email = mysqli_real_escape_string($con,$email);
        $email = strip_tags($email);
        $regex_email = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/";
        if (!preg_match($regex_email, $email))
        {
            $m = "<span style='color: red;'>Enter a valid Email Id</span>";
            header('location:index.php?m1='.$m);
            exit;
        }
        
        $message = $_POST['message'];
        $message = mysqli_real_escape_string($con,$message);
        $message = strip_tags($message);
        mail("mahto.sanjay41@gmail.com",$subject , $message);
        $m1= "<span style='color: white;'>Thank You!</span>";
        header('location:index.php?m2='.$m1);
        
    }
?>