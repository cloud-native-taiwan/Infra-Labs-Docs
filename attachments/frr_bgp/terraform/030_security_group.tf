resource "openstack_networking_secgroup_v2" "lab_secgroup" {
  name        = "lab_secgroup"
  description = "Security Group for FQ_CODEL Lab"
}

resource "openstack_networking_secgroup_rule_v2" "ssh" {
  direction = "ingress"
  ethertype = "IPv4"
  description = "Open input ssh port"
  protocol = "tcp"
  port_range_min = 22
  port_range_max = 22
  remote_ip_prefix  = "0.0.0.0/0"
  security_group_id = "${openstack_networking_secgroup_v2.lab_secgroup.id}"
}

resource "openstack_networking_secgroup_rule_v2" "bgp" {
  direction = "ingress"
  ethertype = "IPv4"
  description = "Open input bgp port"
  protocol = "tcp"
  port_range_min = 179
  port_range_max = 179
  remote_ip_prefix  = "0.0.0.0/0"
  security_group_id = "${openstack_networking_secgroup_v2.lab_secgroup.id}"
}


resource "openstack_networking_secgroup_rule_v2" "icmp" {
  direction = "ingress"
  ethertype = "IPv4"
  description = "Open input icmp"
  protocol = "icmp"
  remote_ip_prefix  = "0.0.0.0/0"
  security_group_id = "${openstack_networking_secgroup_v2.lab_secgroup.id}"
}
