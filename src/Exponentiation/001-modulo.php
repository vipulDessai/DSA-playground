<?php

$num = '2';
$power = '1000000';
$result = $num;
for (let $i = 0; $i < $power; $i++ ) {
    $result = (string) ((int) $result * (int) $num);
}
echo $result