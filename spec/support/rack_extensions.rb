module Rack
  class MockResponse
    def success?
      status == 200
    end
  end
end