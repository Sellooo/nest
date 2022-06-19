#!/bin/bash
REPOSITORY=/home/ubuntu/deploy/nest/zip

cd $REPOSITORY

echo "env 파일 가져오기"
sudo cp ../.env ./

ehco "배포"
pm2 start ecosystem.config.js

echo "배포 상태 확인"
pm2 list

echo "배포 완료"