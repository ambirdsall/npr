class Station
  attr_reader :name, :orgId, :stories
  def initialize(name, orgId)
    @name = name
    @orgId = orgId
    @stories = []
  end
end