get '/' do
  erb :index
end

post '/city' do
  @user_city = City.new(params[:city], params[:state])
  @user_city.find_stations
  @user_city.stations.each do |station|
    station.find_stories
  end

  erb :graphs
end