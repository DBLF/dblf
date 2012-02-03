module TestDB
  def self.database
    FileUtils.mkdir_p("#{File.dirname(__FILE__)}/../../tmp")
    db = JSONDb.new("db-#{ENV['RACK_ENV']}.json")
    db.delete!
    db
  end
end