# For this particular application
# pehle install Node
# then Copy files
# Start kar do

# Base Image: Sabse pehli layer computer ki, yaha tak kaam already milega
# Ubuntu 22, Node (ka koi version), Python ka koi version, Postgres ka koi version, MongoDB, 


FROM node:22

WORKDIR /app/folder_application
# Docker wale computer ke home se /folder_application ka jo path hai, waha pe kaam karenge

COPY . .

RUN cat index.js
RUN npm install

EXPOSE 4000

CMD ["node","index.js"]

#
# docker build [Options] <Dockerfile ka path>
# docker build -t folder_app .


# Docker run wale options:
# volume => -v <LOCATION ON DOCKER>:<LOCALTION ON MY PC>
# Port => -p Mere comp ka port: docker ka port
# Name => --name <Koi naam>
# Detach mode => -d

# docker run -d -p 3000:3000 --name pehla_docker folder_app

