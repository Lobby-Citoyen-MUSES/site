.PHONY: up build

up: 
	docker run -it --rm -p 8080:8080 -v `pwd`:/var/app -w /var/app node npm run dev

build:
	docker run -it --rm -v `pwd`:/var/app -w /var/app node npm run build