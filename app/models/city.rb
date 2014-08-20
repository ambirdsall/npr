class City
  
  attr_reader :city, :state, :stations
  def initialize(city, state)
    @city = city
    @state = state
    @stations = []
  end

  def find_stations
    response = HTTParty.get("http://api.npr.org/stations", query: {city: city, state: state, apiKey: API_KEY})
    response["stations"]["station"].each do |station|
      add_station(Station.new(station["callLetters"], station["orgId"]))
    end
  end

  def add_station(station)
    @stations << station
  end
end