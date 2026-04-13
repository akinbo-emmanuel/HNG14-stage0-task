# Frontend Wizards - Stage 0 Submission

This project is my Stage 0 assessment implementation: a testable, accessible, and responsive Todo Item Card.

## Project Scope

- Built a single Todo card UI with semantic HTML, modern styling, and lightweight JavaScript.
- Implemented all required `data-testid` attributes exactly as specified for automated testing.
- Prioritized accessibility (keyboard navigation, proper labels, semantic controls) and responsive behavior.

## Implementation

- `index.html`: semantic card structure and all required test hooks
- `styles.css`: responsive layout, visual hierarchy, and visible focus states
- `script.js`: due-date formatting, time-remaining calculation, and completion toggle behavior

## Requirement Coverage

- **Testability:** includes required IDs:
  - `test-todo-card`, `test-todo-title`, `test-todo-description`, `test-todo-priority`
  - `test-todo-due-date`, `test-todo-time-remaining`, `test-todo-status`
  - `test-todo-complete-toggle`, `test-todo-tags`
  - `test-todo-edit-button`, `test-todo-delete-button`
  - optional: `test-todo-tag-work`, `test-todo-tag-urgent`
- **Behavior:** friendly time hints (`Due in...`, `Due tomorrow`, `Overdue by...`, `Due now!`) with 30-second refresh.
- **Completion toggle:** checkbox updates status (`In Progress` -> `Done`) and applies strike-through to title.
- **Accessibility:** semantic tags (`article`, `time`, `ul/li`, `button`), labeled checkbox, keyboard-focusable controls, visible focus ring.
- **Responsiveness:** mobile-first full-width card, desktop max-width layout, wrapped tags, no horizontal overflow.

## Run Locally

```bash
cd "stage0-task"
python3 -m http.server 5500
```

Open `http://localhost:5500`.

## Submission Links

- Live URL: _add deployed link here_
- GitHub Repository: _add repository link here_
