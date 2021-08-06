FROM python:3
ENV PYTHONUNBUFFERED 1

ARG DJANGO_ALLOWED_HOSTS
ARG DJANGO_SECRET_KEY
ARG CORS_ALLOWED_ORIGINS

ENV DJANGO_ALLOWED_HOSTS $DJANGO_ALLOWED_HOSTS
ENV DJANGO_SECRET_KEY $DJANGO_SECRET_KEY
ENV CORS_ALLOWED_ORIGINS $CORS_ALLOWED_ORIGINS

RUN mkdir /backend
COPY requirements.txt /backend/
WORKDIR /backend
RUN pip install -r requirements.txt
EXPOSE 8000
COPY . /backend/
RUN python manage.py makemigrations
RUN python manage.py migrate
# RUN python manage.py collectstatic --noinput