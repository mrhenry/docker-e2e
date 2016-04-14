# Run a Selenium Grid

docker run --rm -p 4444:4444 --name selenium-hub selenium/hub:2.53.0
docker run --rm --link selenium-hub:hub -v /dev/shm:/dev/shm selenium/node-chrome
docker run --rm --link selenium-hub:hub selenium/node-firefox:2.53.0
