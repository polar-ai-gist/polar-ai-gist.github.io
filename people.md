---
layout: page
title: People
image: /assets/img/team-photo.jpg
permalink: /people/
nav: true
nav_order: 3
---

<style>
  .member-photo {
    width: 200px;
    height: auto;
    margin-bottom: 0 !important;
    display: block;
  }
  div.member-photo {
    height: 250px; /* maintain a reasonable aspect ratio for the placeholder */
  }
</style>

<!-- image: /assets/img/team-photo.jpg -->
{% if page.image %}
<div class="placeholder-image w-100" style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('{{ page.image | relative_url }}') center/cover; display:flex; align-items:center; justify-content:center; min-height:300px; margin-bottom: 40px; color:#fff; overflow:hidden; box-sizing:border-box;">
{% else %}
<div class="placeholder-image w-100" style="background:#4a7c6b; display:flex; align-items:center; justify-content:center; min-height:300px; margin-bottom: 40px; color:#fff; overflow:hidden; box-sizing:border-box;">
{% endif %}
  <div style="text-align:center; padding:20px; max-width: 100%; width: 100%;">
    <div style="color:white; font-weight:700; font-size: clamp(2rem, 8vw, 3rem); margin-bottom:10px; line-height: 1.2; word-wrap: break-word;">MEMBERS</div>
    <p style="font-size: clamp(1rem, 4vw, 1.2rem); letter-spacing:1px; text-transform:uppercase;">The people driving extreme environment robotics</p>
  </div>
</div>

Modern extreme environment robotics requires multidisciplinary collaboration. Our center boasts 21 faculty members, numerous global postdocs, and over 15 partner institutions.

## GIST Faculty (12 Members)

<div class="members-list mt-4">
{% for member in site.data.members.gist_faculty %}
  <div class="row mb-5 align-items-center">
    <div class="col-auto pr-3">
      {% if member.image %}
        <img src="{{ member.image | relative_url }}" class="member-photo shadow-sm" alt="{{ member.name }}">
      {% else %}
        <div class="member-photo shadow-sm" style="background:#e0e0e0; display:flex; align-items:center; justify-content:center; color:#666; font-size:40px;">
          <i class="fas fa-user"></i>
        </div>
      {% endif %}
    </div>
    <div class="col pl-0">
      <h3 class="mt-2 mt-sm-0" style="font-weight: 700; margin-bottom:0;">{% if member.url %}<a href="{{ member.url }}" target="_blank" style="color:inherit; text-decoration:none; border-bottom: 2px solid #4a7c6b;">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
      <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 0;">
        <strong>{{ member.role }}</strong><br>
        <em>Expertise:</em> {{ member.expertise }}
      </p>
    </div>
  </div>
  <hr class="kimlab-hr">
{% endfor %}
</div>

## University Faculty (9 Members)

<div class="members-list mt-4">
{% for member in site.data.members.university_faculty %}
  <div class="row mb-5 align-items-center">
    <div class="col-auto pr-3">
      {% if member.image %}
        <img src="{{ member.image | relative_url }}" class="member-photo shadow-sm" alt="{{ member.name }}">
      {% else %}
        <div class="member-photo shadow-sm" style="background:#e0e0e0; display:flex; align-items:center; justify-content:center; color:#666; font-size:40px;">
          <i class="fas fa-user"></i>
        </div>
      {% endif %}
    </div>
    <div class="col pl-0">
      <h3 class="mt-2 mt-sm-0" style="font-weight: 700; margin-bottom:0;">{% if member.url %}<a href="{{ member.url }}" target="_blank" style="color:inherit; text-decoration:none; border-bottom: 2px solid #4a7c6b;">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
      <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 0;">
        <strong>{{ member.role }}</strong><br>
        {{ member.affiliation }}<br>
        <em>Expertise:</em> {{ member.expertise }}
      </p>
    </div>
  </div>
  <hr class="kimlab-hr">
{% endfor %}
</div>

## InnoCORE Fellows (Postdocs)
*(Recruitment ongoing. Profiles of our ~25 annual global postdoctoral researchers will be added here once selected.)*

## Global Mentors
Our researchers collaborate with around 20 distinguished international scholars and industry leaders, including 4 confirmed distinguished mentors.

## Research Institutes (8 Institutions)
- KOPRI (Korea Polar Research Institute)
- KIMM (Korea Institute of Machinery & Materials)
- KIRO (Korea Institute of Robot and Convergence)
- KITECH (Korea Institute of Industrial Technology)
- KETI (Korea Electronics Technology Institute)
- KIST (Korea Institute of Science and Technology)
- KOCETI (Korea Construction Equipment Technology Institute)
- KIER (Korea Institute of Energy Research)

## Participating Companies (8 Companies)
- LG Electronics
- TESOLLO
- SOS LAB
- i3system
- JJNS
- ZETV
- NT Robot
- Blue Robin
