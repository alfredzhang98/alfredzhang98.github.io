---
permalink: /
author_profile: True
redirect_from:
  - /about/
  - /about.html
---

<div class="about-section card">
  <div class="card-content">
    <h2>Summary</h2>
    <p>
      Qingyu Zhang, a PhD student at UCL. My research brings together circuit design, image processing, deep learning, and reinforcement learning to develop intelligent robotic systems for healthcare. I’m particularly interested in connecting hardware and algorithms to create systems that are both effective and practical in real-world use.
    </p>
  </div>
</div>

<div class="cv-actions" style="margin: .5rem 0 1rem;">
  <a class="btn btn-google" href="{{ base_path }}/files/cv.pdf" target="_blank" rel="noopener">
    <span class="btn-icon" aria-hidden="true">&#8681;</span>
    <span>Download CV</span>
  </a>
  <!-- <small style="margin-left:.5rem;opacity:.8;">PDF</small> -->
  <!-- Place your PDF at /files/cv.pdf -->
  <!-- Or change the link above to match your file path -->
  <!-- Example: {{ base_path }}/files/YourName-CV.pdf -->
</div>

<div class="about-section">
  <h2>Research Interests</h2>
  <ul class="chips">
    <li><i class="fa-solid fa-microchip" aria-hidden="true"></i> Circuit and System Design</li>
    <li><i class="fa-solid fa-brain" aria-hidden="true"></i> Deep Learning</li>
    <li><i class="fa-solid fa-robot" aria-hidden="true"></i> Reinforcement Learning</li>
    <li><i class="fa-solid fa-eye" aria-hidden="true"></i> Vision-Language-Action Models</li>
  </ul>
</div>


<div class="about-section">
  <h2>Education</h2>
  <ul class="timeline">
    <li data-start="2024-03" data-end="2028-02">
      <div class="timeline-dot"></div>
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
        <h3>BEng in Optical Information Science and Technology <span class="tl-date">2016.09 — 2020.06</span></h3>
        <p><i class="fa-solid fa-university" aria-hidden="true"></i> Huazhong University of Science and Technology · Outstanding Graduate · GPA: 3.23/4.0</p>
      </div>
    </li>
  </ul>
</div>

<div class="about-section">
  <h2>Work Experience</h2>
  <ul class="timeline">
    <li data-start="2021-02" data-end="2021-12">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>AIoT Engineer <span class="tl-date">2021.02 — 2021.12</span></h3>
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

<script>
  (function() {
    function toYMInt(s) {
      if (!s) return null;
      var parts = s.split('-');
      var y = parseInt(parts[0], 10);
      var m = parts[1] ? parseInt(parts[1], 10) : 1;
      return y * 100 + m;
    }
    var now = new Date();
    var currentYM = now.getFullYear() * 100 + (now.getMonth() + 1);
    document.querySelectorAll('.timeline li[data-start]').forEach(function(li){
      var start = toYMInt(li.getAttribute('data-start'));
      var endAttr = li.getAttribute('data-end');
      var end = endAttr && endAttr.toLowerCase() !== 'present' ? toYMInt(endAttr) : 999912;
      if (start && currentYM >= start && currentYM <= end) {
        li.classList.add('is-current');
        li.setAttribute('aria-current', 'true');
      }
    });
  })();
  </script>
