require './lib/json_db'
require 'sinatra'

class Server < Sinatra::Base
  get "/" do
    send_file "public/index.html", :type => 'text/html', :disposition => 'inline'
  end
end