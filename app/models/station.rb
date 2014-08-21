class Station
  attr_reader :name, :orgId, :stories
  def initialize(name, orgId)
    @name = name
    @orgId = orgId
    @stories = []
  end

  def find_stories
    station_story_list = HTTParty.get("http://api.npr.org/query", query: {orgId: orgId, requiredAssets: "text", output: "JSON", apiKey: API_KEY})
    add_stories(JSON.parse(station_story_list))
  end

  def add_stories story_hash
    if story_hash["list"]["story"]
      story_hash["list"]["story"].each do |story|
        add_one_story(story)
      end
    end
  end

  def add_one_story story
    text_string = ""
    has_text = true
    story["text"]["paragraph"].each do |pp|
      if pp["$text"]
        text_string << pp["$text"]+" "
      else
        has_text = false
      end
    end
    @stories << Story.new(text_string[0..-27]) if has_text
  end

  def find_grades
    grade_levels = []
    @stories.each do |story|
      grade_levels << story.grade_level
    end
    grade_levels
  end

  def find_word_counts
    word_counts = []
    @stories.each do |story|
      word_counts << story.word_count
    end
    word_counts
  end
end
