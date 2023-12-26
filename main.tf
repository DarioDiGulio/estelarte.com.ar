provider "aws" {
  region = "sa-east-1"
}

resource "aws_s3_bucket" "webapp_bucket" {
  bucket = "estelarte-web"
}
