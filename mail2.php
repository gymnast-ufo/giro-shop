<?php

$recepient = "gymnast-t34@yandex.ru";
$sitename = "Giro shop";

$name2 = trim($_GET["name2"]);
$phone2 = trim($_GET["phone2"]);
$model = trim($_GET["model"]);
$price = trim($_GET["price"]);
$wheel = trim($_GET["wheel"]);
$color = trim($_GET["color"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name2 \nТелефон: $phone2 \nМодель: $model \nЦена: $price \nДиаметр колес: $wheel \nЦвет: $color \n";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>