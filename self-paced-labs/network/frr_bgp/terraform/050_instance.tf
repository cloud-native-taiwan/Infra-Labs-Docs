#
# Create instance
#

resource "openstack_compute_instance_v2" "instance_1" {
  depends_on = [openstack_networking_subnet_v2.network_1]
  name        = "instance_1"
  image_name  = var.image
  flavor_name = var.flavor
  key_pair    = "fq_codel-lab-keypair"
  user_data   = file("scripts/instance_1.sh")
  security_groups = ["lab_secgroup"]
  network {
     port = openstack_networking_port_v2.port_1.id
  }
}

resource "openstack_compute_instance_v2" "instance_2" {
  depends_on = [openstack_networking_subnet_v2.network_2]
  name        = "instance_2"
  image_name  = var.image
  flavor_name = var.flavor
  key_pair    = "fq_codel-lab-keypair"
  user_data   = file("scripts/instance_2.sh")
  security_groups = ["lab_secgroup"]
  network {
    port = openstack_networking_port_v2.port_2.id
  }
}

resource "openstack_compute_instance_v2" "router_1" {
  name        = "router_1"
  image_name  = var.image
  flavor_name = var.flavor
  key_pair    = "fq_codel-lab-keypair"
  user_data   = file("scripts/router.sh")
  security_groups = ["lab_secgroup"]
  network {
    port = openstack_networking_port_v2.router_port_1.id
  }
  network {
    port = openstack_networking_port_v2.router_port_2.id
  }
}

# Create floating ip
resource "openstack_networking_floatingip_v2" "fip_1" {
  pool = "public"
}

resource "openstack_networking_floatingip_v2" "fip_2" {
  pool = "public"
}

resource "openstack_networking_floatingip_v2" "fip_3" {
  pool = "public"
}

# Attach floating ip to instance
resource "openstack_compute_floatingip_associate_v2" "fip_1" {
  floating_ip = "${openstack_networking_floatingip_v2.fip_1.address}"
  instance_id = "${openstack_compute_instance_v2.instance_1.id}"
}

resource "openstack_compute_floatingip_associate_v2" "fip_2" {
  floating_ip = "${openstack_networking_floatingip_v2.fip_2.address}"
  instance_id = "${openstack_compute_instance_v2.instance_2.id}"
}

resource "openstack_compute_floatingip_associate_v2" "fip_3" {
  floating_ip = "${openstack_networking_floatingip_v2.fip_3.address}"
  instance_id = "${openstack_compute_instance_v2.router_1.id}"
}
