# Internship Task Manager

A clean, modern, mobile-first, accessible, and fully responsive frontend interface for managing internship tasks. Built with **HTML5**, **CSS3**, and **Vanilla JavaScript** without any frameworks or external CSS libraries.

---

## Project Overview

The Internship Task Manager helps interns organize their daily work. Users can view dashboard statistics, filter tasks by status, add new tasks, mark tasks as complete, delete tasks, and track overall internship progress. The project focuses on semantic HTML, CSS Grid, Flexbox, mobile-first responsive design, and lightweight JavaScript interactivity.

---

## Main Features

- Responsive navigation with keyboard-accessible mobile hamburger menu
- Hero section with call-to-action buttons
- Dashboard statistics cards that update automatically
- Task filtering by All, Pending, In Progress, Completed, and High Priority
- Six realistic internship task cards rendered dynamically
- Add new task form with client-side validation
- Mark task as complete, edit task title, and delete task
- Real-time progress bar and motivational message
- Helpful internship tips section
- Accessible form labels, focus states, and ARIA attributes
- Reduced motion support

---

## Technologies Used

- Semantic HTML5
- CSS3 with CSS custom properties
- CSS Grid and Flexbox
- Mobile-first responsive design
- Vanilla JavaScript (ES5/ES6 compatible)
- Google Fonts (Inter and Open Sans)

This project intentionally does **not** use:

- React, Next.js, Vue, or Angular
- Bootstrap, Tailwind CSS, or jQuery
- Any other frontend framework or external library

---

## Folder Structure

```
internship-task-manager/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── images/
│   └── icons/
├── wireframe/
│   └── wireframe.md
└── README.md
```

---

## Instructions to Run the Project

1. Open the project folder `internship-task-manager/`.
2. Double-click `index.html` to open it in your browser.
3. You can also right-click `index.html` and choose **Open with** your preferred browser.
4. The website runs entirely in the browser. No build tools, server, or package installation is required.

---

## Responsive Breakpoints

The project uses a mobile-first approach with two main breakpoints:

| Breakpoint | Width | Layout changes |
|------------|-------|----------------|
| Mobile     | Default | Single column, hamburger menu, stacked cards |
| Tablet     | 768px | Two-column statistics and task grids, horizontal navigation |
| Desktop    | 1024px | Four-column statistics, three-column tasks, four-column tips, hero side-by-side layout |

---

## Accessibility Features

- Semantic HTML5 landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Single `<h1>` and logical heading hierarchy
- Visible keyboard focus styles on all interactive elements
- ARIA attributes: `aria-expanded`, `aria-controls`, `aria-pressed`, `aria-live`, `aria-label`, `role`, `aria-valuenow`
- Real `<button>` elements for the hamburger menu and actions
- Accessible form labels and validation messages
- Respects `prefers-reduced-motion` user preference
- Strong color contrast using the provided palette
- Empty `alt` for decorative visuals and meaningful text alternatives elsewhere

---

## JavaScript Functionality

The JavaScript file `js/app.js` is written in clean Vanilla JavaScript and includes:

1. Mobile navigation open and close
2. Task filtering by status or priority
3. Add new task through the form
4. Mark a task as completed
5. Edit a task title
6. Delete a task
7. Auto-updating dashboard statistics
8. Auto-updating task progress bars
9. User-friendly empty state when no tasks match a filter
10. Form validation and success/error messages

The code uses:

- `addEventListener`
- Reusable functions
- Arrays and objects
- DOM manipulation
- `classList`
- `dataset` attributes
- Template literals

---

## Testing Checklist

### Layout and responsiveness
- [ ] Page is readable on mobile, tablet, laptop, and desktop
- [ ] No horizontal scrolling on any screen size
- [ ] Statistics grid changes from 1 → 2 → 4 columns
- [ ] Task grid changes from 1 → 2 → 3 columns
- [ ] Tips grid changes from 1 → 2 → 4 columns

### Navigation
- [ ] Desktop navigation shows horizontal links
- [ ] Mobile hamburger menu opens and closes
- [ ] Menu closes when a link is clicked
- [ ] Menu closes with the Escape key
- [ ] `aria-expanded` updates correctly

### Tasks and filters
- [ ] Six initial tasks display correctly
- [ ] Filter buttons show active state
- [ ] Filter buttons filter tasks correctly
- [ ] Empty state appears when no tasks match a filter

### Form and interactivity
- [ ] Form validates required fields
- [ ] New task appears after submission without refresh
- [ ] Statistics update after adding a task
- [ ] Mark as Complete button updates status and progress
- [ ] Delete button removes the task
- [ ] Progress bar and message update automatically

### Accessibility
- [ ] Page has one `<h1>`
- [ ] Focus styles are visible
- [ ] Form inputs have visible labels
- [ ] Buttons are keyboard operable
- [ ] Color contrast is comfortable

---

## Screenshots Section

> Add screenshots here for desktop, tablet, and mobile views. Recommended sizes: 1440px width for desktop, 768px width for tablet, and 375px width for mobile.

- Desktop dashboard
- Mobile navigation open
- Tablet task grid
- Progress section

---

## Future Improvement Ideas

- Add local storage so tasks persist between sessions
- Implement a real edit form instead of a prompt
- Add sorting by due date or priority
- Add search functionality
- Add drag-and-drop task ordering
- Add dark mode toggle
- Add unit tests for JavaScript functions

---

## Built With

- HTML
- CSS
- JavaScript

No frameworks, no build step, just frontend fundamentals.
