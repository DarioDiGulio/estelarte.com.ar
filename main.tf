provider "aws" {
  region = "sa-east-1"
}

resource "aws_s3_bucket" "webapp_bucket" {
  bucket = "estelarte-web"
}

resource "aws_s3_bucket_object" "webapp_files" {
  for_each = fileset("webapp/build", "**/*")

  bucket = aws_s3_bucket.webapp_bucket.bucket
  key    = each.value
  source = "/${each.value}"
  acl    = "private"
}