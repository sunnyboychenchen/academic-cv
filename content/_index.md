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
      title: "📚 My Research"
      subtitle: ""
      text: |-
                I am a postdoctoral researcher at the University of Central Florida (SST Lab). My work focuses on **AI-driven transportation safety**, spanning **connected-vehicle (CV)                 trajectory & video analytics**, **causal and behavior-aware safety modeling**, and **spatiotemporal heterogeneity** for proactive crash prediction and risk assessment.

                ### Selected Journal Publications (by Theme)

                #### 1) Causal & Explainable AI for Safety
                - **Transportation Research Part C (2025):** ML + causal mediation for interpretable crash risk mechanisms using CV data.  
                  *TR-C, 183, 105479.* https://doi.org/10.1016/j.trc.2025.105479
                - **Transportation Research Part C (under review / in progress):** Behavior-aware crash prediction with macro–micro exposure fusion (traffic + CV pre-crash dynamics).  
                  *(Manuscript line: dual-level exposure + causal heterogeneity)*

                #### 2) Spatiotemporal Heterogeneity & Bayesian Safety Modeling
                - **Analytic Methods in Accident Research (2025):** Spatiotemporal instability + spatial correlation in injury severity with Bayesian multilevel structure.  
                  *AMAR, 47, 100406.* https://doi.org/10.1016/j.amar.2025.100406
                - **Analytic Methods in Accident Research (2025):** Grouped random-parameters Poisson–Lindley with spatial effects for intersection crash analysis.  
                  *AMAR, 47, 100387.* https://doi.org/10.1016/j.amar.2025.100387
                - **Accident Analysis & Prevention (selected):** Bayesian/heterogeneity-aware safety evaluation under complex roadway and environment contexts.  
                  *(If you want, list 1–2 specific AAP papers here)*

                #### 3) Crash Type & Injury Severity Joint/Multivariate Modeling
                - **Analytic Methods in Accident Research / AAP (selected):** Joint modeling for crash type and severity with cross-movement dependence and correlation structure.  
                  *(Your typical line: multivariate / bivariate Bayesian models for intersection crashes)*

                #### 4) ITS Operations, Tunnel Safety & Multi-task Learning
                - **Accident Analysis & Prevention (2025):** Cross-stitch networks to jointly model tunnel crash severity and congestion duration (safety–mobility coupling).  
                  *AAP, 213, 107942.* https://doi.org/10.1016/j.aap.2025.107942

                #### 5) Connected & Automated Vehicles (CAV) and Cybersecurity-Oriented Safety
                - **Review / survey line (selected):** Cyberattack patterns, detection, stability impacts, and robust control strategies for CAV fleets in complex traffic scenarios.  

                #### 6) Multimodal / Video Understanding & Risk (VLM / LLM / Diffusion)
                - **Scientific Data (under review):** SAVeD dataset for ADAS-equipped near-miss & crash events to enable multimodal understanding and counterfactual safety analysis.
                - **Methods line (in progress):** LLM-assisted event parsing + controllable diffusion world models for counterfactual “what-if” safety assessment.

                ### Collaboration
                I’m always open to collaboration on **CV trajectory analytics**, **Bayesian/causal safety modeling**, and **multimodal risk understanding**.

    design:
      columns: '1'
  
---
