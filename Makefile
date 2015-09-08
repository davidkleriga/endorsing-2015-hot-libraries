all: build 

build:
	./node_modules/.bin/tsc server/*.ts -m commonjs
	./node_modules/.bin/tsc isomorphic/types/application/endorsement-api.ts
	# ./node_modules/.bin/tsc client/**/*.ts


# build: build-types build-style build-server build-client

# build-types:
	# ./node_modules/.bin/tsc types/citizendish.ts

# build-style:
# 	./node_modules/.bin/lessc style/less/platform.less style/css/platform.css
# 	./node_modules/.bin/lessc style/less/portfolio.less style/css/portfolio.css
# 	./node_modules/.bin/lessc style/less/designer.less style/css/designer.css
# 	./node_modules/.bin/lessc style/less/marketing-genius.less style/css/marketing-genius.css
# 	./node_modules/.bin/lessc style/less/reader.less style/css/reader.css
# 	./node_modules/.bin/lessc style/less/social.less style/css/social.css
# 	./node_modules/.bin/lessc style/less/login.less style/css/login.css
# 	./node_modules/.bin/lessc style/less/newsstand.less style/css/newsstand.css
# 	./node_modules/.bin/lessc style/less/experimentation.less style/css/experimentation.css
# 	./node_modules/.bin/lessc style/less/administrator.less style/css/administrator.css
# 	./node_modules/.bin/lessc style/less/client-administrator.less style/css/client-administrator.css
# 	./node_modules/.bin/lessc style/less/citizendish-administrator.less style/css/client-administrator.css

# build-server:
	# ./node_modules/.bin/tsc server/**/*.ts server/*.ts -m commonjs

# build-client:
	# ./node_modules/.bin/tsc client/**/*.ts ./client/*.ts -m commonjs

# build-client-api:
# 	./node_modules/.bin/lessc style/less/designer.less style/css/designer.css
# 	./node_modules/.bin/lessc style/less/marketing-genius.less style/css/marketing-genius.css
# 	./node_modules/.bin/lessc style/less/portfolio.less style/css/portfolio.css
# 	./node_modules/.bin/tsc ./client/client-api.ts -m commonjs
# 	./node_modules/.bin/tsc ./server/client-api.ts -m commonjs

# build-consumer-api:
# 	./node_modules/.bin/lessc style/less/reader.less style/css/reader.css
# 	./node_modules/.bin/tsc ./client/consumer-api.ts -m commonjs
# 	./node_modules/.bin/tsc ./server/consumer-api.ts -m commonjs

client-api: build-client-api
	gulp compile-client-api

consumer-api: build-consumer-api
	gulp compile-consumer-api

cl: client-api 

co: consumer-api

b: build-server client-api consumer-api 
