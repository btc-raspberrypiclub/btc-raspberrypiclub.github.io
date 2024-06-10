FROM ruby:latest
WORKDIR /app

COPY . .

RUN gem install bundler jekyll
RUN bundle install

CMD ["/usr/local/bundle/bin/bundle", "exec", "jekyll", "serve"]
