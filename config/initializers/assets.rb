# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.

# Rails.application.config.logger = Logger.new(STDOUT)
# Rails.application.config.logger.debug Rails.application.config.assets.paths.to_s


# Precompile additional assets.
# application.js, application.scss, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

# Rails.application.config.assets.precompile += %w( application.scss )

# Rails.application.config.assets.precompile += %w( .svg .eot .woff .ttf )

Rails.application.config.assets.precompile += %w( third-party.js )
Rails.application.config.assets.precompile += %w( third-party.scss )
Rails.application.config.assets.precompile += %w( lightbox/* )

Rails.application.config.assets.paths << Rails.root.join('node_modules')
