\# FlatWhite



\## Mission

Create implementation-ready, token-driven UI guidance for FlatWhite that is optimized for consistency, accessibility, and fast delivery across marketing site.



\## Brand

\- Product/brand: FlatWhite

\- URL: https://flat-white.framer.website/

\- Audience: buyers, teams, and decision-makers

\- Product surface: marketing site



\## Style Foundations

\- Visual style: clean, functional, implementation-oriented

\- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, Inter Placeholder, sans-serif`, `font.size.base=12px`, `font.weight.base=600`, `font.lineHeight.base=12px`

\- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=24px`, `font.size.2xl=28px`, `font.size.3xl=32px`, `font.size.4xl=46px`

\- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#0a0f15`, `color.surface.base=#000000`, `color.text.inverse=#0000ee`, `color.surface.raised=#222631`

\- Spacing scale: `space.1=7px`, `space.2=12px`, `space.3=16px`, `space.4=18px`, `space.5=20px`, `space.6=24px`, `space.7=32px`, `space.8=46px`

\- Radius/shadow/motion tokens: `radius.xs=100px`, `radius.sm=999px` | `motion.duration.instant=300ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

Concise, confident, implementation-focused.



\## Rules: Do

\- Use semantic tokens, not raw hex values, in component guidance.

\- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.

\- Component behavior should specify responsive and edge-case handling.

\- Interactive components must document keyboard, pointer, and touch behavior.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.

\- Do not ship component guidance without explicit state rules.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and semantic tokens.

3\. Define component anatomy, variants, interactions, and state behavior.

4\. Add accessibility acceptance criteria with pass/fail checks.

5\. Add anti-patterns, migration notes, and edge-case handling.

6\. End with a QA checklist.



\## Required Output Structure

\- Context and goals.

\- Design tokens and foundations.

\- Component-level rules (anatomy, variants, states, responsive behavior).

\- Accessibility requirements and testable acceptance criteria.

\- Content and tone standards with examples.

\- Anti-patterns and prohibited implementations.

\- QA checklist.



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.

\- Include known page component density: links (30), inputs (12), navigation (3), buttons (1), lists (1).





\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Teams should prefer system consistency over local visual exceptions.



