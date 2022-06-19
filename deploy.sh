#!/bin/bash
REPOSITORY=/home/ubuntu/deploy/nest/zip

cd $REPOSITORY

echo "env 파일 가져오기"
cp ../.env.* ./


echo "배포 상태 확인"
pm2 list

echo "배포 완료"