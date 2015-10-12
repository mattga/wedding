<?php 
// $connection = new MongoClient(); // localhost:27017
$connection = new MongoClient('mongodb://heroku_flt2tbwz:22q6vl8p643tclvjoc0klnb6g8@ds035844.mongolab.com:35844/heroku_flt2tbwz'); // Heroku MongoDB
$db = $connection->heroku_tp7mzb83;
$rsvps = $db->rsvp;
$emails = $db->invite_emails;

$htmlBegin = '<html><body><div style="width: 100%; overflow: hidden;">';

$cursor = $emails->find();
$inviteEmails = '<div style="width: 300px; float: left;"><b>Invite Emails</b>';
foreach ($cursor as $document) {
    $inviteEmails = $inviteEmails . '<br>' . $document["email"];
}
$inviteEmails = $inviteEmails . '</div>';

$cursor = $rsvps->find();

$yesRSVPs = '<div style="margin-left: 320px;"><b>YES</b><br><table><tr><td><b>email</b></td><td><b>names</b></td><td><b>msg</b></td></tr>';
$noRSVPs = '<br><br><b>NO</b><br><table><tr><td><b>email</b></td><td><b>names</b></td><td><b>msg</b></td></tr>';
foreach ($cursor as $document) {
    $str = '<tr>';
    $str = $str . '<td>' . $document["email"] . '</td>';
    $str = $str . '<td>' . $document["names"] . '</td>';
    $str = $str . '<td>' . $document["msg"] . '</td>';
    $str = $str . '</tr>';

    if ($document["rsvp"] == "1") {
        $yesRSVPs = $yesRSVPs . $str;
    } else {
        $noRSVPs = $noRSVPs . $str;
    }
}
$yesRSVPs = $yesRSVPs . '</table>';
$noRSVPs = $noRSVPs . '</table></div>';


echo $htmlBegin . $inviteEmails . $yesRSVPs . $noRSVPs . '</div></body></html>';

?>