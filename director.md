---
layout: page
title: Director
permalink: /director/
image: /assets/img/director.jpg
homepage: https://me.gist.ac.kr/dcas/index.do
nav: true
nav_order: 2
---

<div class="row">
  <div class="col-sm-4">
    {% if page.image %}
      <img src="{{ page.image | relative_url }}" alt="Director Hyosung Ahn" style="width: 100%; height: auto; border-radius: 8px;" class="shadow-sm">
    {% else %}
      <div class="placeholder-image" style="background:#e0e0e0; display:flex; align-items:center; justify-content:center; min-height:300px; border-radius:8px;">
        <p style="color:#666; text-align:center; padding:10px;">
          📷 <strong>Director Hyo-Sung Ahn</strong><br>
          Description: Official Profile Picture<br>
          Recommended Specs: 400x400px / 1:1
        </p>
      </div>
    {% endif %}
  </div>
  <div class="col-sm-8">
    {% if page.homepage %}
      <h2><a href="{{ page.homepage }}" target="_blank" style="color:inherit; text-decoration:none; border-bottom: 2px solid #4a7c6b;">Prof. Hyosung Ahn</a></h2>
    {% else %}
      <h2>Prof. Hyosung Ahn</h2>
    {% endif %}
    <p><strong>Affiliation:</strong> Department of Mechanical and Robotics Engineering, Gwangju Institute of Science and Technology (GIST)</p>
    
    <h3>Major Experiences</h3>
    <ul>
      <li>IFAC 2026 World Congress IPC Co-chair</li>
      <li>Former President of ICROS Technical Committee on Control Theory (TCCT)</li>
      <li>Former Director of GIST Unmanned Vehicle Research Center</li>
    </ul>

    <h3>Research Capabilities</h3>
    <ul>
      <li>Selected by Elsevier as the World's Top 0.45% Researcher (Top 1% for 5 consecutive years)</li>
      <li>Editor-in-Chief (EiC) of IJCAS (Q2 SCI)</li>
      <li>Recipient of the Presidential Commendation of the Republic of Korea</li>
    </ul>

    <h3>Global Network</h3>
    <ul>
      <li>Finance (Co-) Chair, IEEE Int. Conference on Decision and Control (CDC), 2020 & 2023.</li>
      <li>Editor for SICE Journal of Control, Measurement, and System Integration.</li>
      <li>Active in various international conference organizing committees including ICRA, IFAC, and CDC.</li>
    </ul>
  </div>
</div>
