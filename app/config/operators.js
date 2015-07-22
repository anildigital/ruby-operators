module.exports = [
    {
        "name": "hashrocket",
        "symbol": "=>",
        "example": "# pre-Ruby 1.9 syntax for assigning values to keys in a map\nx = { :a => 'foo', :b => 'bar' }\n# => {:a=>\"foo\", :b=>\"bar\"}\n\n# This is now the same as (using ':' instead of '=>')\nx = { a: 'foo', b: 'bar' }\n# => {:a=>\"foo\", :b=>\"bar\"}"
    },
    {
        "name": "spaceship",
        "symbol": "<=>"
    },
    {
        "name": "threequals",
        "symbol": "==="
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
        "symbol": "?:"
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
        "symbol": "=~"
    },
    {
        "name": "hat",
        "symbol": "^"
    },
    {
        "name": "pretzel",
        "symbol": "&"
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
        "symbol": "||="
    }
];
