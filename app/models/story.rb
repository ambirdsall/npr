class Story
  attr_reader :grade_level, :word_count

  def initialize text
    @text = text
    @grade_level = find_grade_level
    @word_count = find_word_count
  end

  def find_grade_level
    Lingua::EN::Readability.new(@text).kincaid
  end

  def find_word_count
    Lingua::EN::Readability.new(@text).num_words
  end
end