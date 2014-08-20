class Story
  attr_reader :text
  
  def initialize text
    @text = text
    @grade_level = nil
  end
end