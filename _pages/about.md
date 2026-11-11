---
permalink: /
author_profile: false
classes:
  - home
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<script>document.documentElement.classList.add('js-anim');</script>

<section class="hero reveal">
  <div class="hero-bg" aria-hidden="true">
    <span class="blob blob-1"></span>
    <span class="blob blob-2"></span>
  </div>
  <div class="hero-inner">
    <div class="hero-avatar">
      <img src="{{ base_path }}/images/profile.png" alt="Qingyu Zhang" loading="eager" fetchpriority="high" />
    </div>
    <div class="hero-text">
      <p class="hero-eyebrow">Hello, I&rsquo;m</p>
      <h1 class="hero-name">Qingyu Zhang</h1>
      <p class="hero-role">PhD Researcher · Electronic &amp; Electrical Engineering · UCL</p>
      <p class="hero-tagline">
        Working across robotics, embodied intelligence and bioelectronic systems
        to make robotic manipulation adaptive and generalisable.
      </p>
      <div class="hero-cta">
        <a class="hbtn hbtn-primary" href="{{ base_path }}/files/cv.pdf" data-zh-href="{{ base_path }}/files/cv-zh.pdf" target="_blank" rel="noopener">
          <i class="fa-solid fa-download" aria-hidden="true"></i> Download CV
        </a>
        <a class="hbtn" href="mailto:qingyu.zhang.23@ucl.ac.uk">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i> Email
        </a>
      </div>
      <div class="hero-social">
        <a href="https://scholar.google.com/citations?user=hJIR4KAAAAAJ&hl=en" target="_blank" rel="noopener" aria-label="Google Scholar" title="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
        <a href="https://orcid.org/0009-0008-8771-9195" target="_blank" rel="noopener" aria-label="ORCID" title="ORCID"><i class="ai ai-orcid" aria-hidden="true"></i></a>
        <a href="https://github.com/alfredzhang98" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/qingyuzhang98" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</section>

<div class="about-section about-summary reveal">
  <h2 class="sec-title">Summary</h2>
  <p>
    I am a PhD researcher at University College London (UCL), funded by EPSRC and the China Scholarship Council (CSC), specialising in robotics, embodied intelligence, and bioelectronic systems. My research spans multimodal perception, tactile sensing, reinforcement learning, and human&ndash;robot interaction, with an emphasis on enabling adaptive and generalisable robotic manipulation.
  </p>
  <p>
    My current research explores the evaluation and generalisation of reusable robotic skills, alongside the joint design of high-level decision-making and low-level learning-based control for complex manipulation tasks.
  </p>
  <p>
    I have a strong background in hardware&ndash;software co-design, embedded systems, and robotic system integration, with research experience in medical robotics and haptic interfaces. Prior to joining UCL, I graduated top of my MSc class at the University of Bristol and co-invented six patents in intelligent hardware and sensing technologies.
  </p>
</div>

<div class="about-section reveal">
  <h2 class="sec-title">Research Interests</h2>
  <ul class="chips">
    <li><i class="fa-solid fa-robot" aria-hidden="true"></i> Embodied Intelligence</li>
    <li><i class="fa-solid fa-hand" aria-hidden="true"></i> Robotic Manipulation</li>
    <li><i class="fa-solid fa-brain" aria-hidden="true"></i> Reinforcement Learning</li>
    <li><i class="fa-solid fa-eye" aria-hidden="true"></i> Multimodal Perception</li>
    <li><i class="fa-solid fa-fingerprint" aria-hidden="true"></i> Tactile Sensing</li>
    <li><i class="fa-solid fa-handshake" aria-hidden="true"></i> Human&ndash;Robot Interaction</li>
    <li><i class="fa-solid fa-comments" aria-hidden="true"></i> Vision-Language-Action Models</li>
    <li><i class="fa-solid fa-microchip" aria-hidden="true"></i> Bioelectronic Systems</li>
  </ul>
</div>

<div class="about-section reveal">
  <h2 class="sec-title">Skills</h2>
  <dl class="skills">
    <div class="skills__row">
      <dt><i class="fa-solid fa-code" aria-hidden="true"></i> Programming &amp; Machine Learning</dt>
      <dd>Python, C/C++, PyTorch, MATLAB, Verilog; computer vision, deep learning, and reinforcement learning.</dd>
    </div>
    <div class="skills__row">
      <dt><i class="fa-solid fa-robot" aria-hidden="true"></i> Robot Learning &amp; Embodied AI</dt>
      <dd>Robotic policy learning and evaluation, skill-based manipulation, hierarchical decision-making, multimodal perception, and vision-language-action models (research interests).</dd>
    </div>
    <div class="skills__row">
      <dt><i class="fa-solid fa-cubes" aria-hidden="true"></i> Robotics &amp; Simulation</dt>
      <dd>MuJoCo, MuJoCo Warp, UR collaborative robots, Haply Inverse3 haptic interfaces, and custom robotic platforms.</dd>
    </div>
    <div class="skills__row">
      <dt><i class="fa-solid fa-wave-square" aria-hidden="true"></i> Multimodal Sensing &amp; Bioelectronics</dt>
      <dd>Tactile and force sensing, bioimpedance measurement, sensor fusion, and real-time acquisition systems.</dd>
    </div>
    <div class="skills__row">
      <dt><i class="fa-solid fa-microchip" aria-hidden="true"></i> Embedded Systems &amp; Hardware</dt>
      <dd>ESP32, STM32, embedded C/C++, RTOS, BLE, SPI, I&sup2;C, UART, PCB design, mixed-signal circuit integration, and hardware debugging.</dd>
    </div>
    <div class="skills__row">
      <dt><i class="fa-solid fa-compass-drafting" aria-hidden="true"></i> Modelling &amp; Engineering</dt>
      <dd>COMSOL Multiphysics, SolidWorks, Blender, finite element analysis, and electrical field simulation.</dd>
    </div>
  </dl>
</div>


<div class="about-section reveal">
  <h2 class="sec-title">Education</h2>
  {% assign current_month = site.time | date: '%Y%m' | plus: 0 %}
  <ul class="timeline">
    <li data-start="2024-03" data-end="2028-02"{% if current_month >= 202403 and current_month <= 202802 %} class="is-current" aria-current="true"{% endif %}>
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-content">
        <h3>PhD in Electronic and Electrical Engineering <span class="tl-date">2024.03 — 2028.02</span></h3>
        <p><i class="fa-solid fa-university" aria-hidden="true"></i> University College London</p>
      </div>
    </li>
    <li data-start="2022-09" data-end="2023-08">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>MSc in Advanced Microelectronics Systems Engineering <span class="tl-date">2022.09 — 2023.08</span></h3>
        <p><i class="fa-solid fa-university" aria-hidden="true"></i> University of Bristol · Distinction · GPA: 83/100</p>
      </div>
    </li>
    <li data-start="2016-09" data-end="2020-06">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>BEng in Optical and Electronical Information Science Technology <span class="tl-date">2016.09 — 2020.06</span></h3>
        <p><i class="fa-solid fa-university" aria-hidden="true"></i> Huazhong University of Science and Technology · Outstanding Graduate · GPA: 3.22/4.0</p>
      </div>
    </li>
  </ul>
</div>

<div class="about-section reveal">
  <h2 class="sec-title">Work Experience</h2>
  <ul class="timeline">
    <li data-start="2021-02" data-end="2021-12">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>Senior IoT Engineer <span class="tl-date">2021.02 — 2021.12</span></h3>
        <p><i class="fa-solid fa-building" aria-hidden="true"></i> New Oriental Education &amp; Technology Group · Full-time · Beijing, China</p>
        <p>Skills: Internet of Things (IoT), C/C++ (Programming Language), Android Development, Linux,</p>
  </div>
    </li>
    <li data-start="2020-07" data-end="2021-01">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>IoT Engineer <span class="tl-date">2020.07 — 2021.01</span></h3>
        <p><i class="fa-solid fa-building" aria-hidden="true"></i> Beijing SenseShield Technology Co., Ltd. · Full-time · Beijing, China</p>
      </div>
    </li>
  </ul>
</div>

<div class="about-section reveal">
  <h2 class="sec-title">Membership &amp; Peer Review</h2>
  <div class="professional-service">
    <div class="professional-service__membership">
      <span class="professional-service__icon" aria-hidden="true"><i class="fa-solid fa-id-card"></i></span>
      <div><h3>IEEE Member</h3><p>Professional membership</p></div>
    </div>
    <div class="professional-service__review">
      <h3>Peer Reviewer</h3>
      <ul class="professional-service__venues" aria-label="Peer review venues">
        <li>IEEE TBioCAS <span>Journal</span></li>
        <li>IEEE BioCAS <span>Conference</span></li>
        <li>IEEE ISCAS <span>Conference</span></li>
      </ul>
    </div>
  </div>
</div>

<script>
  (function() {
    /* Scroll-reveal: fade sections in as they enter the viewport. */
    var reveals = document.querySelectorAll('.reveal');
    function revealAll() {
      reveals.forEach(function(el){ el.classList.add('is-visible'); });
    }
    try {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || !('IntersectionObserver' in window)) {
        revealAll();
      } else {
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
          });
        }, { threshold: 0.12 });
        reveals.forEach(function(el){ io.observe(el); });
        /* Failsafe: if the observer never fires (background tab, throttling,
           odd browsers), force everything visible after 1.5s so the page
           can never stay blank. */
        setTimeout(revealAll, 1500);
      }
    } catch (err) {
      revealAll();
    }
  })();
  </script>
