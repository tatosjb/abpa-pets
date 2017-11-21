Cloudinary.config do |c|
  c.cloud_name = Figaro.env.cloud_name
  c.api_key = Figaro.env.api_key
  c.api_secret = Figaro.env.api_secret
  c.enhance_image_tag = Figaro.env.enhance_image_tag
  c.static_image_support = Figaro.env.static_image_support
end