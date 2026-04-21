---
layout: page
title: About
subtitle: "Completing the mission even when disconnected: Extreme Environment Physical AI"
image: /assets/img/about-photo.jpg
nav: true
nav_order: 1
permalink: /about/
---

{% if page.image %}
<div class="placeholder-image w-100" style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('{{ page.image | relative_url }}') center/cover; display:flex; align-items:center; justify-content:center; min-height:400px; margin-bottom: 40px; color:#fff; overflow:hidden; box-sizing:border-box;">
{% else %}
<div class="placeholder-image w-100" style="background:#5e9e88; display:flex; align-items:center; justify-content:center; min-height:400px; margin-bottom: 40px; color:#fff; overflow:hidden; box-sizing:border-box;">
{% endif %}
  <div style="text-align:center; padding:20px; max-width: 100%; width: 100%;">
    <div style="color:white; font-weight:700; font-size:clamp(2rem, 8vw, 3.5rem); margin-bottom:10px; line-height: 1.2; word-wrap: break-word;">POLAR-AI</div>
    <p style="font-size:clamp(1rem, 4vw, 1.2rem); letter-spacing:1px; text-transform:uppercase;">Extreme Environment Physical AI Research Center</p>
  </div>
</div>

## Mission & Vision

**Mission:** Complete the mission even when disconnected: Extreme Environment Physical AI.  
**Vision:** Secure global leadership in polar exploration robot mobility technology and build an ecosystem for nurturing creative, multidisciplinary postdoctoral talent.  
**Slogan:** *"Beyond the Bounds of Exploration, Opening Horizons for Talent"*

### 4 Core Strategies
1. **Innovative Polar Exploration Robot Mobility Physical AI System Development**
2. **Establishment of Top-tier Research Environment**
3. **Creation of a Sustainable Global Talent Ecosystem**
4. **Technology Commercialization and Industrial Expansion**

<a href="/research" class="ghost-btn mt-3 mb-4">Learn More About Projects</a>

## Research Goals
Our ultimate goal is to develop an autonomous robotic system centered on humanoids for polar resource exploration that can "complete the mission even when disconnected" under the triple constraints of cryogenic temperatures (-50°C), communication denial, and GPS instability.

Our demonstration strategy follows a **3+2 stage pipeline**:
- **Stages 1-3:** Component development and indoor testing
- **Stages 4-5:** Subsystem validation at KOPRI/KRISO and full system outdoor validation at Daegwallyeong.

## Organization
The center operates on a **Hub-Spoke Matrix Organization**:
- **Hub:** GIST (Overall system integration, infrastructure, interface standards)
- **Spokes:** Seoul National Univ., Chonnam National Univ., Chungnam National Univ., Hanyang Univ., Gyeongsang National Univ., Yonsei Univ.

## Technological Differentiation
- **Free Energy Principle-based Gait Control**: A powerful hybrid framework that seamlessly combines the rigorous stability of traditional model-based physics with the robust adaptability of advanced data-driven approaches (such as Reinforcement Learning, Transformers, and Diffusion models). This creates a continuous active inference loop for perception, action, and learning under extreme uncertainty.
- **Hybrid Mobility Architecture**: World's first complex system integrating humanoids, drones, and ground rovers for polar operation.
- **Physics-informed AI PHM (Prognostics and Health Management)**: Internalizing physical degradation laws (thermal, vibration, and impact) into AI models to achieve highly accurate anomaly detection and real-time Remaining Useful Life (RUL) prediction for the entire system, even in data-scarce polar environments.
- **Thermos-Bottle Principle Battery Thermal Management**: Integrated design that achieves cryogenic constant temperature maintenance and thermal runaway suppression simultaneously.
- **Ad-hoc + DTN Communication**: Hybrid communication specialized for extreme environments that automatically switches depending on network state.
