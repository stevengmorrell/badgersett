# Compass is a great cross-platform tool for compiling SASS. 
# This compass config file will allow you to 
# quickly dive right in.


#########
# 1. Set this to the root of your project when deployed:
http_path = "/"

# 2. probably don't need to touch these
css_dir = "../css"
sass_dir = "./"
images_dir = "../images"
javascripts_dir = "../js"
environment = :development
relative_assets = true
asset_cache_buster = :none 
cache = false


# 3. You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded

# 4. When you are ready to launch your WP theme comment out (3) and uncomment the line below
# output_style = :compressed

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# don't touch this
preferred_syntax = :scss