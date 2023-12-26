provider "aws" {
  region = "sa-east-1"
}

data "aws_s3_bucket" "webapp_bucket" {
  bucket = "estelarte-web"
}

resource "aws_s3_bucket" "webapp_bucket" {
  bucket = data.aws_s3_bucket.webapp_bucket.bucket
}
