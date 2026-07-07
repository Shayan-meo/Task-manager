# Internship Task Manager - Low-Fidelity Wireframe

This wireframe describes the content hierarchy and user flow for the internship task management interface. It uses text symbols and avoids reliance on color.

## Symbols

- `[====]` = Section or container
- `[TEXT]` = Heading or label
- `[BTN]`  = Button
- `[INPUT]`= Form field
- `[CARD]` = Card container
- `[IMG]`  = Illustration or image area
- `|`      = Vertical stack (mobile layout)
- `||`     = Horizontal side-by-side (desktop layout)

---

## 1. Header / Navigation

```
[====================================]
| [LOGO]  Dashboard  Tasks  Progress  Contact  [+ Add Task] |
[====================================]
```

### Mobile Navigation (closed)
```
[====================]
| [LOGO]        [☰]  |
[====================]
```

### Mobile Navigation (open)
```
[====================]
| [LOGO]        [☰]  |
|--------------------|
| Dashboard          |
| Tasks              |
| Progress           |
| Contact            |
| [+ Add Task]       |
[====================]
```

---

## 2. Hero / Welcome Section

### Mobile Layout
```
[====================]
| [LABEL]            |
| [MAIN HEADING]     |
| [PARAGRAPH]        |
| [BTN] [BTN]        |
|--------------------|
| [IMG / DASHBOARD   |
|  PREVIEW CARD]     |
[====================]
```

### Desktop Layout
```
[====================================]
| [LABEL]                |           |
| [MAIN HEADING]         |  [IMG /   |
| [PARAGRAPH]            |  DASHBOARD|
| [BTN]      [BTN]       |  PREVIEW] |
[====================================]
```

---

## 3. Dashboard Statistics

### Mobile Layout
```
[====================]
| [CARD] Total Tasks |
|--------------------|
| [CARD] Completed   |
|--------------------|
| [CARD] Pending      |
|--------------------|
| [CARD] High Priority|
[====================]
```

### Tablet Layout
```
[====================]
| [CARD]   | [CARD]  |
| Total    | Completed|
|--------------------|
| [CARD]   | [CARD]  |
| Pending  | High P. |
[====================]
```

### Desktop Layout
```
[====================================]
| [CARD] | [CARD] | [CARD] | [CARD]  |
| Total  | Done   |Pending | High P. |
[====================================]
```

---

## 4. Task Filter Controls

```
[====================]
| [BTN] [BTN] [BTN]  |
| [BTN] [BTN]        |
[====================]
```

Buttons: All | Pending | In Progress | Completed | High Priority
Active filter is visually highlighted.

---

## 5. Task Cards Section

### Mobile Layout
```
[====================]
| [CARD]             |
| Title              |
| Description...     |
| Category  Due Date |
| Priority  Status   |
| [====PROGRESS====] |
| [BTN] [BTN] [BTN] |
[====================]
| [CARD]             |
| ...                |
[====================]
```

### Desktop Layout (Grid)
```
[====================================]
| [CARD]    | [CARD]    | [CARD]    |
| Task 1    | Task 2    | Task 3    |
[====================================]
| [CARD]    | [CARD]    | [CARD]    |
| Task 4    | Task 5    | Task 6    |
[====================================]
```

---

## 6. Progress Section

```
[====================]
| [TEXT] Progress    |
| [BIG PERCENTAGE]   |
| [===========>]     |
| Completed: X of Y  |
| "Keep going!"      |
| Weekly summary...  |
[====================]
```

---

## 7. Add Task Form

```
[====================]
| [TEXT] Add New Task|
|--------------------|
| Title:   [INPUT  ] |
| Desc:    [INPUT  ] |
| Category:[INPUT  ] |
| Due:     [INPUT  ] |
| Priority:[INPUT  ] |
| Status:  [INPUT  ] |
|--------------------|
| [Add Task] [Reset] |
[====================]
```

---

## 8. Helpful Internship Tips Section

### Mobile Layout
```
[====================]
| [CARD] Tip 1       |
|--------------------|
| [CARD] Tip 2       |
|--------------------|
| [CARD] Tip 3       |
|--------------------|
| [CARD] Tip 4       |
[====================]
```

### Desktop Layout
```
[====================================]
| [CARD] | [CARD] | [CARD] | [CARD]  |
| Tip 1  | Tip 2  | Tip 3  | Tip 4   |
[====================================]
```

---

## 9. Footer

```
[====================]
| [LOGO / App Name]  |
| Short description  |
|--------------------|
| Links: Dashboard   |
| Tasks Progress...  |
|--------------------|
| contact@email.com  |
| Built with HTML... |
| © 2026             |
[====================]
```

---

## User Flow

1. User lands on the page and sees the hero section.
2. User can navigate through the navbar or mobile menu.
3. User sees statistics and task overview.
4. User filters tasks using the filter buttons.
5. User can add a new task using the form.
6. User can mark, edit, or delete tasks.
7. Dashboard statistics and progress update automatically.
8. User can read helpful tips in the tips section.
9. Footer provides contact and navigation links.
