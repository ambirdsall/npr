get '/' do
  erb :index
end

post '/city' do
  @user_city = City.new(params[:city], params[:state])
  begin
    @user_city.find_stations 
    @user_city.find_stories

    if @user_city.has_stories?
      erb :graphs, layout: false
    else
      @error = "This city's stations don't publish text stories. <br>Try again or turn on the radio."
      erb :error, layout: false
    end
  rescue
    @error = "Try another city: we couldn't find that one."
    erb :error, layout: false
  end
end