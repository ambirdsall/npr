get '/' do
  erb :index
end

post '/city' do
  @user_city = City.new(params[:city], params[:state])

  erb :driver
end

# get '/city'