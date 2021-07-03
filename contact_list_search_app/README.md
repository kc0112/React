# Material UI Blog

## Dependencies
- npm i react-router-dom
- npm i uuidv4
- npm i --save axios
- npm i react-bootstrap-sweetalert

## Server
- create -> contact_list_search > server-api
- cd server-api
- npm init --yes
- npm i --save json-server
- create -> server-api > db.json 
- server-api>package.json>(CHANGE)
    - "scripts": {"start":"json-server -p 3006 -w db.json"},
-  cd server-api
- npm start

## Key Learning 
- saving and retrieving contacts - local storage, json file via axios
- routing
- pagination
- unique id generation
- sending data between child and parent
- hooks - useState,useRef,useEffect

## References
- https://sweetalert.js.org/guides/