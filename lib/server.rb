require './lib/json_db'
require 'sinatra'
require 'haml'

class Server < Sinatra::Base
  set :views, "#{File.dirname(__FILE__)}/../app/views"
  set :root, File.dirname(__FILE__) + "/../"

  before do
    @db = JSONDb.new "db-#{ENV['RACK_ENV']}.json"
  end

  get "/" do
    content_type :html
    haml :index
  end

  get "/characters/:id" do
    content_type :html
    haml :index
  end

  get "/favicon.ico" do
    ""
  end

  get "/api/characters" do
    content_type :json
    @db.members.to_json
  end

  post "/api/characters" do
    character = JSON.parse request.body.read
    character = @db.save_doc character
    @db.save

    content_type :json
    character.to_json
  end

  get "/api/characters/:id" do |id|
    character = @db.get id
    content_type :json
    character.to_json
  end

  put "/api/characters/:id" do |id|
    character = @db.get id
    character.merge! JSON.parse(request.body.read)
    @db.save

    content_type :json
    character.to_json
  end

  delete "/api/characters/:id" do |id|
    @db.delete id
    @db.save
    [].to_json
  end
end
