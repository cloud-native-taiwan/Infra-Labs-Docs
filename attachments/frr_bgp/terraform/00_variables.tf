# Params file for variables

#### GLANCE
variable "image" {
  type    = string
  default = "Ubuntu-22.04"
}

#### NEUTRON
variable "external_network" {
  type    = string
  default = "public"
}

# UUID of external network
variable "external_network_id" {
  type    = string
  default = "7d304522-1456-4aef-b953-c9775e3064f6"
}

variable "dns_ip" {
  type    = list(string)
  default = ["9.9.9.9", "8.8.4.4"]
}

#### VM parameters
variable "flavor" {
  type    = string
  default = "m1.small"
}

variable "network_1" {
  type = map(string)
  default = {
    subnet_name = "subnet-1"
    cidr        = "192.168.1.0/24"
  }
}

variable "network_2" {
  type = map(string)
  default = {
    subnet_name = "subnet-2"
    cidr        = "192.168.2.0/24"
  }
}
