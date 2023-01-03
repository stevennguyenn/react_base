fastlane_require 'dotenv'
require 'json'

def root_path
	Dir.pwd.sub(/.*\Kfastlane/, '').sub(/.*\Kandroid/, '').sub(/.*\Kios/, '').sub(/.*\K\/\//, '')
end

def json(json)
	return "\n#{JSON.pretty_generate(json)}"
end

def log(msg: nil, tag: nil)
  tag = tag == nil ? "" : "#{tag.upcase}: ".cyan 
  msg = "#{msg}".bold.italic.blue

  UI.message("⚡️")
  UI.message("✅ " + tag + msg)
  UI.message("⚡️")
end

def getVersion() 
  version = "#{ENV["APP_VER_NAME"]} (#{ENV["NEW_BUILD_NUMBER"]})"
  log(msg: version, tag: "version")
  return version
end

private_lane :before_all_lane do |options|
	env = options[:env]
  # Flutter
  Dotenv.overload "#{root_path}/.env.#{env}"
  # Fastlane
  Dotenv.overload "env/.env.#{env}"
  puts "🐤🐤 #{ENV["APP_VERSION"]} 🐤🐤"
end

private_lane :sh_on_root do |options|
  command = options[:command]
  sh("cd #{root_path} && #{command}")
end

private_lane :pub_get do
  log(msg: "Flutter pub get")
  sh_on_root(command: "flutter clean")
  sh_on_root(command: "flutter pub get")
end

private_lane :pod_clean do
  log(msg: "Pod clean")
  sh_on_root(command: "cd ios && rm -rf Pods && rm -rf Podfile.lock")
end

private_lane :pod_install do
  log(msg: "Pod install")
  sh_on_root(command: "cd ios && pod install")
end