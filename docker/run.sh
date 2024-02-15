#!/bin/bash -ex

source env.sh
./start-infra.sh

./run-frontend.sh &
./run-backend.sh &
echo 'waiting for highlight app to come online'
yarn dlx wait-on -l -s 3 http://localhost:8080/dist/index.js "${REACT_APP_FRONTEND_URI}"/index.html "${BACKEND_HEALTH_URI}"

echo "Highlight started on ${REACT_APP_FRONTEND_URI}"
wait
