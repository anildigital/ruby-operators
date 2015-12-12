module.exports = [
    {
        "name": "hashrocket",
        "symbol": "=>",
        "example": "# pre-Ruby 1.9 syntax for assigning values to keys in a map\nx = { :a => 'foo', :b => 'bar' }\n# => {:a=>\"foo\", :b=>\"bar\"}\n\n# This is now the same as (using ':' instead of '=>')\nx = { a: 'foo', b: 'bar' }\n# => {:a=>\"foo\", :b=>\"bar\"}"
    },
    {
        "name": "spaceship",
        "symbol": "<=>",
        "example": "# Compares two objects, mostly used to implement the Comparable module.\nclass Exam\n  include Comparable\n\n  def <=>(other)\n    self.score <=> other.score\n  end\nend\n\n> Exam.new(score: 100) > Exam.new(score: 50)\ntrue\n> [ Exam.new(score: 60), Exam.new(score: 10), Exam.new(score: 30) ].sort\n[<Exam score: 10>, <Exam score: 30>, <Exam score: 60>]\n"
    },
    {
        "name": "threequals",
        "symbol": "===",
        "example": "# Case match\nclass Icecream\n  attr_accessor :flavour\n\n  def initialize(flavour)\n    @flavour = flavour\n  end\n\n  def ===(another_icecream)\n    @flavour == another_icecream.flavour\n  end\nend\n\nvanilla_icecream = Icecream.new 'vanilla'\n\ncase vanilla_icecream\nwhen (Icecream.new 'chocolate')\n  puts \"Yikes!\"\nwhen (Icecream.new 'cookies and cream')\n  puts \"Yikes!\"\nwhen (Icecream.new 'vanilla')\n  puts \"Yiiiiis!\"\nend\n# => \"Yiiiiis!\""
    },
    {
        "name": "twiddle wakka",
        "symbol": "~>"
    },
    {
        "name": "stabby lambda",
        "symbol": "->"
    },
    {
        "name": "spiral",
        "symbol": "@"
    },
    {
        "name": "splat",
        "symbol": "*"
    },
    {
        "name": "starargs",
        "symbol": "*args"
    },
    {
        "name": "tilde",
        "symbol": "~"
    },
    {
        "name": "octothorpe",
        "symbol": "#"
    },
    {
        "name": "skull tag",
        "symbol": "<%="
    },
    {
        "name": "bang",
        "symbol": "!",
        "example": "# modify in-place\ny = [3, 5, 2]\nx = y.sort\np \"x is y sorted: #{x}, but y is still: #{y}\"\n# => \"x is y sorted: [2, 3, 5], but y is still: [3, 5, 2]\"\n\ny.sort!\np \"y is now sorted in-place: #{y}\"\n#  => \"y sorted in-place: [2, 3, 5]\""
    },
    {
        "name": "crab claws",
        "symbol": "#{}",
        "example": "# String interpolation\nputs \"1 + 2 = #{1 + 2}\"\n\n1 + 2 = 3"
    },
    {
        "name": "curly",
        "symbol": "{}  "
    },
    {
        "name": "paren",
        "symbol": "()"
    },
    {
        "name": "bracket",
        "symbol": "[]"
    },
    {
        "name": "elvis",
        "symbol": "?:",
        "example": "# ternary operator: evaluate an expression and return one of two values based on the outcome\ndef portugal_soccer_result(is_ronaldo_playing)\n  is_ronaldo_playing ? 'wins :-)' : 'loses :-('\nend\n\np portugal_soccer_result(true)\n# => \"wins :-)\""
    },
    {
        "name": "shovel",
        "symbol": "<<",
        "example": "# see operator overloading of << for 'container' objects built up repeatedly with 'contents'\nclass Train\n  attr_reader :name, :list_of_coaches\n\n  def initialize(name)\n    @name = name\n    @list_of_coaches = []\n  end\n\n  def <<(coach)\n    @list_of_coaches << coach\n    self\n  end\n\n  def to_s\n    \"#{name} with coaches: #{list_of_coaches.join(', ')}\"\n  end\n\nend\n\nclass Coach\n  attr_reader :name\n\n  def initialize(name)\n    @name = name;\n  end\n\n  def to_s\n    name\n  end\n\nend\n\n\nfirst_class = Coach.new(\"A-1\")\nsleeper_car_one = Coach.new(\"S-1\")\ncatering_car = Coach.new(\"CR\")\nsleeper_car_two = Coach.new(\"S-2\")\nbrake_van = Coach.new(\"BV\")\n\nexpress = Train.new(\"Orient Express\")\nexpress << first_class << sleeper_car_one << catering_car << sleeper_car_two << brake_van\n\np express\n# => Orient Express with coaches: A-1, S-1, CR, S-2, BV"
    },
    {
        "name": "constellation",
        "symbol": "**"
    },
    {
        "name": "equalike",
        "symbol": "=~",
        "example": "# Pattern matching\n# Used in String to match a Regular Expression (Regexp)\n\"hello world\" =~ /hello/\n# => 0\n\"hello world\" =~ /bacon/\n# => nil\n\n# Also used in Regexp to match a String\n/hello/ =~ \"hello world\"\n# => 0\n/bacon/ =~ \"hello world\"\n# => nil\n"
    },
    {
        "name": "hat",
        "symbol": "^"
    },
    {
        "name": "pretzel",
        "symbol": "&",
        "example": "# post-Ruby 1.9 example of & to invoke #to_proc on an object in a closure\nclass FakeRomanNumeral\n  attr_reader :numeral\n\n  def initialize(numeral_str)\n    @numeral = numeral_str\n  end\n\n  def to_i\n    numeral.eql?('X') ? 10 : numeral.eql?('V') ? 5 : 0  # and more ...\n  end\n\nend\n\nten = FakeRomanNumeral.new('X'); five = FakeRomanNumeral.new('V')\nroman_numerals = [ten, five]\narabic_numerals = roman_numerals.map(&:to_i)\np arabic_numerals\n# => [10, 5]"
    },
    {
        "name": "whack",
        "symbol": "/"
    },
    {
        "name": "blank",
        "symbol": "_"
    },
    {
        "name": "t-square",
        "symbol": "||=",
        "example": "# test for nil; if yes, then initialize to a custom value\ndef fake_add_arrays(ary_a, ary_b)\n  first = ary_a ||= []\n  second = ary_b ||= []\n  first + second\nend\n\nx = nil\nfake_add_arrays(x, [1, 2])\n# => [1, 2]\ny = nil\nfake_add_arrays([2, 6, 10], y)\n# => [2, 6, 10]\nfake_add_arrays([7, 9], [8, 3])\n# => [7, 9, 8, 3]"
    },
    {
        "name": "lonely",
        "symbol": "&.",
        "example": "# Safe-navigation operator (introduced in Ruby 2.3)\n\n# Assuming `profile` is `nil`\n\n# Problem\nuser.profile.image\n# => 'NoMethodError: undefined method `image' for nil:NilClass' \n\n# Guard chaining\nuser && user.profile && user.profile.image\n# => nil\n\n# Ruby 2.3+\nuser&.profile&.image\n# => nil\n\n# Rails\nuser.try(:profile).try(:image)\n# => nil"
    }
];
