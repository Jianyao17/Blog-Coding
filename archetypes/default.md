---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
desc: # Content summmary / descriptions

date: {{ .Date }} # Date created
authors: # Author
  - name: Jianyao17
    link: https://github.com/Jianyao17
    image: https://github.com/Jianyao17.png

readTime: 5 # In Minutes
tags: # Content Tags
  -

draft: true

mainImg: # Main thumbnail image 4:3
gitURL: {{ .Site.Params.githubRepo }} # Project source code
---
