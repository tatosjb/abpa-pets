source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.0'
gem 'pg', '~> 0.21.0'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'bootstrap-sass', '~> 3.3.6'
gem "select2-rails"
gem 'uglifier', '>= 1.3.0'
gem 'rails-i18n'
gem 'translate_enum'
gem "i18n-js"
gem "active_model_serializers"
gem 'will_paginate', '>= 3.1'
gem 'devise'

gem 'cloudinary'

gem "sprockets"
gem "sprockets-es6"

gem "browserify-rails"
gem 'webpacker', '~> 3.0'

gem 'jbuilder', '~> 2.5'

gem "database_cleaner", "1.5.3",  group: :test

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13.0'
  gem 'selenium-webdriver'
  gem 'rspec-rails'
  gem 'sprockets-rails', '3.2.0'
  gem 'factory_girl_rails', '4.5.0'
  gem "shoulda-matchers", "3.1.1"
  gem 'figaro'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
