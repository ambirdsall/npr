class Story
  attr_reader :grade_level

  def initialize text
    @text = text
    @grade_level = find_grade_level(@text)
  end

  def find_grade_level text
    Lingua::EN::Readability.new(text).kincaid
  end
end