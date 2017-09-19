require_relative 'boot'

require 'rails/all'
require 'sprockets/es6'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Dogs
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.i18n.load_path += Dir["#{Rails.root.to_s}/config/locales/**/*.{rb,yml}"]
    I18n.config.available_locales = :"pt-BR"
    config.i18n.default_locale = :"pt-BR"
    config.middleware.use I18n::JS::Middleware

    config.logger = Logger.new(STDOUT);

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
