get '/' do
  erb :index
end

post '/city' do
  @user_city = City.new(params[:city], params[:state])
  @user_city.find_stations
  erb :driver
end