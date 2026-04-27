---
title: ""
summary: "Chenzhu Wang, Ph.D. - AI-driven transportation safety, connected vehicle analytics, causal safety modeling, and multimodal crash risk assessment."
date: 2026-04-26
type: landing

design:
  spacing: "5rem"

sections:
  - block: resume-biography-3
    id: about
    content:
      username: admin
      text: ""
      headings:
        about: About
        education: Education
        interests: Research Interests
    design:
      css_class: dark hero-polished
      background:
        color: "#101819"
        image:
          filename: cav-safety-hero.svg
          filters:
            brightness: 0.48
          size: cover
          position: center
          parallax: false

  - block: markdown
    id: snapshot
    content:
      title: "Research Snapshot"
      subtitle: "AI, causal evidence, and multi-source traffic data for safer mobility systems."
      text: |-
        <div class="snapshot-layout">
          <div class="snapshot-copy">
            <p class="lead-text">I develop safety analytics that connect high-resolution traffic behavior with interpretable crash-risk evidence. My work spans connected-vehicle trajectories, traffic video, causal inference, Bayesian and random-parameter models, LLM/VLM-enabled event understanding, and ADAS/CAV safety evaluation.</p>
            <div class="metric-grid">
              <div class="metric-card"><strong>74</strong><span>Published journal papers</span></div>
              <div class="metric-card"><strong>28</strong><span>2025-2026 published or in-press journal papers</span></div>
              <div class="metric-card"><strong>$3.3M+</strong><span>Funding involvement across FDOT, MPO, FHWA, and NSFC projects</span></div>
              <div class="metric-card"><strong>40+</strong><span>Journals served as reviewer</span></div>
            </div>
          </div>
          <figure class="research-figure">
            <img src="/media/research-map.svg" alt="Research map showing data, models, evidence, and safety action">
          </figure>
        </div>

  - block: markdown
    id: research
    content:
      title: "Research Themes"
      subtitle: "A clearer way to read the publication record."
      text: |-
        <div class="theme-grid">
          <article class="theme-card accent-teal">
            <figure class="theme-figure">
              <img src="/media/themes/theme-connected-risk.png" alt="Connected vehicle trajectory to crash risk prediction schematic">
            </figure>
            <span class="theme-label">01</span>
            <h3>Connected-Vehicle Risk Prediction</h3>
            <p>Transforms CV trajectories, risky-driving events, and traffic states into real-time crash risk and crash type predictions.</p>
            <p class="paper-note">Representative work: TR-C 2025 causal mediation framework with connected vehicle data; under-review BiLSTM-Transformer freeway crash risk model.</p>
          </article>
          <article class="theme-card accent-coral">
            <figure class="theme-figure">
              <img src="/media/themes/theme-causal-ai.png" alt="Causal graph and model explanation schematic">
            </figure>
            <span class="theme-label">02</span>
            <h3>Causal and Explainable AI</h3>
            <p>Moves from prediction accuracy to mechanisms, counterfactuals, and policy-relevant explanation for roadway safety decisions.</p>
            <p class="paper-note">Representative work: causal mediation, double machine learning, causal forests, and interpretable ML for crash risk, ADAS, and warning systems.</p>
          </article>
          <article class="theme-card accent-gold">
            <figure class="theme-figure">
              <img src="/media/themes/theme-spatiotemporal.png" alt="Spatial grid, temporal instability, and Bayesian heterogeneity schematic">
            </figure>
            <span class="theme-label">03</span>
            <h3>Spatiotemporal Heterogeneity</h3>
            <p>Models how crash risk and injury severity vary across time, space, intersections, counties, road users, and traffic contexts.</p>
            <p class="paper-note">Representative work: AMAR 2025 grouped random-parameters Poisson-Lindley model with spatial effects.</p>
          </article>
          <article class="theme-card accent-blue">
            <figure class="theme-figure">
              <img src="/media/themes/theme-vru.png" alt="Intersection conflict schematic for vulnerable road users">
            </figure>
            <span class="theme-label">04</span>
            <h3>Vulnerable Road Users</h3>
            <p>Studies pedestrian, motorcycle, moped, and right-turn interaction risks using crash records, conflict data, field studies, and behavioral evidence.</p>
            <p class="paper-note">Representative work: AMAR 2025 pedestrian injury severity across vehicle movements; AAP 2024 distracted pedestrian crossing safety.</p>
          </article>
          <article class="theme-card accent-purple">
            <figure class="theme-figure">
              <img src="/media/themes/theme-adas-cav.png" alt="ADAS and CAV cyber-safety schematic with connected vehicle platoon">
            </figure>
            <span class="theme-label">05</span>
            <h3>ADAS, CAV, and Cyber-Safety</h3>
            <p>Evaluates the real-world safety promise of ADAS/CAV systems, driver warnings, platoons, and cyberattack impacts in mixed traffic.</p>
            <p class="paper-note">Representative work: ADAS effectiveness, in-vehicle warning personalization, and connected platoon cyberattack risk assessment.</p>
          </article>
          <article class="theme-card accent-green">
            <figure class="theme-figure">
              <img src="/media/themes/theme-multimodal.png" alt="Multimodal video event parsing and counterfactual safety schematic">
            </figure>
            <span class="theme-label">06</span>
            <h3>Multimodal Video and Generative Models</h3>
            <p>Builds toward first-person near-miss/crash datasets and LLM/VLM/diffusion workflows for interpretable traffic video safety analysis.</p>
            <p class="paper-note">Representative work: SAVeD dataset under review; LLM-diffusion framework for ADAS crash event understanding in preparation.</p>
          </article>
        </div>

  - block: markdown
    id: publications
    content:
      title: "Selected Publications by Topic"
      subtitle: "A compact guide to what each line of work contributes."
      text: |-
        <div class="publication-groups">
          <section class="pub-group">
            <h3>Connected Data, Prediction, and Explanation</h3>
            <ul>
              <li><strong>From prediction to explanation</strong>: links machine learning crash-risk prediction with causal mediation to reveal mechanisms in connected-vehicle data. <a href="https://doi.org/10.1016/j.trc.2025.105479">TR-C, 2025</a></li>
              <li><strong>Real-time freeway crash risk and type prediction</strong>: uses spatiotemporal sequence learning with connected vehicle data to anticipate both crash likelihood and crash type. Transportation Research Part C, under review.</li>
              <li><strong>LSTM + Transformer crash risk evaluation</strong>: combines traffic flow and risky-driving behavior data for real-time freeway risk assessment. <a href="https://doi.org/10.1109/TITS.2024.3438616">IEEE T-ITS, 2024</a></li>
            </ul>
          </section>
          <section class="pub-group">
            <h3>Spatial, Temporal, and Bayesian Safety Modeling</h3>
            <ul>
              <li><strong>Grouped random-parameters Poisson-Lindley with spatial effects</strong>: explains intersection crash frequency using visual environment features and macro/micro spatial effects. <a href="https://doi.org/10.1016/j.amar.2025.100387">AMAR, 2025</a></li>
              <li><strong>Speed-difference injury severity</strong>: models correlated injury outcomes of leading and following vehicles under temporal instability. <a href="https://doi.org/10.1016/j.amar.2024.100320">AMAR, 2024</a></li>
              <li><strong>Freeway rear-end and non-rear-end crashes</strong>: examines temporal stability and heterogeneity in crash injury severity. <a href="https://doi.org/10.1016/j.amar.2022.100219">AMAR, 2022</a></li>
            </ul>
          </section>
          <section class="pub-group">
            <h3>Vulnerable Road Users and Human Behavior</h3>
            <ul>
              <li><strong>Pedestrian injury severity across vehicle movements</strong>: jointly models left-turn, straight, and right-turn crash movements with spatial correlations. <a href="https://doi.org/10.1016/j.amar.2025.100406">AMAR, 2025</a></li>
              <li><strong>Mobile phone distraction at street crossings</strong>: combines field evidence and behavioral analysis to understand pedestrian safety risk. <a href="https://doi.org/10.1016/j.aap.2024.107563">AAP, 2024</a></li>
              <li><strong>Motorcycle and moped injury severity</strong>: studies helmet usage, temporal instability, and macro/micro disparities across rider injury outcomes. AAP / Transportmetrica A, 2024-2025.</li>
            </ul>
          </section>
          <section class="pub-group">
            <h3>Operations, ADAS, CAV, and Multimodal Safety</h3>
            <ul>
              <li><strong>Tunnel crash severity and congestion duration</strong>: uses cross-stitch networks to jointly learn safety and mobility outcomes. <a href="https://doi.org/10.1016/j.aap.2025.107942">AAP, 2025</a></li>
              <li><strong>ADAS safety effectiveness</strong>: assesses the real-world safety effects of advanced driver assistance systems. <a href="https://doi.org/10.1016/j.jsr.2025.10.014">Journal of Safety Research, 2025</a></li>
              <li><strong>SAVeD</strong>: first-person social media dataset for ADAS-equipped near-miss and crash event analysis. Scientific Data, under review.</li>
            </ul>
          </section>
        </div>

  - block: markdown
    id: collaboration
    content:
      title: "Collaboration"
      subtitle: "Open to research collaborations in data-rich, decision-oriented transportation safety."
      text: |-
        <div class="collab-panel">
          <p>I am especially interested in collaborations on connected-vehicle analytics, crash-risk prediction, causal and Bayesian safety modeling, ADAS/CAV evaluation, vulnerable-road-user safety, and multimodal video understanding for near-miss and crash events.</p>
          <div class="button-row">
            <a class="site-button primary" href="mailto:chenzhu.wang@ucf.edu">Email Me</a>
            <a class="site-button" href="https://scholar.google.com/citations?hl=en&user=FgKlt4sAAAAJ&view_op=list_works">Google Scholar</a>
          </div>
        </div>
    design:
      columns: "1"
---
