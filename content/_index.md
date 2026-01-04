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
        I'm a postdoctoral researcher in University of Central Florida. I majored in
AI-driven transportation safety; Multimodal machine learning/ Large Language Models (LLMs); Connected vehicle (CV) trajectory and video analytics; Proactive crash prediction and risk assessment; Causal inference and behavior-aware safety modeling; Safe integration of connected and automated vehicles (CAVs).        
        Please reach out to collaborate 😃
    design:
      columns: '1'
  
---
