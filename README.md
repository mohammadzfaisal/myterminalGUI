# Mohammad Faisal - Personal Blog & Portfolio

A modern, fast static site built with Hugo, featuring a dark terminal aesthetic. This project showcases cloud engineering projects, AWS learning journey, and technical blog posts.

**Live Site:** [mohammadzfaisal.netlify.app](https://mohammadzfaisal.netlify.app/)

**Repository:** [github.com/mohammadzfaisal/myterminalGUI](https://github.com/mohammadzfaisal/myterminalGUI)

## Technology Stack

- **Static Site Generator:** Hugo v0.139.4 Extended
- **Theme:** [Terminal](https://github.com/panr/hugo-theme-terminal) (dark theme)
- **Content Management:** Netlify CMS
- **Hosting:** Netlify
- **Version Control:** Git + GitHub
- **CI/CD:** Netlify automated deployments

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Build Process](#build-process)
- [Configuration Guide](#configuration-guide)
- [Theme Customization](#theme-customization)
- [Deployment Guide](#deployment-guide)
- [Netlify CMS Setup](#netlify-cms-setup)
- [Common Tasks](#common-tasks)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [File Reference](#file-reference)
- [Advanced Topics](#advanced-topics)
- [Resources](#resources)
- [Maintenance](#maintenance)
- [License](#license)

---

## Prerequisites

Before you start, you'll need to install the following tools on your computer:

### 1. Hugo Extended (v0.139.4)

Hugo is a static site generator written in Go. You need the **Extended** version because this project uses SCSS (a CSS preprocessor) in the Terminal theme.

**Installation:**

- **Windows:** Download from [Hugo Releases](https://github.com/gohugoio/hugo/releases) (look for `hugo_extended_0.139.4_windows-amd64.zip`)
- **macOS:** `brew install hugo`
- **Linux:** `sudo apt-get install hugo` or download from releases

**Verify Installation:**

```bash
hugo version
```

**Expected Output:**

```
hugo v0.139.4+extended windows/amd64 BuildDate=...
```

The word "extended" must appear in the output. If it doesn't, you have the standard version and need to install the Extended version.

### 2. Git

Git is required for version control and managing the theme as a submodule.

**Installation:**

- **Windows:** [git-scm.com](https://git-scm.com/downloads)
- **macOS:** `brew install git` or comes pre-installed with Xcode
- **Linux:** `sudo apt-get install git`

**Verify Installation:**

```bash
git --version
```

### 3. GitHub Account

You'll need a GitHub account to:
- Clone the repository
- Authenticate with Netlify CMS
- Enable automated deployments

**Sign up:** [github.com](https://github.com)

### 4. Netlify Account (For Deployment)

Netlify provides free hosting with automated deployments from GitHub.

**Sign up:** [netlify.com](https://netlify.com) (you can sign up using your GitHub account)

---

## Getting Started

Follow these steps to set up the project on your local machine.

### Step 1: Clone the Repository

The `--recursive` flag is important because the Terminal theme is included as a Git submodule (a separate repository linked to this project).

```bash
git clone --recursive https://github.com/mohammadzfaisal/myterminalGUI.git
cd myterminalGUI
```

**What happens:** This command downloads the project code and automatically downloads the Terminal theme from its GitHub repository into the `themes/terminal/` folder.

**If you already cloned without `--recursive`:**

```bash
git submodule update --init --recursive
```

This command fetches the theme files separately.

### Step 2: Verify Hugo Installation

Check that Hugo Extended is properly installed:

```bash
hugo version
```

You should see output containing "extended". If not, go back to the Prerequisites section and install Hugo Extended.

### Step 3: Start the Development Server

Hugo includes a built-in development server with live reload. This means when you make changes to your files, the browser automatically refreshes to show the updates.

```bash
hugo server
```

**Expected Output:**

```
Web Server is available at http://localhost:1313/
Press Ctrl+C to stop
```

**To include draft posts (posts with `draft: true` in front matter):**

```bash
hugo server -D
```

**What happens:**
- Hugo builds your site in memory (doesn't create files)
- Starts a local web server on port 1313
- Watches for file changes and automatically rebuilds
- Refreshes your browser when changes are detected

**To stop the server:** Press `Ctrl+C` in your terminal

### Step 4: Make Your First Edit

Let's test the live reload feature:

1. **Open the file:** `content/_index.md` in your text editor
2. **Make a change:** Edit any text in the file
3. **Save the file**
4. **Watch your browser:** It should automatically refresh with your changes

**Example edit:**

```markdown
---
title: "Mohammad Faisal"
---

Hello! Welcome to my updated site.
```

You should see the changes appear instantly in your browser at `http://localhost:1313/`

---

## Project Structure

Understanding the directory structure helps you know where to make changes:

```
faisalblog/
├── archetypes/              # Content templates for new posts
│   ├── default.md          # Default template (TOML format)
│   └── projects.md         # Project-specific template (YAML format)
│
├── assets/                  # Hugo asset pipeline (processed files)
│   └── css/
│       └── extended.css    # CSS overrides for theme customization
│
├── content/                 # Your website content (Markdown files)
│   ├── _index.md           # Homepage content
│   ├── about/              # About page
│   │   └── _index.md       # Editable via Netlify CMS
│   ├── posts/              # Blog posts collection
│   ├── projects/           # Individual project detail pages
│   ├── challenge/          # 100 Days of AWS challenge page
│   ├── search.md           # Search page content
│   └── tags/               # Tag taxonomy pages (auto-generated)
│
├── data/                    # Data files for dynamic content
│   └── data.json           # Central data file for:
│                           #   - Projects (featured on homepage)
│                           #   - Blog metadata
│                           #   - AWS challenge progress (100 days)
│                           #   - About sections (services, certifications, skills)
│
├── layouts/                 # Custom HTML templates (override theme)
│   ├── index.html          # Homepage template
│   ├── about/              # About page templates
│   │   └── list.html
│   ├── posts/              # Blog list and single post templates
│   │   └── list.html
│   ├── projects/           # Projects page templates
│   │   └── list.html
│   ├── challenge/          # Challenge tracker template
│   │   └── list.html
│   ├── partials/           # Reusable components
│   │   ├── header.html     # Site header
│   │   ├── footer.html     # Site footer
│   │   ├── menu.html       # Navigation menu
│   │   ├── mobile-menu.html
│   │   ├── logo.html       # Logo component
│   │   └── head.html       # HTML <head> section
│   ├── _default/           # Default templates for all content
│   │   ├── search.html     # Search results page
│   │   ├── terms.html      # Tag list page
│   │   ├── term.html       # Individual tag page
│   │   └── index.json      # Search index (JSON output)
│   ├── shortcodes/         # Custom shortcodes
│   │   └── recentposts.html
│   ├── 404.html            # Custom 404 error page
│   └── minimal.html        # Alternative minimal layout
│
├── static/                  # Static files (copied as-is, not processed)
│   ├── admin/              # Netlify CMS admin interface
│   │   ├── config.yml      # CMS configuration
│   │   └── index.html      # CMS login page
│   ├── images/             # Images and media
│   │   ├── profile.jpg     # Profile photo
│   │   └── newlogo.png     # Site logo
│   ├── style.css           # Additional CSS
│   ├── minimal-style.css   # Minimal theme styles
│   └── _redirects          # Netlify redirect rules
│
├── themes/                  # Hugo themes directory
│   └── terminal/           # Terminal theme (Git submodule)
│                           # This is a separate Git repository
│
├── public/                  # Generated site output (Git ignored)
│                           # Created when you run `hugo` command
│                           # Contains the final HTML, CSS, JS
│
├── .gitignore              # Files to ignore in version control
├── .gitmodules             # Git submodule configuration
├── hugo.toml               # Main Hugo configuration file
├── netlify.toml            # Netlify deployment configuration
├── SITE_DOCS.md            # Internal technical documentation
└── README.md               # This file
```

### Key Directories Explained

**`/content/`** - Your website pages and posts in Markdown format
- Use this for blog posts, pages, and long-form content
- Each `.md` file becomes a page on your site
- Organized by content type (posts, projects, etc.)

**`/data/data.json`** - Structured data for dynamic content
- Projects with badges and links
- AWS challenge progress (100 days tracking)
- About page sections (skills, certifications, services)
- Use this when you need structured, repeating data

**`/layouts/`** - HTML templates that control how pages look
- Overrides the theme's default templates
- Uses Go templating language
- Customize without modifying the theme directly

**`/static/`** - Files copied directly to the output without processing
- Images, fonts, CSS files
- Admin interface for Netlify CMS
- Anything that doesn't need Hugo processing

**`/themes/terminal/`** - The base theme (Git submodule)
- Don't edit files here directly
- Updates are pulled from the theme's repository
- Customize by overriding in `/layouts/` or `/assets/css/`

**`/public/`** - Generated website (appears after running `hugo`)
- This folder is automatically created
- Contains the final static HTML/CSS/JS
- Deployed to Netlify
- Ignored by Git (in `.gitignore`)

---

## Content Management

You have two ways to manage content: direct file editing (for developers) or Netlify CMS (for non-technical users).

### Option A: Direct File Editing (Recommended for Developers)

#### Creating a New Blog Post

1. **Create a new Markdown file** in `/content/posts/`

```bash
# Filename format: content/posts/my-new-post.md
```

2. **Add front matter** (metadata at the top of the file)

```markdown
---
title: "Getting Started with AWS Lambda"
date: 2025-12-29
description: "A beginner's guide to serverless computing with AWS Lambda"
tags: ["aws", "serverless", "lambda", "cloud"]
draft: false
---

Your blog post content starts here.

## Introduction

AWS Lambda is a serverless compute service...

## Key Concepts

1. Functions
2. Triggers
3. Runtime environments

## Conclusion

Lambda makes it easy to...
```

**Front Matter Fields:**
- `title` - Post title (required)
- `date` - Publish date in YYYY-MM-DD format (required)
- `description` - Short summary for meta tags and lists (optional)
- `tags` - Array of tags for categorization (optional)
- `draft` - Set to `true` to hide from production, `false` to publish (optional, defaults to false)

3. **Preview locally**

```bash
hugo server -D
```

Visit `http://localhost:1313/posts/` to see your new post.

4. **Publish** by setting `draft: false` and committing to Git

#### When to Use Markdown Files vs. data.json

**Use Markdown files (`/content/posts/`) when:**
- Writing blog posts with rich content
- Need full Markdown formatting (headings, lists, code blocks, images)
- Content is lengthy (more than a few paragraphs)
- Want individual pages for each item

**Use data.json when:**
- Managing structured, repeating data (projects, skills, certifications)
- Content is short and data-oriented
- Need to display items in lists/grids on existing pages
- Using Netlify CMS for easier editing

### Option B: Netlify CMS (Recommended for Non-Technical Users)

Netlify CMS provides a user-friendly web interface for managing content without editing code.

#### Accessing the CMS

1. **Local development:**

```bash
hugo server
```

Visit `http://localhost:1313/admin`

2. **Production:**

Visit `https://mohammadzfaisal.netlify.app/admin`

#### Logging In

- Click "Login with GitHub"
- Authorize the application
- You're redirected to the CMS dashboard

#### Collections Available

The CMS manages these content types:

1. **Challenge Manager** - Track 100 Days of AWS progress
   - Day number, title, status (completed, In Progress, locked)

2. **Projects Manager** - Portfolio projects
   - Title, description, GitHub URL, demo URL, technologies (badges)

3. **Blog Posts Manager** - Blog metadata
   - Title, date, category, description

4. **Pages Manager** - About page content
   - Body text (Markdown editor)

5. **About Sections** - Services, certifications, skills
   - Structured data for About page sections

#### Creating Content via CMS

1. **Select a collection** (e.g., "Projects Manager")
2. **Click "New Projects Manager"**
3. **Fill in the fields** using the form
4. **Click "Save"** - saves draft to Git
5. **Click "Publish"** - commits to GitHub and triggers deployment

**How it works behind the scenes:**
- CMS edits the `data/data.json` file
- Changes are committed to GitHub
- GitHub push triggers Netlify rebuild
- Your site updates in 1-2 minutes

### Data-Driven Content (data.json)

The `/data/data.json` file contains structured data for multiple sections of the site.

#### Structure Overview

```json
{
  "projects": [],           // Featured projects (homepage + projects page)
  "blogs": [],              // Blog metadata (alternative to Markdown files)
  "about_services": [],     // "What I Do" section on About page
  "about_certifications": [], // Certifications with provider and year
  "about_skills": [],       // Skills organized by category
  "aws_challenge": []       // 100 days challenge tracking
}
```

#### Example: Adding a New Project

Edit `/data/data.json`:

```json
{
  "projects": [
    {
      "id": "multi-region-vpc",
      "title": "Multi-Region VPC Peering",
      "description": "Automated global infrastructure rollout using Terraform modules. Provisions VPCs across AWS regions with peering connections, route tables, and security groups.",
      "icon": "",
      "featured": true,
      "github": "https://github.com/mohammadzfaisal/multi-region-vpc",
      "demo": "",
      "badges": [
        { "name": "AWS", "color": "#ff9900" },
        { "name": "Terraform", "color": "#7b42bc" },
        { "name": "Networking", "color": "#0066cc" }
      ]
    }
  ]
}
```

**Field Explanations:**
- `id` - Unique identifier (used in URLs, use lowercase-with-hyphens)
- `title` - Project name
- `description` - Detailed description (supports multiple sentences)
- `icon` - Leave empty (emoji support disabled per Claude Code theme)
- `featured` - `true` shows on homepage, `false` hides from homepage
- `github` - GitHub repository URL (leave empty string if none)
- `demo` - Live demo URL (leave empty string if none)
- `badges` - Array of technology tags with name and hex color

#### Example: Updating Challenge Status

Find the day in the `aws_challenge` array and update the status:

```json
{
  "aws_challenge": [
    {
      "day": "001",
      "title": "WHY 100 DAYS OF AWS?",
      "status": "completed"
    },
    {
      "day": "002",
      "title": "Setting Up AWS Account",
      "status": "In Progress"
    },
    {
      "day": "003",
      "title": "IAM Fundamentals",
      "status": "locked"
    }
  ]
}
```

**Status Options:**
- `"completed"` - Green checkmark, day is finished
- `"In Progress"` - Orange indicator, currently working on it
- `"locked"` - Gray/dimmed, not yet started
- `"active"` - Alternative status (check template for styling)

---

## Build Process

Hugo builds your site by processing Markdown, templates, and data files into static HTML.

### Development Build

When you run `hugo server`, Hugo performs an in-memory build:

```bash
hugo server
```

**What happens:**
1. Hugo reads all content files (`/content/`)
2. Loads data from `/data/data.json`
3. Processes templates from `/layouts/` and `/themes/terminal/layouts/`
4. Compiles SCSS to CSS (requires Extended version)
5. Generates pages in memory (no files created)
6. Starts web server on `http://localhost:1313/`
7. Watches for file changes
8. Rebuilds automatically when you save files
9. Refreshes browser via live reload

**Development flags:**

```bash
hugo server -D              # Include draft posts
hugo server --disableFastRender  # Rebuild everything on change
hugo server -p 1314         # Use different port
```

### Production Build

When you're ready to deploy, run a production build:

```bash
hugo
```

**What happens:**
1. Hugo reads all content and data
2. Processes templates
3. Compiles and minifies CSS/JS
4. Generates static HTML files
5. Creates `/public/` directory
6. Outputs all files to `/public/`

**Result:** The `/public/` folder contains your complete website ready for deployment.

### Build with Optimization

The deployment uses these flags for optimization:

```bash
hugo --minify --gc
```

**Flags explained:**

- `--minify` - Minifies HTML, CSS, JS, JSON, SVG (reduces file size)
  - Removes whitespace, comments, unnecessary characters
  - Faster page loads for visitors

- `--gc` - Garbage collection (removes unused cache files)
  - Cleans up `/resources/_gen/` directory
  - Keeps build environment clean

### Build Output

After running `hugo`, the `/public/` directory contains:

```
public/
├── index.html              # Homepage
├── posts/
│   ├── index.html         # Blog list page
│   └── my-post/
│       └── index.html     # Individual post
├── about/
│   └── index.html         # About page
├── css/
│   └── style.min.css      # Minified CSS
├── js/
│   └── script.min.js      # Minified JavaScript
├── images/                # Copied from /static/images/
├── sitemap.xml            # Auto-generated sitemap for SEO
├── index.json             # Search index
└── 404.html               # Error page
```

### Checking for Build Errors

If the build fails, Hugo provides error messages:

```bash
hugo --verbose
```

**Common build errors:**

1. **JSON syntax error in data.json**
   - Error: `error unmarshaling data.json`
   - Solution: Validate JSON syntax at [jsonlint.com](https://jsonlint.com)

2. **Template syntax error**
   - Error: `execute of template failed`
   - Solution: Check Go template syntax in `/layouts/` files

3. **Missing front matter**
   - Error: `failed to unmarshal YAML`
   - Solution: Check YAML/TOML syntax in Markdown front matter

4. **SCSS compilation error** (Extended version required)
   - Error: `SCSS processing failed`
   - Solution: Install Hugo Extended

---

## Configuration Guide

### hugo.toml (Main Configuration)

This file controls your entire site's behavior and settings.

**Location:** `/hugo.toml`

#### Basic Settings

```toml
baseurl = "https://mohammadzfaisal.netlify.app/"
# The root URL of your site - used for generating absolute links

languageCode = "en-us"
# Language code for HTML lang attribute and RSS

theme = "terminal"
# Theme name (must match folder in /themes/)

pagination.pagerSize = 5
# Number of posts per page on list pages
```

#### Output Formats

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

**What this means:**
- `HTML` - Standard HTML pages
- `RSS` - RSS feed for blog readers
- `JSON` - Search index (enables site search)

#### Taxonomies

```toml
[taxonomies]
tag = "tags"
```

This enables the tag system. When you add `tags: ["aws", "terraform"]` to a post's front matter, Hugo automatically creates:
- `/tags/` - List of all tags
- `/tags/aws/` - All posts with "aws" tag
- `/tags/terraform/` - All posts with "terraform" tag

#### Syntax Highlighting

```toml
[markup.highlight]
  noClasses = false
```

Enables CSS-based syntax highlighting for code blocks using Chroma.

#### Theme Parameters

```toml
[params]
  contentTypeName = "posts"
  # Default content type for the homepage list

  showMenuItems = 7
  # Maximum menu items to display

  showLanguageSelector = false
  # Hide language switcher (single language site)

  fullWidthTheme = false
  # Don't use full browser width

  centerTheme = true
  # Center the content with max-width

  autoCover = true
  # Automatically use cover.(jpg|png|webp) if found

  showLastUpdated = true
  # Show last updated date on posts
```

#### Site Metadata

```toml
[languages]
  [languages.en]
    languageName = "English"
    title = "Mohammad Faisal"

    [languages.en.params]
      subtitle = "Cloud Engineer | AWS Developer | Blogger"
      owner = "Mohammad Faisal"
      keywords = "cloud engineer, AWS, DevOps, terraform, kubernetes, infrastructure as code, cloud architecture, serverless, EKS, docker, CI/CD, automation"
      copyright = ""
```

**SEO Impact:**
- `title` - Browser tab title, search results
- `subtitle` - Site tagline
- `keywords` - Meta keywords for SEO (less important for modern search engines)

#### Logo Configuration

```toml
      [languages.en.params.logo]
        logoText = "Mohammad Faisal"
        logoHomeLink = "/"
        subtitle = "Cloud Engineer | AWS Developer | Blogger"
```

Controls the header logo and subtitle.

#### Navigation Menu

```toml
      [languages.en.menu]
        [[languages.en.menu.main]]
          identifier = "home"
          name = "HOME"
          url = "/"
          weight = 1
        [[languages.en.menu.main]]
          identifier = "about"
          name = "ABOUT"
          url = "/about"
          weight = 2
        [[languages.en.menu.main]]
          identifier = "blog"
          name = "BLOG"
          url = "/posts"
          weight = 3
        [[languages.en.menu.main]]
          identifier = "projects"
          name = "PROJECTS"
          url = "/projects"
          weight = 4
        [[languages.en.menu.main]]
          identifier = "challenge"
          name = "100 DAYS"
          url = "/challenge"
          weight = 5
```

**Menu Fields:**
- `identifier` - Unique ID (internal use)
- `name` - Display text (what visitors see)
- `url` - Link destination
- `weight` - Display order (lower numbers appear first)

**To add a new menu item:**

```toml
        [[languages.en.menu.main]]
          identifier = "contact"
          name = "CONTACT"
          url = "/contact"
          weight = 6
```

### netlify.toml (Deployment Configuration)

This file tells Netlify how to build and deploy your site.

**Location:** `/netlify.toml`

```toml
[build]
  publish = "public"
  # Directory containing the built site

  command = "hugo --minify --gc"
  # Command Netlify runs to build your site

[build.environment]
  HUGO_VERSION = "0.139.4"
  # Hugo version to use (matches your local version)

  HUGO_EXTENDED = "true"
  # Use Hugo Extended (required for SCSS)

  HUGO_ENV = "production"
  # Sets environment to production
```

**Why version pinning matters:**
- Ensures consistent builds across environments
- Prevents breaking changes from new Hugo versions
- Your local version should match this version

#### Context-Specific Environments

```toml
[context.production.environment]
  HUGO_VERSION = "0.139.4"
  HUGO_EXTENDED = "true"
  HUGO_ENV = "production"
```

Production context applies when deploying to your main site.

```toml
[context.deploy-preview.environment]
  HUGO_VERSION = "0.139.4"
  HUGO_EXTENDED = "true"
```

Deploy preview context applies to pull request previews.

---

## Theme Customization

The Terminal theme provides the base styling and layout. You can customize it without modifying the theme files directly.

### Understanding the Terminal Theme

**What it provides:**
- Dark terminal/hacker aesthetic
- Responsive design (mobile-friendly)
- Code syntax highlighting
- Monospace font (Fira Code)
- Built-in shortcodes
- Fast performance

**Theme repository:** [github.com/panr/hugo-theme-terminal](https://github.com/panr/hugo-theme-terminal)

**How it's included:**
- As a Git submodule (separate repository)
- Located in `/themes/terminal/`
- Don't edit theme files directly (updates would overwrite changes)

### Customization Methods

#### Method 1: CSS Overrides

Create or edit `/assets/css/extended.css`:

```css
:root {
  --background: #1e1e1e;     /* Main background color */
  --accent: #da7756;         /* Accent color (links, highlights) */
}
```

This file is processed after the theme's CSS, so your rules override the theme's defaults.

#### Method 2: Layout Overrides

Hugo uses a template lookup order. If you create a file in `/layouts/`, it takes precedence over the theme's version.

**Example:** To customize the header:

1. **Theme's file:** `/themes/terminal/layouts/partials/header.html`
2. **Your override:** `/layouts/partials/header.html`

Hugo uses your version automatically.

### Current Color Scheme (Claude Code Theme)

The site uses a custom dark theme:

| Element | Color | Usage |
|---------|-------|-------|
| Background | `#1e1e1e` | Main background |
| Card backgrounds | `#252525` | Content cards, sections |
| Borders | `#333`, `#444` | Dividers, outlines |
| Primary text | `#f5f5f5` | Main content text |
| Secondary text | `#888` | Metadata, captions |
| Muted text | `#666` | Disabled, placeholder text |
| Accent (orange) | `#da7756` | Links, CTAs, highlights |
| Success (green) | `#6bc46a` | Success states, checkmarks |

### Example Customizations

#### Changing Background Color

Edit `/assets/css/extended.css`:

```css
:root {
  --background: #2d2d2d;  /* Lighter dark background */
}
```

Save and refresh your browser - changes appear instantly with `hugo server` running.

#### Modifying the Header

Copy `/themes/terminal/layouts/partials/header.html` to `/layouts/partials/header.html`:

```bash
# Windows
mkdir layouts\partials
copy themes\terminal\layouts\partials\header.html layouts\partials\header.html

# macOS/Linux
mkdir -p layouts/partials
cp themes/terminal/layouts/partials/header.html layouts/partials/header.html
```

Now edit `/layouts/partials/header.html` with your changes. The theme file remains untouched.

#### Adding Custom Fonts

Add to `/assets/css/extended.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

### Updating the Theme

When the Terminal theme releases updates:

```bash
cd themes/terminal
git pull origin main
cd ../..
git add themes/terminal
git commit -m "Update Terminal theme"
```

**Testing after update:**

```bash
hugo server
```

Check that everything still works. If something breaks, revert:

```bash
cd themes/terminal
git checkout <previous-commit-hash>
cd ../..
```

---

## Deployment Guide

This section walks you through deploying your site to Netlify from scratch.

### Prerequisites for Deployment

- GitHub account with repository access
- Netlify account (free tier is sufficient)
- Code pushed to GitHub main branch

### Initial Netlify Setup

#### Step 1: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Netlify to access your GitHub account

**Why GitHub auth:** Allows Netlify to access your repository and set up automated deployments.

#### Step 2: Import Your Repository

1. From Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Click **"GitHub"**
3. Authorize Netlify (if prompted)
4. Search for `myterminalGUI` repository
5. Click on the repository

#### Step 3: Configure Build Settings

Netlify shows a configuration screen. Set these values:

**Branch to deploy:**
```
main
```

**Build command:**
```
hugo --minify --gc
```

**Publish directory:**
```
public
```

**Environment variables** (click "Show advanced" → "New variable"):

| Key | Value |
|-----|-------|
| `HUGO_VERSION` | `0.139.4` |
| `HUGO_EXTENDED` | `true` |
| `HUGO_ENV` | `production` |

**Why these settings:**
- `hugo --minify --gc` - Optimizes the build (smaller files, faster loading)
- `public` - Where Hugo outputs the built site
- Environment variables ensure Netlify uses the correct Hugo version and features

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Netlify assigns a random subdomain (e.g., `graceful-unicorn-123abc.netlify.app`)
3. Build starts automatically
4. Wait 1-2 minutes for the build to complete

**Monitoring the build:**

1. Click on the deploy (yellow "Building" indicator)
2. View real-time build logs
3. Look for errors (red text)
4. Successful builds show "Published" status

**Build log example:**

```
12:34:56 PM: Build ready to start
12:34:58 PM: Cloning repository...
12:35:00 PM: Installing Hugo 0.139.4...
12:35:05 PM: Running build command: hugo --minify --gc
12:35:10 PM: Total in 5432 ms
12:35:12 PM: Site is live
```

#### Step 5: Custom Domain (Optional)

**Using the Netlify subdomain:**

Your site is live at `https://[random-name].netlify.app`

**Setting a custom domain:**

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `mohammadzfaisal.com`)
4. Follow DNS configuration instructions
5. Netlify provides free HTTPS certificates automatically

**Changing the Netlify subdomain:**

1. **Site settings** → **Domain management** → **Options** → **Edit site name**
2. Change to `mohammadzfaisal`
3. Site becomes `https://mohammadzfaisal.netlify.app`

### Continuous Deployment (How It Works)

Once connected, deployments happen automatically:

```
┌─────────────────┐
│  Make Changes   │
│  (Edit files)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Commit to Git  │
│  git commit -m  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Push to GitHub  │
│   git push      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Netlify Webhook │
│   (automatic)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Netlify Build  │
│ hugo --minify   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Deploy to CDN  │
│  (1-2 minutes)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Site Updated  │
│   ✓ Live        │
└─────────────────┘
```

**Timeline:**
1. You push to GitHub - **0:00**
2. Netlify detects the push - **0:05**
3. Build starts - **0:10**
4. Build completes - **1:00**
5. Site deployed - **1:30**
6. CDN updated globally - **2:00**

**No manual intervention required!** Every push to `main` triggers a deployment.

### Deploy Previews (Pull Requests)

Netlify can create preview deployments for pull requests:

1. **Create a branch:**

```bash
git checkout -b feature/new-post
```

2. **Make changes and push:**

```bash
git add .
git commit -m "Add new blog post about Kubernetes"
git push origin feature/new-post
```

3. **Create pull request on GitHub**

4. **Netlify automatically:**
   - Builds the branch
   - Deploys to a preview URL (e.g., `deploy-preview-123--mohammadzfaisal.netlify.app`)
   - Posts the preview URL as a comment on the PR

5. **Review the preview before merging**

6. **Merge to main** → production deployment happens automatically

**Benefits:**
- Test changes before they go live
- Share previews with others for feedback
- Catch errors before production

### Manual Deploys

To deploy without pushing to GitHub:

1. Go to Netlify dashboard
2. **Deploys** tab
3. Drag and drop the `/public/` folder onto the page

**When to use:**
- Testing a build locally before committing
- Emergency hotfix deployment
- Bypassing the Git workflow temporarily

---

## Netlify CMS Setup

Netlify CMS provides a user-friendly admin interface for managing content.

### Enabling CMS Access

#### Step 1: Enable Netlify Identity

1. Go to Netlify dashboard
2. Navigate to your site
3. Click **"Identity"** in the top menu
4. Click **"Enable Identity"**

**What this does:** Activates Netlify's authentication service for the CMS.

#### Step 2: Enable Git Gateway

1. Still in Identity settings
2. Scroll to **"Services"** → **"Git Gateway"**
3. Click **"Enable Git Gateway"**

**What this does:** Allows Netlify CMS to commit to GitHub on behalf of authenticated users without requiring their GitHub credentials.

#### Step 3: Configure GitHub OAuth (Alternative)

If you prefer GitHub authentication:

1. **Identity** → **"Settings and usage"**
2. Click **"External providers"**
3. Click **"Add provider"** → **"GitHub"**
4. No additional configuration needed (uses Netlify's proxy)

#### Step 4: Invite Users

1. **Identity** → **"Invite users"**
2. Enter email address
3. User receives invitation email
4. They set a password and can access `/admin`

### Using the CMS

#### Accessing the Admin Interface

**Local development:**
```
http://localhost:1313/admin
```

**Production:**
```
https://mohammadzfaisal.netlify.app/admin
```

#### Logging In

1. Visit `/admin`
2. Click **"Login with GitHub"** (or **"Login with Netlify Identity"**)
3. Enter credentials
4. Redirected to CMS dashboard

#### CMS Dashboard Overview

**Collections (left sidebar):**
- Challenge Manager - 100 Days tracking
- Projects Manager - Portfolio projects
- Blog Posts Manager - Blog metadata
- Pages - About page content
- About Sections - Services, certifications, skills

**Workflow:**
1. Select a collection
2. Click "New [Collection Name]"
3. Fill in form fields
4. Click "Save" (draft)
5. Click "Publish" (commits to Git)

#### Creating Content

**Example: Adding a New Project**

1. Click **"Projects Manager"** in sidebar
2. Click **"New Projects Manager"**
3. Fill in fields:
   - **Title:** "Serverless API with API Gateway"
   - **Description:** "RESTful API using AWS Lambda and API Gateway..."
   - **ID:** "serverless-api"
   - **Featured:** Check the box
   - **GitHub URL:** `https://github.com/username/serverless-api`
   - **Demo URL:** (leave empty if none)
   - **Badges:** Click "Add Badges"
     - Name: "AWS", Color: "#ff9900"
     - Name: "Lambda", Color: "#ff9900"
     - Name: "API Gateway", Color: "#c7131f"
4. Click **"Save"**
5. Click **"Publish"** → **"Publish now"**

**What happens behind the scenes:**
1. CMS adds the project to `/data/data.json`
2. Creates a Git commit
3. Pushes to GitHub
4. Triggers Netlify deployment
5. Site updates in 1-2 minutes

#### Editing Existing Content

1. Select collection
2. Click on the item to edit
3. Make changes
4. Click **"Save"**
5. Click **"Publish"**

#### Deleting Content

1. Select collection
2. Click on item
3. Click **"Delete"** (trash icon)
4. Confirm deletion
5. Click **"Publish"**

### CMS Configuration

The CMS behavior is controlled by `/static/admin/config.yml`:

```yaml
backend:
  name: github
  repo: mohammadzfaisal/myterminalGUI
  branch: main

media_folder: "static/images"
public_folder: "/images"

collections:
  - name: "challenge"
    label: "Challenge Manager"
    files:
      - file: "data/data.json"
        label: "AWS Challenge"
        name: "aws_challenge"
        fields:
          - label: "AWS Challenge Days"
            name: "aws_challenge"
            widget: "list"
            fields:
              - {label: "Day", name: "day", widget: "string"}
              - {label: "Title", name: "title", widget: "string"}
              - {label: "Status", name: "status", widget: "select", options: ["completed", "In Progress", "locked"]}
```

**Key settings:**
- `backend.repo` - GitHub repository
- `media_folder` - Where uploaded images are stored
- `collections` - Content types managed by CMS

**To add a new collection, edit this file and redeploy.**

---

## Common Tasks

Quick guides for frequent operations.

### Task 1: Add a New Blog Post

#### Using Markdown Files

```bash
# Create new file
touch content/posts/my-new-post.md
```

Edit the file:

```markdown
---
title: "Understanding AWS VPC Networking"
date: 2025-12-29
description: "Deep dive into VPC subnets, route tables, and internet gateways"
tags: ["aws", "networking", "vpc"]
draft: false
---

Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section...

## Subnets

Subnets divide your VPC into smaller network segments...

## Route Tables

Route tables control traffic routing between subnets...
```

**Preview:**

```bash
hugo server -D
```

Visit `http://localhost:1313/posts/my-new-post/`

**Publish:**

```bash
git add content/posts/my-new-post.md
git commit -m "Add VPC networking blog post"
git push origin main
```

#### Using Netlify CMS

1. Visit `/admin`
2. **Blog Posts Manager** → **New Blog Posts Manager**
3. Fill in:
   - Title: "Understanding AWS VPC Networking"
   - Date: 2025-12-29
   - Category: "AWS"
   - Description: "Deep dive into VPC subnets..."
4. **Save** → **Publish**

### Task 2: Add a New Project

Edit `/data/data.json`:

```json
{
  "projects": [
    {
      "id": "terraform-modules",
      "title": "Reusable Terraform Modules",
      "description": "Collection of production-ready Terraform modules for AWS infrastructure including VPC, EKS, RDS, and S3.",
      "icon": "",
      "featured": true,
      "github": "https://github.com/mohammadzfaisal/terraform-modules",
      "demo": "",
      "badges": [
        { "name": "Terraform", "color": "#7b42bc" },
        { "name": "AWS", "color": "#ff9900" },
        { "name": "IaC", "color": "#0066cc" }
      ]
    }
  ]
}
```

**Required fields:**
- `id` - Unique, lowercase-with-hyphens
- `title` - Display name
- `description` - Summary text

**Optional fields:**
- `featured` - `true` shows on homepage
- `github` - Repository URL (use `""` if none)
- `demo` - Live demo URL (use `""` if none)
- `badges` - Technology tags

**Badge color ideas:**
- AWS: `#ff9900`
- Terraform: `#7b42bc`
- Kubernetes: `#326ce5`
- Docker: `#2496ed`
- Python: `#3776ab`
- Go: `#00add8`
- JavaScript: `#f7df1e`

### Task 3: Update Challenge Progress

Edit `/data/data.json` → find the day:

```json
{
  "aws_challenge": [
    {
      "day": "005",
      "title": "EC2 Instance Types",
      "status": "completed"
    }
  ]
}
```

Change `status` to:
- `"completed"` - Finished
- `"In Progress"` - Currently working
- `"locked"` - Not started

**Save and commit:**

```bash
git add data/data.json
git commit -m "Complete day 5 of AWS challenge"
git push origin main
```

### Task 4: Modify Navigation Menu

Edit `/hugo.toml`:

```toml
        [[languages.en.menu.main]]
          identifier = "resources"
          name = "RESOURCES"
          url = "/resources"
          weight = 6
```

**Fields:**
- `identifier` - Internal ID (unique)
- `name` - Display text (uppercase for consistency)
- `url` - Link destination
- `weight` - Order (6 = after "100 DAYS" which is 5)

**External link:**

```toml
        [[languages.en.menu.main]]
          identifier = "github"
          name = "GITHUB"
          url = "https://github.com/mohammadzfaisal"
          weight = 7
```

### Task 5: Update About Page

#### Content

Edit `/content/about/_index.md`:

```markdown
---
title: "About Me"
description: "Cloud Engineer specializing in AWS infrastructure"
---

I'm a Cloud Engineer with 5+ years of experience...
```

#### Certifications, Skills, Services

Edit `/data/data.json` → find the relevant array:

**Add a certification:**

```json
{
  "about_certifications": [
    {
      "name": "AWS Solutions Architect Associate",
      "provider": "Amazon Web Services",
      "year": "2024"
    }
  ]
}
```

**Add a skill:**

```json
{
  "about_skills": [
    {
      "category": "Infrastructure as Code",
      "group": "Infrastructure",
      "items": ["Terraform", "CloudFormation", "Pulumi"]
    }
  ]
}
```

### Task 6: Update the Theme

Pull the latest theme changes:

```bash
cd themes/terminal
git pull origin main
cd ../..
```

**Commit the update:**

```bash
git add themes/terminal
git commit -m "Update Terminal theme to latest version"
git push origin main
```

**Testing after update:**

```bash
hugo server
```

Browse your site to ensure nothing broke.

**Reverting if needed:**

```bash
cd themes/terminal
git log
# Find the previous commit hash
git checkout <commit-hash>
cd ../..
```

---

## Development Workflow

### Daily Development Cycle

**Morning routine:**

```bash
# 1. Pull latest changes from GitHub
git pull origin main

# 2. Start Hugo development server
hugo server
```

**Making changes:**

1. Edit files in your code editor
2. Save files
3. Browser auto-refreshes
4. Verify changes look correct

**Committing changes:**

```bash
# 1. Check what changed
git status

# 2. Add files
git add .

# 3. Commit with descriptive message
git commit -m "Add blog post about Docker networking"

# 4. Push to GitHub
git push origin main

# 5. Verify deployment on Netlify
# Visit https://app.netlify.com/sites/mohammadzfaisal/deploys
```

**End of day:**

```bash
# Stop Hugo server (Ctrl+C)
# Ensure all changes are committed and pushed
git status  # Should show "working tree clean"
```

### Best Practices

#### Commit Messages

**Good commit messages:**

```
Add blog post about Kubernetes autoscaling
Update project badges and descriptions
Fix typo in About page
Update challenge status: complete day 10
Add new certification to About page
```

**Bad commit messages:**

```
Update
Fix stuff
Changes
asdf
.
```

**Format:**
- Start with a verb (Add, Update, Fix, Remove)
- Be specific about what changed
- Keep under 50 characters for the summary
- Use present tense

#### Branching Strategy

**For small changes (typos, content updates):**

Work directly on `main`:

```bash
git add .
git commit -m "Fix typo in blog post"
git push origin main
```

**For larger changes (new features, major redesigns):**

Create a branch:

```bash
# Create and switch to new branch
git checkout -b feature/dark-mode-toggle

# Make changes...

# Commit
git add .
git commit -m "Add dark mode toggle to header"

# Push branch
git push origin feature/dark-mode-toggle

# Create pull request on GitHub
# Review deploy preview
# Merge when ready
```

#### Testing Before Deploying

**Local testing checklist:**

1. Run `hugo server`
2. Check homepage
3. Navigate to all main pages (About, Blog, Projects, Challenge)
4. Test responsive design (resize browser window)
5. Check browser console for errors (F12 → Console)
6. Verify all links work
7. Test search functionality

**Build test:**

```bash
hugo --minify --gc
```

If this succeeds, Netlify build should succeed.

#### Using Deploy Previews

For major changes:

1. Create a branch
2. Push to GitHub
3. Create pull request
4. Wait for Netlify deploy preview
5. Share preview URL with others for feedback
6. Make revisions based on feedback
7. Merge when approved

**Benefits:**
- Test in production environment
- Get feedback before going live
- Catch mobile/browser-specific issues

---

## Troubleshooting

Common issues and their solutions.

### Theme Not Found Error

**Error message:**

```
Error: module "terminal" not found
```

**Cause:** Git submodule (theme) wasn't cloned.

**Solution:**

```bash
git submodule update --init --recursive
```

**Explanation:** The Terminal theme lives in a separate Git repository. The `--recursive` flag tells Git to download it. If you cloned without this flag, the `themes/terminal/` folder is empty.

**Verification:**

```bash
ls themes/terminal
```

Should show theme files, not an empty directory.

---

### SCSS Features Not Available

**Error message:**

```
Error: SCSS processing not available
```

**Cause:** Using standard Hugo instead of Hugo Extended.

**Solution:** Install Hugo Extended.

**Check your version:**

```bash
hugo version
```

**Should show:**

```
hugo v0.139.4+extended windows/amd64
```

The word "extended" must appear. If not, download Hugo Extended from [Hugo Releases](https://github.com/gohugoio/hugo/releases).

---

### Changes Not Showing on Site

#### Cause 1: Browser Cache

**Solution:** Hard refresh the page.

- **Windows/Linux:** `Ctrl + Shift + R` or `Ctrl + F5`
- **macOS:** `Cmd + Shift + R`

**Alternative:** Open in private/incognito window.

#### Cause 2: Build Failed on Netlify

**Check build logs:**

1. Go to [app.netlify.com](https://app.netlify.com)
2. Select your site
3. **Deploys** tab
4. Click the failed deploy (red X)
5. Read error message

**Common build failures:**

- JSON syntax error in `data.json`
- Template syntax error
- Missing environment variable

#### Cause 3: Wrong Branch Deployed

**Check Netlify settings:**

1. **Site settings** → **Build & deploy** → **Continuous Deployment**
2. **Deploy contexts** → **Production branch**
3. Should be `main`

If you pushed to a different branch, either merge to `main` or change the production branch setting.

---

### Build Fails with JSON Parse Error

**Error message:**

```
Error parsing data.json: invalid character '}' looking for beginning of value
```

**Cause:** Invalid JSON syntax in `/data/data.json`.

**Solution:**

1. **Validate JSON online:**
   - Copy entire `data.json` contents
   - Paste into [jsonlint.com](https://jsonlint.com)
   - Click "Validate JSON"

2. **Common JSON mistakes:**
   - Missing comma between items: `{"a": 1} {"b": 2}` ❌ → `{"a": 1}, {"b": 2}` ✓
   - Trailing comma: `{"items": [1, 2, 3,]}` ❌ → `{"items": [1, 2, 3]}` ✓
   - Unescaped quotes: `"He said "hello""` ❌ → `"He said \"hello\""` ✓

3. **Use a JSON-aware editor:**
   - VS Code with JSON extension
   - Enable format-on-save

**Prevention:** Use a JSON linter in your editor.

---

### Hugo Server Port Already in Use

**Error message:**

```
Error: listen tcp :1313: bind: address already in use
```

**Cause:** Previous Hugo server still running.

**Solution 1: Kill the process**

**Windows:**

```cmd
netstat -ano | findstr :1313
taskkill /PID <process-id> /F
```

**macOS/Linux:**

```bash
lsof -ti:1313 | xargs kill -9
```

**Solution 2: Use a different port**

```bash
hugo server -p 1314
```

Visit `http://localhost:1314/`

---

### Netlify CMS Login Not Working

**Error message:**

```
Failed to authenticate with GitHub
```

**Cause:** GitHub OAuth not configured.

**Solution:**

1. Go to Netlify dashboard → your site
2. **Identity** → **Enable Identity**
3. **Services** → **Git Gateway** → **Enable Git Gateway**
4. Try logging in again at `/admin`

**Alternative authentication:**

1. **Identity** → **Settings and usage**
2. **External providers** → **Add provider** → **GitHub**
3. No additional configuration needed

---

### Changes Pushed But Site Not Updating

**Symptoms:**
- Pushed to GitHub
- No new deploy on Netlify
- Site shows old content

**Cause:** Deployment not triggered.

**Solutions:**

1. **Check deploy status:**
   - Netlify dashboard → **Deploys**
   - Look for new deploy triggered by your commit
   - If missing, deployment hook failed

2. **Trigger manual deploy:**
   - **Deploys** → **Trigger deploy** → **Deploy site**

3. **Check build hooks:**
   - **Site settings** → **Build & deploy** → **Build hooks**
   - Ensure GitHub webhook exists

4. **Verify branch:**
   - Check you pushed to `main` branch
   - `git branch` to see current branch
   - `git push origin main` to push to main

**Check deploy history:**

Look at the timestamp of the latest deploy vs. your commit time. If deploy is older, it didn't trigger.

---

### Images Not Loading

**Symptoms:**
- Broken image icons
- 404 errors in browser console

**Causes and solutions:**

1. **Wrong path:**
   - Images must be in `/static/images/`
   - Reference as `/images/photo.jpg` (not `/static/images/photo.jpg`)

2. **Case sensitivity:**
   - Linux servers are case-sensitive
   - `photo.jpg` ≠ `Photo.jpg`
   - Keep filenames lowercase

3. **File not committed:**
   - Check Git status: `git status`
   - Add if missing: `git add static/images/photo.jpg`

4. **Netlify CMS upload:**
   - Images uploaded via CMS go to `static/images/`
   - Referenced as `/images/filename.jpg` in markdown

---

## File Reference

Quick reference tables for common operations.

### I Want To... → Edit This File

| Task | File to Edit | Type |
|------|--------------|------|
| Change homepage content | `/layouts/index.html` | HTML template |
| Add blog post | `/content/posts/new-post.md` | Markdown |
| Update project | `/data/data.json` (projects array) | JSON |
| Add menu item | `/hugo.toml` (menu section) | TOML |
| Customize colors | `/assets/css/extended.css` | CSS |
| Configure deployment | `/netlify.toml` | TOML |
| Modify header | `/layouts/partials/header.html` | HTML |
| Update footer | `/layouts/partials/footer.html` | HTML |
| Change site title | `/hugo.toml` (languages.en.title) | TOML |
| Update About page | `/content/about/_index.md` | Markdown |
| Track challenge progress | `/data/data.json` (aws_challenge) | JSON |
| Add certification | `/data/data.json` (about_certifications) | JSON |
| Configure CMS | `/static/admin/config.yml` | YAML |

### Configuration Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `hugo.toml` | Main Hugo configuration | Site settings, menu, metadata |
| `netlify.toml` | Deployment configuration | Build commands, Hugo version |
| `static/admin/config.yml` | Netlify CMS configuration | CMS collections, fields |
| `.gitignore` | Git ignore rules | Exclude files from version control |
| `.gitmodules` | Git submodule configuration | Theme repository settings |

### Content Files

| Location | Content Type | Format |
|----------|--------------|--------|
| `/content/posts/` | Blog posts | Markdown with YAML/TOML front matter |
| `/content/about/_index.md` | About page | Markdown |
| `/content/projects/` | Project detail pages | Markdown |
| `/data/data.json` | Dynamic data | JSON (projects, challenge, skills) |

### Template Files

| Location | Purpose |
|----------|---------|
| `/layouts/index.html` | Homepage template |
| `/layouts/about/list.html` | About page template |
| `/layouts/posts/list.html` | Blog list page |
| `/layouts/posts/single.html` | Individual blog post (if exists) |
| `/layouts/projects/list.html` | Projects page |
| `/layouts/challenge/list.html` | Challenge tracker page |
| `/layouts/partials/header.html` | Site header |
| `/layouts/partials/footer.html` | Site footer |
| `/layouts/partials/menu.html` | Navigation menu |
| `/layouts/_default/search.html` | Search results |

---

## Advanced Topics

### Custom Shortcodes

Shortcodes are reusable content snippets you can embed in Markdown.

**Built-in shortcodes:**

```markdown
{{< code language="python" >}}
def hello():
    print("Hello, world!")
{{< /code >}}
```

**Creating a custom shortcode:**

1. Create `/layouts/shortcodes/note.html`:

```html
<div style="background: #252525; border-left: 4px solid #da7756; padding: 1rem; margin: 1rem 0;">
  <strong>Note:</strong> {{ .Inner }}
</div>
```

2. Use in Markdown:

```markdown
{{< note >}}
This is an important note about AWS security.
{{< /note >}}
```

**Result:** A styled note box.

### Search Functionality

Search is powered by JSON output and client-side JavaScript.

**How it works:**

1. Hugo generates `/index.json` with all content
2. Search page loads this JSON file
3. JavaScript filters results based on query
4. Displays matching pages

**Customizing search:**

Edit `/layouts/_default/search.html` to change:
- Search UI
- Result formatting
- Filtering logic

### Performance Optimization

#### Image Optimization

**Before adding images:**

1. Resize to appropriate dimensions (max 1920px width)
2. Compress using tools like:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
   - ImageOptim (macOS)

**Result:** Faster page loads, better Lighthouse scores.

#### Minification Benefits

`hugo --minify` reduces file sizes:

- HTML: Removes whitespace, comments
- CSS: Removes whitespace, shortens properties
- JS: Removes whitespace, comments
- JSON: Removes whitespace
- SVG: Optimizes paths

**Before minification:** `style.css` = 50 KB
**After minification:** `style.min.css` = 35 KB (30% smaller)

#### CDN Caching

Netlify's CDN automatically:
- Caches static assets globally
- Serves from nearest edge location
- Invalidates cache on new deploys

**User in Tokyo** → Served from Asia CDN
**User in London** → Served from Europe CDN

**Result:** Faster load times worldwide.

### SEO Configuration

#### Meta Tags

Edit `/hugo.toml`:

```toml
[params]
  keywords = "cloud engineer, AWS, DevOps, terraform"
  description = "Cloud engineering blog and portfolio"
```

These appear in HTML `<head>`:

```html
<meta name="keywords" content="cloud engineer, AWS, DevOps, terraform">
<meta name="description" content="Cloud engineering blog and portfolio">
```

#### Sitemap

Hugo auto-generates `/sitemap.xml`:

```xml
<url>
  <loc>https://mohammadzfaisal.netlify.app/posts/my-post/</loc>
  <lastmod>2025-12-29</lastmod>
</url>
```

**Submit to search engines:**
- Google Search Console
- Bing Webmaster Tools

#### RSS Feed

Auto-generated at `/index.xml`:

```bash
https://mohammadzfaisal.netlify.app/index.xml
```

**Use for:**
- Blog readers (Feedly, Inoreader)
- Automation (IFTTT, Zapier)
- Syndication

---

## Resources

### Official Documentation

- [Hugo Documentation](https://gohugo.io/documentation/) - Complete Hugo guide
- [Terminal Theme Repository](https://github.com/panr/hugo-theme-terminal) - Theme source and docs
- [Netlify Documentation](https://docs.netlify.com/) - Hosting and deployment
- [Netlify CMS Guide](https://decapcms.org/docs/) - CMS configuration and usage

### Helpful Tools

**Development:**
- [VS Code](https://code.visualstudio.com/) - Code editor
- [Hugo Extended](https://github.com/gohugoio/hugo/releases) - Static site generator

**Validation:**
- [JSONLint](https://jsonlint.com) - Validate JSON syntax
- [YAML Lint](http://www.yamllint.com/) - Validate YAML syntax
- [HTML Validator](https://validator.w3.org/) - Check HTML

**Design:**
- [ColorPicker](https://htmlcolorcodes.com/color-picker/) - Choose badge colors
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Hero Patterns](https://heropatterns.com/) - SVG background patterns

**SEO:**
- [Google Search Console](https://search.google.com/search-console) - Search performance
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing

### Community

**Forums:**
- [Hugo Discourse](https://discourse.gohugo.io/) - Official Hugo forum
- [Netlify Community](https://answers.netlify.com/) - Netlify support forum

**Chat:**
- [Hugo Discord](https://discord.gg/hugo) - Real-time Hugo help

**Q&A:**
- [Stack Overflow - Hugo Tag](https://stackoverflow.com/questions/tagged/hugo) - Technical Q&A

### Learning Resources

**Hugo:**
- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/) - Official tutorial
- [Mike Dane's Hugo Tutorial](https://www.mikedane.com/static-site-generators/hugo/) - Video series

**Git:**
- [GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/) - Git basics
- [Git Submodules Tutorial](https://git-scm.com/book/en/v2/Git-Tools-Submodules) - Submodule management

**Markdown:**
- [Markdown Guide](https://www.markdownguide.org/) - Syntax reference
- [CommonMark Spec](https://commonmark.org/) - Markdown specification

---

## Maintenance

### Regular Updates

#### Checking for Hugo Updates

**View current version:**

```bash
hugo version
```

**Check for new releases:**

Visit [Hugo Releases](https://github.com/gohugoio/hugo/releases)

**Updating Hugo:**

1. Download new Extended version
2. Replace old binary
3. Test locally: `hugo server`
4. Update `/netlify.toml`:

```toml
[build.environment]
  HUGO_VERSION = "0.140.0"  # Update version number
```

5. Commit and push

**Why update:**
- Bug fixes
- New features
- Security patches
- Performance improvements

#### Updating the Theme

**Check for theme updates:**

```bash
cd themes/terminal
git fetch origin
git log HEAD..origin/main  # View new commits
```

**If updates exist:**

```bash
git pull origin main
cd ../..
git add themes/terminal
git commit -m "Update Terminal theme"
git push origin main
```

**Test after updating:**

```bash
hugo server
```

Verify nothing broke. If issues occur, revert:

```bash
cd themes/terminal
git log  # Find previous commit
git checkout <commit-hash>
cd ../..
```

#### Netlify Build Image Updates

Netlify occasionally updates their build environment. No action needed usually, but watch for:

- Deprecation warnings in deploy logs
- Failed builds after no code changes

**Solution:** Update Hugo version in `netlify.toml`.

#### Content Audits

**Monthly tasks:**

1. Review outdated content
2. Update challenge progress
3. Add new projects
4. Fix broken links
5. Update certifications/skills

**Tools:**

- [Broken Link Checker](https://www.brokenlinkcheck.com/)
- Google Analytics (traffic insights)

### Backup Strategy

**Your content is safe thanks to:**

1. **GitHub** - Full version history
   - Every commit is saved
   - Can restore any previous version
   - `git log` to view history

2. **Netlify Deploy History**
   - Every deployment is saved
   - Rollback to previous deploy with one click
   - **Deploys** → click older deploy → **Publish deploy**

3. **Local Copies**
   - Your computer has a full copy
   - Clone to multiple machines if needed

**Additional backups (optional):**

```bash
# Export data.json periodically
cp data/data.json backups/data-2025-12-29.json
```

**Disaster recovery:**

If you lose everything locally:

```bash
git clone --recursive https://github.com/mohammadzfaisal/myterminalGUI.git
```

You get the entire site back, including all history.

---

## Contributing

If you want to collaborate with others on this site:

### For Collaborators

#### Getting Access

1. Request GitHub repository access (from owner)
2. Request Netlify CMS access (invite to Identity users)

#### Branch Naming Conventions

**Feature branches:**

```
feature/add-docker-series
feature/new-about-section
```

**Bug fixes:**

```
fix/broken-link-about-page
fix/mobile-menu-overlap
```

**Content updates:**

```
content/new-blog-post-kubernetes
content/update-challenge-day-10
```

#### Pull Request Process

1. **Create branch:**

```bash
git checkout -b feature/add-contact-form
```

2. **Make changes and commit:**

```bash
git add .
git commit -m "Add contact form with validation"
git push origin feature/add-contact-form
```

3. **Create pull request on GitHub:**
   - Add descriptive title
   - Explain what changed and why
   - Reference any issues: "Fixes #123"

4. **Review deploy preview:**
   - Netlify posts preview URL in PR
   - Test thoroughly

5. **Request review:**
   - Assign reviewer
   - Wait for approval

6. **Merge:**
   - Squash and merge (keeps history clean)
   - Delete branch after merge

#### Code Review Guidelines

**When reviewing:**
- Test the deploy preview
- Check responsive design
- Verify no broken links
- Validate JSON if `data.json` changed
- Check console for errors
- Ensure commit messages are descriptive

---

## License

This project uses the following licenses:

**Theme:** [Terminal](https://github.com/panr/hugo-theme-terminal) by panr - [MIT License](https://github.com/panr/hugo-theme-terminal/blob/master/LICENSE)

**Hugo:** [Hugo](https://gohugo.io/) - [Apache License 2.0](https://github.com/gohugoio/hugo/blob/master/LICENSE)

**Content:** (Specify your content license, e.g., Creative Commons, All Rights Reserved, etc.)

---

## Credits

- **Hugo Static Site Generator** - [gohugo.io](https://gohugo.io)
- **Terminal Theme** by [Radek Kozieł (panr)](https://github.com/panr)
- **Netlify** - Hosting and deployment - [netlify.com](https://netlify.com)
- **Fira Code Font** - Monospace font with programming ligatures

---

## Support

**Issues or questions?**

- Check the [Troubleshooting](#troubleshooting) section
- Review [Hugo Documentation](https://gohugo.io/documentation/)
- Ask on [Hugo Discourse](https://discourse.gohugo.io/)
- Open an issue on [GitHub](https://github.com/mohammadzfaisal/myterminalGUI/issues)

---

**Built with Hugo • Deployed on Netlify • Powered by Coffee**
