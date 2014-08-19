class City
  attr_reader :city, :state, :stations
  def initialize(city, state)
    @city = city
    @state = state
    @stations = []
  end

  def add_station(station)
    @stations << station
  end
end