source 'https://rubygems.org'

# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version

gem 'cocoapods', '~> 1.11', '>= 1.11.2'
gem 'fastlane'
gem 'fastlane-plugin-load_json'
gem 'fastlane-plugin-increment_version_code'
gem 'fastlane-plugin-firebase_app_distribution'


plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
