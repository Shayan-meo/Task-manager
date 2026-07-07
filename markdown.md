
- HTML5
- CSS3
- Vanilla JavaScript

Do not use any framework or external CSS framework.

Do not use:

- React
- Next.js
- Vue
- Angular
- Bootstrap
- Tailwind CSS
- jQuery

The purpose of this project is to demonstrate strong frontend fundamentals, responsive design, semantic HTML, accessibility, clean UI, and basic JavaScript interactivity.

==================================================
1. PROJECT GOAL
==================================================

Build a clean, modern, mobile-first, accessible, and fully responsive frontend interface for an internship task management application.

The website must work properly on:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

The layout must not use fixed dimensions that break on smaller screens.

The design must adapt naturally according to the available screen size.

==================================================
2. DESIGN STYLE
==================================================

Create a warm, modern, professional, and grounded UI.

Use the following color palette:

- Mocha Mousse: #A5966F
- Ethereal Blue: #A0D4E0
- Moonlit Grey: #F2F0EA
- Dark text color: #252525
- White surface color: #FFFFFF

Use the colors consistently through CSS custom properties.

Example:

:root {
  --color-primary: #A5966F;
  --color-secondary: #A0D4E0;
  --color-background: #F2F0EA;
  --color-text: #252525;
  --color-surface: #FFFFFF;
}

Typography requirements:

- Use “Inter” or “Montserrat” for headings.
- Use “Roboto” or “Open Sans” for body text.
- Use a maximum of two font families.
- Use a maximum of three font weights.
- Use clamp() for responsive headings and typography.

The interface must have:

- Proper spacing
- Clear visual hierarchy
- Readable text
- Rounded cards
- Subtle shadows
- Smooth hover effects
- Visible focus styles
- Consistent buttons
- Professional whitespace

Avoid:

- Too many colors
- Excessive animations
- Poor contrast
- Overcrowded sections
- Unnecessary gradients
- Random font sizes

==================================================
3. WEBSITE STRUCTURE
==================================================

Create the following sections:

1. Header
2. Navigation bar
3. Hero or welcome section
4. Dashboard statistics
5. Task filter controls
6. Task cards section
7. Progress section
8. Add task form
9. Helpful internship tips section
10. Footer

==================================================
4. HEADER AND NAVIGATION
==================================================

Create a semantic <header> containing a <nav> element.

The navbar must include:

- Application logo or text logo
- Dashboard link
- Tasks link
- Progress link
- Contact link
- “Add Task” button
- Mobile hamburger menu

Desktop behavior:

- Navigation links should appear horizontally.
- The Add Task button should be clearly visible.

Mobile behavior:

- Navigation links should be hidden initially.
- A hamburger menu button should open and close the navigation.
- The menu must be usable with the keyboard.
- Use aria-expanded and aria-controls attributes.

Do not use a clickable div for the mobile menu.

Use a real <button> element.

==================================================
5. HERO SECTION
==================================================

Create a professional hero section for the internship dashboard.

Include:

- Small label: “Internship Workspace”
- Main heading: “Organize Your Internship Tasks”
- Supporting paragraph explaining that interns can manage deadlines, priorities, and progress.
- Primary button: “View Tasks”
- Secondary button: “Add New Task”
- A responsive illustration, dashboard preview, or visual card area

The hero must use a mobile-first layout.

Mobile:

- Single-column layout
- Text first
- Visual area below the text

Desktop:

- Two-column layout
- Text on the left
- Visual area on the right

==================================================
6. DASHBOARD STATISTICS
==================================================

Create four responsive statistics cards:

- Total Tasks
- Completed Tasks
- Pending Tasks
- High Priority Tasks

Each card should contain:

- A relevant icon
- Number
- Label
- Small supporting text

Use CSS Grid for this section.

Mobile:

- One card per row

Tablet:

- Two cards per row

Desktop:

- Four cards per row

==================================================
7. TASK FILTERS
==================================================

Create task filtering controls using real buttons.

Filters:

- All Tasks
- Pending
- In Progress
- Completed
- High Priority

The currently selected filter must have an active state.

Use JavaScript to filter the visible task cards.

Each filter button must:

- Be keyboard accessible
- Have a visible focus state
- Use an aria-pressed attribute where appropriate

==================================================
8. TASK CARDS
==================================================

Create at least six realistic internship task cards.

Example tasks:

1. Build Responsive Landing Page
2. Complete JavaScript Form Validation
3. Fix Mobile Navigation
4. Perform Accessibility Audit
5. Update Project Documentation
6. Submit Weekly Progress Report

Each task card must include:

- Task title
- Short description
- Category
- Due date
- Priority
- Current status
- Progress percentage
- Progress bar
- Mark as Complete button
- Edit button
- Delete button

Task statuses:

- Pending
- In Progress
- Completed

Priority levels:

- Low
- Medium
- High

Use appropriate visual badges for status and priority.

The cards must remain readable and properly aligned on all screen sizes.

Use CSS Grid for the task card container.

==================================================
9. JAVASCRIPT FUNCTIONALITY
==================================================

Use clean Vanilla JavaScript.

Implement the following features:

1. Mobile navigation open and close
2. Filter task cards by status
3. Add a new task through the form
4. Mark a task as completed
5. Delete a task
6. Update dashboard statistics automatically
7. Update task progress visually
8. Show a user-friendly empty state when no task matches a filter
9. Validate the add-task form
10. Show success and validation messages

Do not use inline JavaScript.

Place all JavaScript in:

js/app.js

Use:

- addEventListener()
- Functions
- Arrays
- Objects
- DOM manipulation
- classList
- dataset attributes
- Template literals where useful

Write readable code with meaningful variable and function names.

Do not use excessive global variables.

==================================================
10. ADD TASK FORM
==================================================

Create a semantic and accessible form.

Fields:

- Task title
- Task description
- Category
- Due date
- Priority
- Status

Requirements:

- Every input must have a visible <label>.
- Required fields must use the required attribute.
- Display clear validation messages.
- Do not rely only on color for errors.
- The form must work with keyboard navigation.
- The form should add a new task card without refreshing the page.

Buttons:

- Add Task
- Reset Form

==================================================
11. PROGRESS SECTION
==================================================

Create an overall internship progress section.

Include:

- Overall completion percentage
- Responsive progress bar
- Total completed task count
- Motivational message
- Weekly progress summary

The progress section must automatically update when tasks are completed or deleted.

==================================================
12. INTERNSHIP TIPS SECTION
==================================================

Create three or four helpful cards containing tips such as:

- Break large tasks into smaller steps
- Track your deadlines
- Write clean documentation
- Test your website on multiple devices

Use semantic <article> elements for these cards.

==================================================
13. FOOTER
==================================================

Create a semantic <footer>.

Include:

- Application name
- Short description
- Quick navigation links
- Contact email
- Copyright text
- “Built with HTML, CSS and JavaScript” text

Make the footer responsive.

==================================================
14. SEMANTIC HTML REQUIREMENTS
==================================================

Use semantic HTML5 elements correctly.

Use elements such as:

- <header>
- <nav>
- <main>
- <section>
- <article>
- <form>
- <label>
- <button>
- <footer>

Do not create the complete page using only <div> elements.

The page must contain:

- Only one main <h1>
- Proper heading order
- A <main> landmark
- Descriptive button text
- Proper labels for all form inputs

==================================================
15. RESPONSIVE CSS REQUIREMENTS
==================================================

Follow a mobile-first strategy.

Write default CSS for mobile screens first.

Use min-width media queries.

Required breakpoints:

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}

Use:

- CSS Grid for page layouts and task card layouts
- Flexbox for navigation, buttons, filters, and small components
- Relative units such as rem, %, fr, vw, and max-width
- clamp() for responsive typography
- max-width containers
- Fluid spacing
- Responsive images

Avoid unnecessary fixed widths and heights.

The website must not have horizontal scrolling.

==================================================
16. ACCESSIBILITY REQUIREMENTS
==================================================

Follow WCAG accessibility principles.

Include:

- Strong text/background contrast
- Visible keyboard focus styles
- Semantic landmarks
- Descriptive alt text for meaningful images
- Empty alt text for decorative images
- Accessible form labels
- Accessible error messages
- Keyboard-operable buttons
- aria-label where necessary
- aria-expanded for the mobile navigation
- aria-live region for form and task update messages
- Minimum comfortable button size
- Clear heading hierarchy

Do not disable the browser focus outline without providing a better focus style.

Respect reduced-motion preferences.

Use:

@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
    animation-duration: 0.01ms;
    transition-duration: 0.01ms;
  }
}

==================================================
17. PERFORMANCE REQUIREMENTS
==================================================

Optimize the project for good performance.

Requirements:

- Avoid unnecessary large images
- Use optimized image formats
- Set image width and height where possible
- Avoid layout shifts
- Keep JavaScript lightweight
- Defer the JavaScript file
- Use lazy loading for non-critical images
- Keep the DOM structure clean
- Avoid unnecessary libraries

The project should perform well for:

- LCP
- CLS
- Accessibility
- Mobile responsiveness

==================================================
18. PROJECT FILE STRUCTURE
==================================================

Create the following structure:

internship-task-manager/
│
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

Do not place CSS or JavaScript directly inside index.html unless absolutely necessary.

==================================================
19. WIREFRAME REQUIREMENT
==================================================

Before writing the final code, first provide a simple low-fidelity wireframe.

The wireframe should show:

- Header
- Mobile navigation
- Hero section
- Statistics cards
- Filter controls
- Task cards
- Progress section
- Add task form
- Tips section
- Footer

The wireframe should focus on:

- Content hierarchy
- User flow
- Mobile-first structure
- Clear spacing

Do not depend on colors to make the wireframe understandable.

==================================================
20. README REQUIREMENTS
==================================================

Create a professional README.md containing:

- Project title
- Project overview
- Main features
- Technologies used
- Folder structure
- Instructions to run the project
- Responsive breakpoints
- Accessibility features
- JavaScript functionality
- Testing checklist
- Screenshots section placeholder
- Future improvement ideas

Mention clearly that the project uses:

- Semantic HTML5
- CSS Grid
- Flexbox
- Mobile-first design
- Vanilla JavaScript
- No frameworks

==================================================
21. CODE QUALITY REQUIREMENTS
==================================================

The code must be:

- Clean
- Readable
- Properly indented
- Beginner-friendly
- Well organized
- Properly commented where needed
- Free from duplicate unnecessary code

Use consistent naming conventions.

Use CSS classes instead of styling elements repeatedly.

Use reusable JavaScript functions.

Do not leave incomplete code or placeholder comments such as:

“Add your code here”

==================================================
22. FINAL OUTPUT FORMAT
==================================================

Provide the project in the following order:

1. Brief project explanation
2. Low-fidelity wireframe
3. Folder structure
4. Complete index.html code
5. Complete css/style.css code
6. Complete js/app.js code
7. Complete README.md
8. Testing instructions
9. Final requirement checklist

Every file must contain complete working code.

Do not provide only code snippets.

The final application must run by opening index.html in a browser.

==================================================
23. FINAL ACCEPTANCE CHECKLIST
==================================================

Before completing the response, verify that:

- The project uses only HTML, CSS, and Vanilla JavaScript.
- No framework is used.
- The website follows mobile-first design.
- Tablet breakpoint works at 768px.
- Desktop breakpoint works at 1024px.
- CSS Grid and Flexbox are used correctly.
- Semantic HTML elements are used.
- The navigation is responsive.
- The hamburger menu works.
- Task filtering works.
- Add task functionality works.
- Complete task functionality works.
- Delete task functionality works.
- Statistics update dynamically.
- Progress updates dynamically.
- Form validation works.
- Keyboard navigation works.
- Focus states are visible.
- The layout has no horizontal overflow.
- The website has a clean, user-friendly UI.
- The README is complete.
- The code is ready to run.

Generate the complete project now.