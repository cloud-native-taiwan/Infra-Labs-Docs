#!/bin/bash

sudo apt update
curl -s https://deb.frrouting.org/frr/keys.asc | sudo apt-key add -
FRRVER="frr-stable"

# FRR Repo not support Ubuntu Jammy (22.04)
if [ $(lsb_release -s -c) != "jammy" ]
then
    echo deb https://deb.frrouting.org/frr $(lsb_release -s -c) $FRRVER | sudo tee -a /etc/apt/sources.list.d/frr.list
fi
sudo apt update -y && sudo apt install -y frr frr-pythontools mtr

echo "
net.ipv4.conf.all.forwarding = 1
net.ipv6.conf.all.disable_ipv6 = 0
net.ipv6.conf.default.disable_ipv6 = 0
net.ipv6.conf.lo.disable_ipv6 = 0
net.ipv6.conf.default.forwarding = 1
net.ipv6.conf.all.forwarding = 1
net.ipv6.conf.all.proxy_ndp = 1
net.ipv6.conf.all.accept_ra = 2
" | sudo tee -a /etc/sysctl.conf

sudo sysctl -p

sudo sed -i "s/=no/=yes/g" /etc/frr/daemons
service frr restart