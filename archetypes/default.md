---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }} # Date created
authors: # Author
  - name: Jianyao17
    link: https://github.com/Jianyao17
    image: https://github.com/Jianyao17.png

desc: 
  # Content summmary / descriptions
tags:
  - Unity
  - Beginner
draft: true

mainImg: # Main thumbnail image
gitURL: {{ .Site.Params.githubRepo }} # Project source code
---
