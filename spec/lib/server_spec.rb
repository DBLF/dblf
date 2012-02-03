require "spec_helper"

describe Server, '/' do
  before do
    get '/'
  end

  it "should be a success" do
    last_response.should be_success
  end

  it "should respond with HTML content type" do
    last_response.headers['Content-Type'].should == "text/html;charset=utf-8"
  end
end

describe Server, 'list characters (GET /characters)' do
  before { get "/api/characters" }
  
  it "should be a success" do
    last_response.should be_success
  end
  
  it "returns saved characters" do
    characters = JSON.parse(last_response.body)
    characters.length.should > 0
    characters.length = @database.members.length
    characters.map{|record| record['name']}.should include('first character')
  end
end

describe Server, 'create character (POST /characters)' do
  let(:character) do
    {:name => "new character"}
  end

  before { post "/api/characters", character.to_json }

  it "should be a success" do
    last_response.should be_success
  end

  it "returns the created character" do
    saved_character = JSON.parse(last_response.body)
    saved_character['name'].should == "new character"
    saved_character['id'].should_not be_null
  end
end

describe Server, 'get a character (GET /characters/:id)' do
  let(:character) { @database.members.first }
  before { get "/api/characters/#{character['id']}" }

  it "should be a success" do
    last_response.should be_success
  end

  it "returns the specified character" do
    char = JSON.parse(last_response.body)
    char['name'].should == character.name
  end
end

describe Server, 'update a character (PUT /characters/:id)' do
  let(:character) { @database.members.first }
  let(:updates) { {:name => "new name"} }
  before do
    character['name'].should_not == 'new name'
    put "/api/characters/#{character['id']}", updates.to_json
  end

  it "should be a success" do
    last_response.should be_success
  end

  it "returns the new character data" do
    char = JSON.parse(last_response.body)
    char['name'].should == updates[:name]
  end

  it "saves the updated character" do
    @database.reload!
    @database.members.first['name'].should == 'new name'
  end
end

describe Server, 'delete a character (DELETE /characters/:id)' do
  let(:character) { @database.members.first }
  before { delete "/api/characters/#{character['id']}" }
  
  it "returns success" do
    last_response.should be_success
  end
  
  it "returns empty array" do
    last_response.body.should == [].to_json
  end
  
  it "deletes the record" do
    @database.reload!
    @database.members.map{|record| record['name']}.should_not include(character.name)
  end
end
