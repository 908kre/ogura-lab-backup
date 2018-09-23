FROM python:3-slim

MAINTAINER Xinyaun Yao <yao.xinyuan@gmail.com>

RUN apt-get update && apt-get install -y --no-install-recommends \
    g++ && \
    rm -rf /var/lib/apt/lists/*

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
WORKDIR /srv
COPY ./requirements.txt /srv/requirements.txt
COPY ./dev-requirements.txt /srv/dev-requirements.txt

RUN pip install -r requirements.txt --no-cache-dir  && \
    pip install -r dev-requirements.txt  --no-cache-dir
COPY ./ /srv
RUN python setup.py develop
