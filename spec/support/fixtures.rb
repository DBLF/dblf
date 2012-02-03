module Fixtures
  CHARACTERS = [
    {:name => 'first character'}
  ]
  
  def self.seed(database)
    CHARACTERS.each do |character|
      database.save_doc character
      database.save
    end
  end
end