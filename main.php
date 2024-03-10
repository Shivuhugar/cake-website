<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];
    $message = $_POST['message'];
   
    echo "<h1> THANK YOU FOR YOUR FEEDBACK </h1><br>";
    echo "<table border='1'>";
    echo "<thead>";
    echo "<th>Parameter</th>";
    echo "<th>Value</th>";
    echo "</thead>";
    echo "<tr>";
    echo "<td>Name</td>";
    echo "<td>" . $name . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Email</td>";
    echo "<td>" . $email . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Phone</td>";
    echo "<td>" . $phone . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Message</td>";
    echo "<td>" . $message . "</td>";
    echo "</tr>";
    echo "<tr>";
   
}