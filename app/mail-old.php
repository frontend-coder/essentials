<?php

$recepient = "frontendercode@gmail.com";
$sitename  = "Сайт https://frontend-coder.github.io/";
$subject   = "Заказ с сайта https://frontend-coder.github.io/";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subgect = trim($_POST["subgect"]);
$perssonmessage = trim($_POST["message"]);



if(isset($_POST['formEgreeMent']) &&
   $_POST['formEgreeMent'] == 'Yes')
{
  $checkbox = "Согласен.";
}
else {
    $checkbox ="Не согласен.";
}

$message = "
Имя обратившегося: $name <br>
Почтовый ящик клиента: $email <br>
Тема сообщения: $subgect <br>
Текст сообщения: $perssonmessage <br>
Подтверждение: $checkbox";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $subject, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
?>