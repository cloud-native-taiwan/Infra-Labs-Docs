#### NETWORK CONFIGURATION ####

# Router_1 creation
resource "openstack_networking_router_v2" "router_1" {
  name                = "router_1"
  external_network_id = var.external_network_id
}

# Network_1 creation
resource "openstack_networking_network_v2" "network_1" {
  name = "network_1"
}

# Router_2 creation
resource "openstack_networking_router_v2" "router_2" {
  name                = "router_2"
  external_network_id = var.external_network_id
}

# Network_2 creation
resource "openstack_networking_network_v2" "network_2" {
  name = "network_2"
}



# Subnet_1 configuration
resource "openstack_networking_subnet_v2" "network_1" {
  name            = var.network_1["subnet_name"]
  network_id      = openstack_networking_network_v2.network_1.id
  cidr            = var.network_1["cidr"]
  dns_nameservers = var.dns_ip
}

# Router interface configuration
resource "openstack_networking_router_interface_v2" "router_1" {
  router_id = openstack_networking_router_v2.router_1.id
  subnet_id = openstack_networking_subnet_v2.network_1.id
}

# Subnet_2 configuration
resource "openstack_networking_subnet_v2" "network_2" {
  name            = var.network_2["subnet_name"]
  network_id      = openstack_networking_network_v2.network_2.id
  cidr            = var.network_2["cidr"]
  dns_nameservers = var.dns_ip
}

# Router interface configuration
resource "openstack_networking_router_interface_v2" "router_2" {
  router_id = openstack_networking_router_v2.router_2.id
  subnet_id = openstack_networking_subnet_v2.network_2.id
}

# Instance port creation
resource "openstack_networking_port_v2" "port_1" {
  name           = "port_1"
  network_id     = "${openstack_networking_network_v2.network_1.id}"
  admin_state_up = "true"
  fixed_ip {
    subnet_id = openstack_networking_subnet_v2.network_1.id
    ip_address = "192.168.1.20"
  }
}

resource "openstack_networking_port_v2" "port_2" {
  name           = "port_2"
  network_id     = "${openstack_networking_network_v2.network_2.id}"
  admin_state_up = "true"
  fixed_ip {
    subnet_id = openstack_networking_subnet_v2.network_2.id
    ip_address = "192.168.2.20"
  }
}

resource "openstack_networking_port_v2" "router_port_1" {
  name           = "router_port_1"
  network_id     = "${openstack_networking_network_v2.network_1.id}"
  admin_state_up = "true"
  fixed_ip {
    subnet_id = openstack_networking_subnet_v2.network_1.id
    ip_address = "192.168.1.10"
  }
  allowed_address_pairs {
    ip_address = "0.0.0.0/0"
  }
}

resource "openstack_networking_port_v2" "router_port_2" {
  name           = "router_port_2"
  network_id     = "${openstack_networking_network_v2.network_2.id}"
  admin_state_up = "true"
  fixed_ip {
    subnet_id = openstack_networking_subnet_v2.network_2.id
    ip_address = "192.168.2.10"
  }
  allowed_address_pairs {
    ip_address = "0.0.0.0/0"
  }
}
