---
title: Multimodal Traffic Scene Understanding
weight: 4
strand: multimodal
filter_label: Multimodal understanding
description: "What happened, why, and when should a warning occur? I connect video, trajectories, and structured signals to interpret and evaluate safety-critical traffic events."
summary: "Vision-language traffic video analysis, near-miss and crash event understanding, and timing-sensitive warning evaluation."
question: "How can video, trajectories, and structured information support grounded understanding and evaluation of safety-critical events?"
cover: /media/research/multimodal-framework.png
cover_alt: "Research framework connecting multimodal sensing, grounded representations, safety tasks, and reviewed decision-support outputs."
figure_caption: "Framework from the author's vision-language traffic safety review manuscript. The feedback loop represents evidence review and refinement, not autonomous deployment without human oversight."
figure_url: https://doi.org/10.1016/j.aap.2026.108673
---
## From traffic video to safety evidence

My published [vision-language and generative-model review](/publication/vlm-traffic-video/) organizes research on interpreting traffic videos and examines grounding, temporal consistency, and verification.

The aim is to connect semantic descriptions with observable traffic evidence. Model-generated explanations and scenarios require checks against the underlying events and physical constraints.

## Datasets and timing-sensitive evaluation

Two separate SAVeD research outputs address complementary questions:

- The [SAVeD dataset preprint](/publication/preprint/) concerns first-person ADAS near-miss and crash video data.
- The submitted [SAVeD deployment-oriented protocol](/publication/submitted-saved-protocol/) concerns candidate-event warnings, video and structured signals, and the timing of crash-risk escalation.

They are distinct works, rather than a replacement title for the same record.

## Occluded pedestrian crossing

The submitted [multimodal risk-recognition study](/publication/submitted-occluded-pedestrian/) addresses unsignalized, occluded pedestrian crossing scenarios and graded prevention. It connects this research area with vulnerable-road-user safety and proactive risk assessment.

## Verification and research resources

Benchmark and protocol design must distinguish observed events from generated scenarios, and warning evaluation must consider event timing. Related work includes the [SAVeD dataset, warning protocol, ALARM benchmark, and MSC-MTSim simulation platform](/research/#resources).

**Methods:** multimodal learning, vision-language models, structured scene representations, temporal event analysis, and evidence-based evaluation.
