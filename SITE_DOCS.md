# Site Technical Documentation

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         HUGO STATIC SITE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────────┐  │
│  │   CONTENT    │    │    DATA      │    │      LAYOUTS         │  │
│  │              │    │              │    │                      │  │
│  │ /content/    │    │ /data/       │    │ /layouts/            │  │
│  │  ├─ posts/   │    │  └─ data.json│    │  ├─ index.html       │  │
│  │  ├─ about/   │    │     │        │    │  ├─ about/           │  │
│  │  ├─ projects/│    │     ├─projects│   │  ├─ posts/           │  │
│  │  ├─ challenge│    │     ├─blogs  │    │  ├─ projects/        │  │
│  │  └─ search   │    │     └─aws_   │    │  ├─ challenge/       │  │
│  │              │    │       challenge   │  ├─ partials/        │  │
│  └──────────────┘    └──────────────┘    │  │  ├─ header.html   │  │
│         │                   │            │  │  ├─ footer.html   │  │
│         │                   │            │  │  └─ menu.html     │  │
│         ▼                   ▼            │  └─ _default/        │  │
│  ┌─────────────────────────────────────┐ │     ├─ search.html   │  │
│  │           HUGO BUILD ENGINE         │ │     ├─ terms.html    │  │
│  │                                     │ │     └─ term.html     │  │
│  │   Markdown + Go Templates + JSON    │ └──────────────────────┘  │
│  │              ↓                      │            │              │
│  │         HTML Output                 │            │              │
│  └─────────────────────────────────────┘            │              │
│                    │                                │              │
│                    ▼                                ▼              │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                      /public/                                │  │
│  │                  (Generated Site)                            │  │
│  │                                                              │  │
│  │   Static HTML, CSS, JS ready for deployment                  │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                              │                                     │
└──────────────────────────────│─────────────────────────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │   WEB HOSTING       │
                    │  (Netlify/Vercel/   │
                    │   GitHub Pages)     │
                    └─────────────────────┘
```

---

## Directory Structure

```
faisalblog/
├── archetypes/          # Content templates
├── content/             # Markdown content files
│   ├── _index.md
│   ├── about/
│   ├── posts/           # Blog posts (markdown)
│   ├── projects/
│   ├── challenge/
│   ├── search.md
│   └── tags/
├── data/
│   └── data.json        # Dynamic data (projects, blogs, challenge)
├── layouts/             # Custom templates (override theme)
│   ├── index.html       # Homepage
│   ├── about/
│   ├── posts/
│   ├── projects/
│   ├── challenge/
│   ├── partials/        # Reusable components
│   └── _default/        # Default templates
├── static/              # Static assets
│   └── images/
├── themes/
│   └── terminal/        # Base theme
├── hugo.toml            # Site configuration
└── public/              # Generated output (git ignored)
```

---

## How to Update Content

### 1. Update Blog Posts

**Option A: Using data.json (current setup)**

Edit `data/data.json`:

```json
"blogs": [
  {
    "id": "my-new-post",
    "title": "My New Blog Post",
    "date": "2025-12-28",
    "category": "AWS",
    "description": "Short description of the post."
  }
]
```

**Option B: Using Markdown files (recommended for long content)**

Create a new file: `content/posts/my-new-post.md`

```markdown
---
title: "My New Blog Post"
date: 2025-12-28
description: "Short description"
tags: ["aws", "terraform", "devops"]
---

Your blog content goes here...

## Section 1
Content...

## Section 2
Content...
```

---

### 2. Update Projects

Edit `data/data.json`:

```json
"projects": [
  {
    "id": "project-slug",
    "title": "Project Title",
    "description": "Project description text.",
    "icon": "",
    "featured": true,
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com",
    "badges": [
      { "name": "AWS", "color": "#ff9900" },
      { "name": "Terraform", "color": "#7b42bc" }
    ]
  }
]
```

**Fields:**
- `id`: URL slug (used in links)
- `featured`: `true` = shows on homepage
- `icon`: Leave empty (no emojis per Claude Code theme)
- `badges`: Technology tags

---

### 3. Update 100 Days of AWS Challenge

Edit `data/data.json` → `aws_challenge` array:

```json
{
  "day": "001",
  "title": "WHY 100 DAYS OF AWS?",
  "status": "completed"
}
```

**Status options:**
- `"completed"` - Green indicator
- `"In Progress"` - Orange indicator
- `"active"` - Gray indicator
- `"locked"` - Dimmed/locked

---

### 4. Update About Page

Edit `layouts/about/list.html` directly for:
- Bio text
- Certifications
- Skills
- Contact links

---

### 5. Update Navigation Menu

Edit `hugo.toml`:

```toml
[[languages.en.menu.main]]
  identifier = "home"
  name = "HOME"
  url = "/"
  weight = 1
```

**Weight** = display order (lower = first)

---

### 6. Update Site Settings

Edit `hugo.toml`:

```toml
[languages.en]
  title = "Mohammad Faisal"

[languages.en.params.logo]
  logoText = "Mohammad Faisal"
  subtitle = "Cloud Engineer | AWS Developer | Blogger"
```

---

## Common Commands

```bash
# Start development server
hugo server

# Start with draft posts visible
hugo server -D

# Build for production
hugo

# Build with minification
hugo --minify

# Clean build cache
hugo --gc
```

---

## Theme Customization

### Color Palette (Claude Code Theme)

| Element | Color |
|---------|-------|
| Background | `#1e1e1e` |
| Cards | `#252525` |
| Borders | `#333`, `#444` |
| Primary text | `#f5f5f5` |
| Secondary text | `#888` |
| Muted text | `#666` |
| Accent (orange) | `#da7756` |
| Success (green) | `#6bc46a` |

### Modify Colors

Edit the inline styles in layout files or add to `static/css/custom.css`.

---

## File Quick Reference

| To change... | Edit this file |
|--------------|----------------|
| Homepage | `layouts/index.html` |
| About page | `layouts/about/list.html` |
| Blog list | `layouts/posts/list.html` |
| Projects list | `layouts/projects/list.html` |
| Challenge page | `layouts/challenge/list.html` |
| Search page | `layouts/_default/search.html` |
| Navigation | `layouts/partials/menu.html` |
| Footer | `layouts/partials/footer.html` |
| Site config | `hugo.toml` |
| Dynamic data | `data/data.json` |

---

## Deployment

### Netlify
1. Connect GitHub repo
2. Build command: `hugo --minify`
3. Publish directory: `public`

### Vercel
1. Import project
2. Framework: Hugo
3. Build: `hugo --minify`

### GitHub Pages
1. Enable in repo settings
2. Use GitHub Actions workflow for Hugo

---

## Adding New Content Types

To add a new section (e.g., "Tutorials"):

1. Create content folder: `content/tutorials/`
2. Create layout: `layouts/tutorials/list.html`
3. Add to menu in `hugo.toml`
4. Optionally add data to `data/data.json`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Changes not showing | Clear browser cache (Ctrl+Shift+R) |
| Build error | Check JSON syntax in data.json |
| Template error | Check Go template syntax |
| Missing page | Ensure _index.md exists in content folder |
