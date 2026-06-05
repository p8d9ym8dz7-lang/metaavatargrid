variable "domain_name" {
  description = "Root domain for the MetaAvatarGrid website."
  type        = string
  default     = "metaavatargrid.com"
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID for metaavatargrid.com."
  type        = string
  default     = "Z01794691Y932GZ4TKRBY"
}

variable "project_name" {
  description = "Project name used for resource naming."
  type        = string
  default     = "metaavatargrid"
}
