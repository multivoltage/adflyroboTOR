#!/bin/sh
(echo authenticate '"stupid_password"'; echo signal newnym; echo quit) | nc localhost 9151
IP=`curl -s --socks5-hostname 127.0.0.1:9050 http://www.showmyip.gr|grep "Your IP is"|awk -F" " '{print $5}'`
echo "\nYour new IP address is: $IP"
