use Rack::Static,
:urls => ["/images", "/js", "/css", "/config"],
:root => "public"

class RubyOperators
  def initialize
    @app = Rack::Builder.new do
      map '/' do
        run Index.new
      end

      map '/app.html' do
        run App.new
      end

    end
  end

  def call(env)
    @app.call(env)
  end
end


run RubyOperators.new

class Index
  def call(env)
    [
     200,
     {
       'Content-Type'  => 'text/html',
       'Cache-Control' => 'public, max-age=86400'
     },
     File.open('public/index.html', File::RDONLY)
    ]
  end
end


class App
  def call(env)
    [
     200,
     {
       'Content-Type'  => 'text/html',
       'Cache-Control' => 'public, max-age=86400'
     },
     File.open('public/app.html', File::RDONLY)
    ]
  end
end
