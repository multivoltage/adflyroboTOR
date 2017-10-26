(echo authenticate '"stupid_password"'; echo signal newnym; echo quit) | nc localhost 9151
IP=`curl -s --socks5-hostname 127.0.0.1:9050 ipinfo.io/ip`
echo "$IP"
