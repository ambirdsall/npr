get '/' do
  erb :index
end

get "http://api.npr.org/stations?city=San+Francisco&state=California&apiKey=#{API_KEY}" do
end