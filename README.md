# pintu-iitbhu.github.io

Personal portfolio website for **Pintu Kumar Yadav** — SDE II at barq, specialising in backend engineering, payment infrastructure, and distributed systems.

Live at: [https://pintu-iitbhu.github.io](https://pintu-iitbhu.github.io)

## Stack

- Pure HTML / CSS / JavaScript — no build system
- [jQuery 1.12.4](https://jquery.com/) via CDN
- [Font Awesome 6.5](https://fontawesome.com/) via CDN
- [Google Fonts](https://fonts.google.com/) — Space Grotesk + Inter
- Hosted on GitHub Pages
- Contact form via [Formspree](https://formspree.io/)

## Structure

```
├── index.html                  # Single-page portfolio
├── css/
│   └── modern.css              # All styles
├── js/
│   └── modern.js               # Nav, scroll, animations, form submission
├── images/
│   ├── pintu-profile-pic.png
│   ├── resume_full.pdf
│   └── portfolio/
│       ├── ai_cloud.png
│       ├── online_trace.png
│       ├── auto2.jpg
│       └── movie-recommender.png
└── title.png                   # Favicon
```

## Sections

1. **Hero** — Title, CTA, social links
2. **About** — Bio, engineering focus areas, stats
3. **Skills** — Categorised tech stack with tag cloud
4. **Experience** — Barq (SDE II / SDE I), earlier internships
5. **Education** — IIT (BHU) Varanasi, school
6. **Projects** — AI & Cloud Platform (featured), Network Traffic Analysis, UAV Fleet, Movie Recommender
7. **Contact** — Info cards + AJAX contact form

## Local Development

No build step required. Open `index.html` directly in a browser or serve with any static file server:

```bash
python3 -m http.server 3000
```