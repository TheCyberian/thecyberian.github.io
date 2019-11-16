---
layout: page
title: Code Breaking
permalink: /code-breaking/
---
{% for my_page in site.pages %}

{% if my_page.category == "javascriptTools" %}
  <a href="{{ my_page.url | prepend: site.baseurl }}" style="text-decoration: none;">{{ my_page.title }}</a>

{% endif %}
{% endfor %}
