# Makefile
install: # при первом клонировании репозитория
	npm ci

brain-games: # запуск js brain-games
	node bin/brain-games.js

publish: # 
	publish --dry-run
