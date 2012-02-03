require "rspec/core/rake_task"

desc "Run those specs"
task :spec do
  RSpec::Core::RakeTask.new(:spec) do |t|
    t.rspec_opts = %w{--colour --format progress}
    t.pattern = 'spec/**/*_spec.rb'
    # t.rspec_path = '/usr/bin/rspec'
  end
end

task :default => :spec

desc "Run the server"
task :server do
  system "rackup config.ru -p 3000"
end

desc "Environment stub for compatibility"
task :environment do
end

desc "Interact with code in IRB."
task :console do
  exec "irb -Ilib -rinit"
end
