# Creating a New Post

1. Create a markdown file at `content/{category}/{slug}.md`
2. Add YAML frontmatter at the top:

```markdown
---
title: "Your Post Title"
summary: "A brief description of the post"
publishedAt: "2026-04-01T00:00:00.000Z"
category: "programming"
---

Your markdown content here...
```

## Fields

| Field         | Description                                      |
|---------------|--------------------------------------------------|
| `title`       | Display title of the post                        |
| `summary`     | Short description shown on listing pages         |
| `publishedAt` | ISO 8601 date string (used for sorting)          |
| `category`    | Must match the parent folder name                |

## URL Structure

- Filename becomes the slug: `my-post.md` → `/programming/my-post`
- Parent folder is the category: `content/programming/` → `/programming`

## Existing Categories

- `programming`
- `markeet`
- `study-tips`

To add a new category, just create a new folder under `content/`.
