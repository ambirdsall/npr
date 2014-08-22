class Story
  attr_reader :grade_level, :word_count

  def initialize text
    @text = text
    analyze_text
  end

  def find_grade_level
    Lingua::EN::Readability.new(@text).kincaid
  end

  def find_word_count
    Lingua::EN::Readability.new(@text).num_words
  end

  def analyze_text
    report = Lingua::EN::Readability.new(@text)
    @grade_level = report.kincaid
    @word_count = report.num_words
  end
end