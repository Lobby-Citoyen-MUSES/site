.PHONY: up build deployment

up: 
	docker run -it --rm -p 8080:8080 -v `pwd`:/var/app -w /var/app node npm run dev

build:
	docker run -it --rm -v `pwd`:/var/app -w /var/app node npm run build

deployment: build
	aws s3 sync dist/ s3://muses-lobby-citoyen.org