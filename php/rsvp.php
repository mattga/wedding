<?php 

$rsvp = $_POST['rsvp'];
$email = $_POST['email'];
$names = $_POST['names'];
$msg = $_POST['msg'];

// $connection = new MongoClient(); // localhost:27017
$connection = new MongoClient('mongodb://heroku_flt2tbwz:22q6vl8p643tclvjoc0klnb6g8@ds035844.mongolab.com:35844/heroku_flt2tbwz'); // Heroku MongoDB
$db = $connection->heroku_tp7mzb83;
$rsvps = $db->rsvp;
$emails = $db->invite_emails;

$validEmail = $emails->findOne(array("email" => $email));

if (!$validEmail) {
    echo "invalid email";
} else {
    $document = array( "rsvp" => $rsvp, "email" => $email, "names" => $names, "msg" => $msg );
    $rsvps->insert($document);

    echo "success";
}

?>