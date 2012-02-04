guard 'rspec' do
  watch(%r{^spec/.+_spec\.rb$})
  watch(%r{^lib/(.+)\.rb$})     { |m| "spec/lib/#{m[1]}_spec.rb" }
  watch('spec/spec_helper.rb')  { "spec" }
end

guard 'jasmine-headless-webkit' do
  watch(%r{public/javascripts/(.+)\.js}) { |m| "spec/javascripts/#{m[1]}\.spec.js" }
  watch(%r{spec/javascripts/(.+)\.spec\.js})  { |m| "spec/javascripts/#{m[1]}_spec.js" }
  watch(%r{spec/javascripts/(support|helpers)/.*}) { "spec/javascripts" }
end
