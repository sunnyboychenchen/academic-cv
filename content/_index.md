---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
       I am a postdoctoral researcher at the University of Central Florida (SST Lab), working on **AI-driven transportation safety** with an emphasis on **multimodal machine learning / Large Language Models (LLMs)**, **connected-vehicle (CV) trajectory & video analytics**, and **causal, behavior-aware safety modeling** for proactive crash prediction and risk assessment.

### Signature Contributions
- **From prediction to explanation (TR-C 2025):** Developed a machine learning + **causal mediation** framework to move beyond black-box risk prediction and provide interpretable explanations of roadway crash risk using connected-vehicle data.  
  *Transportation Research Part C: Emerging Technologies, 183, 105479.* https://doi.org/10.1016/j.trc.2025.105479
- **Spatiotemporal + behavioral heterogeneity for safety (AMAR 2025):** Proposed joint modeling strategies that address **temporal instability** and **spatial correlations** in injury severity, including pedestrian injury severity across vehicle movements at intersections.  
  *Analytic Methods in Accident Research, 47, 100406.* https://doi.org/10.1016/j.amar.2025.100406
- **Intersections & visual environment + spatial effects (AMAR 2025):** Built a grouped random-parameters Poisson–Lindley model with spatial effects to study intersection crashes, leveraging visual environment features and spatiotemporal instability.  
  *Analytic Methods in Accident Research, 47, 100387.* https://doi.org/10.1016/j.amar.2025.100387
- **Multi-task safety–mobility learning (AAP 2025):** Jointly evaluated tunnel crash severity and congestion duration using **cross-stitch networks**.  
  *Accident Analysis & Prevention, 213, 107942.* https://doi.org/10.1016/j.aap.2025.107942

### Data & Systems
- **SAVeD Dataset (under review, Scientific Data):** A first-person social media dataset for ADAS-equipped vehicle near-miss and crash event analysis (with synchronized event understanding use cases).

### Funded & Applied Research (Selected)
- **Safe Streets for All (SS4A) Action Plan** (Lake-Sumter MPO, $955,580): multimodal crash prediction integrating CV trajectories, video-based features, and causal inference.
- **Network Level Proactive Traffic Operations Indicator (NPTOI)** (FDOT, $247,952): core ML algorithms for multimodal crash prediction (trajectory + video + causal inference).
- **Speed management MOEs by context classification** (FDOT, $240,000, PI; pending): AI-driven MOEs using multimodal CV–video data.
- Total funding involvement: **$3.3M+** across FDOT, MPO, FHWA, and NSFC projects.

### Honors
- **National Excellent Doctoral Dissertation (Top-ranked)** (2023)
- **Outstanding Reviewer Award** (ASCE JTE Part A, 2023)
- **National Scholarship (PhD)** (2022)
     
        Please reach out to collaborate 😃
    design:
      columns: '1'
  
---
