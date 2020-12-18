FROM base/nginx1.14-alpine

EXPOSE 80
#设置时区
#RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

COPY dist/   /usr/share/nginx/html
