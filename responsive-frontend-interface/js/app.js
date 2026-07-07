/* ==================================================
   Internship Task Manager - Vanilla JavaScript
   ================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------
     Initial tasks data
     -------------------------------------------------- */
  const initialTasks = [
    {
      id: 1,
      title: 'Build Responsive Landing Page',
      description: 'Create a mobile-first landing page using semantic HTML and CSS Grid for an internal client demo.',
      category: 'Development',
      dueDate: '2026-07-15',
      priority: 'High',
      status: 'In Progress',
      progress: 60,
    },
    {
      id: 2,
      title: 'Complete JavaScript Form Validation',
      description: 'Add client-side validation to all forms and display clear, accessible error messages.',
      category: 'Development',
      dueDate: '2026-07-18',
      priority: 'High',
      status: 'Pending',
      progress: 0,
    },
    {
      id: 3,
      title: 'Fix Mobile Navigation',
      description: 'Repair the hamburger menu so it opens, closes, and works correctly with keyboard navigation.',
      category: 'Development',
      dueDate: '2026-07-12',
      priority: 'Medium',
      status: 'Completed',
      progress: 100,
    },
    {
      id: 4,
      title: 'Perform Accessibility Audit',
      description: 'Review the site against WCAG principles and fix contrast, focus, and landmark issues.',
      category: 'Testing',
      dueDate: '2026-07-20',
      priority: 'High',
      status: 'In Progress',
      progress: 40,
    },
    {
      id: 5,
      title: 'Update Project Documentation',
      description: 'Write clear setup instructions, folder structure notes, and a testing checklist in the README.',
      category: 'Documentation',
      dueDate: '2026-07-22',
      priority: 'Low',
      status: 'Pending',
      progress: 10,
    },
    {
      id: 6,
      title: 'Submit Weekly Progress Report',
      description: 'Summarize completed tasks, blockers, and goals for the next week in a short report.',
      category: 'Reporting',
      dueDate: '2026-07-14',
      priority: 'Medium',
      status: 'Pending',
      progress: 0,
    },
  ];

  let tasks = [...initialTasks];
  let currentFilter = 'all';

  /* --------------------------------------------------
     DOM element references
     -------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const tasksGrid = document.getElementById('tasksGrid');
  const emptyState = document.getElementById('emptyState');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const addTaskForm = document.getElementById('addTaskForm');
  const formFeedback = document.getElementById('formFeedback');

  const statTotal = document.getElementById('statTotal');
  const statCompleted = document.getElementById('statCompleted');
  const statPending = document.getElementById('statPending');
  const statHigh = document.getElementById('statHigh');

  const progressPercentage = document.getElementById('progressPercentage');
  const progressCount = document.getElementById('progressCount');
  const progressMessage = document.getElementById('progressMessage');
  const progressBarLarge = document.getElementById('progressBarLarge');
  const progressFill = document.getElementById('progressFill');
  const weeklyCompleted = document.getElementById('weeklyCompleted');

  /* --------------------------------------------------
     Utility functions
     -------------------------------------------------- */
  function getPriorityClass(priority) {
    const map = {
      Low: 'badge-priority-low',
      Medium: 'badge-priority-medium',
      High: 'badge-priority-high',
    };
    return map[priority] || 'badge-priority-low';
  }

  function getStatusClass(status) {
    const normalized = status.toLowerCase().replace(' ', '-');
    return `badge-status-${normalized}`;
  }

  function sanitize(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function generateTaskId() {
    return Date.now();
  }

  /* --------------------------------------------------
     Mobile navigation
     -------------------------------------------------- */
  function toggleMenu() {
    const isOpen = primaryNav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  function closeMenu() {
    primaryNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', toggleMenu);

  primaryNav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && primaryNav.classList.contains('active')) {
      closeMenu();
    }
  });

  /* --------------------------------------------------
     Render tasks
     -------------------------------------------------- */
  function renderTasks() {
    tasksGrid.innerHTML = '';

    const filteredTasks = tasks.filter(function (task) {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'high') return task.priority === 'High';
      return task.status.toLowerCase() === currentFilter;
    });

    if (filteredTasks.length === 0) {
      emptyState.hidden = false;
      tasksGrid.hidden = true;
      return;
    }

    emptyState.hidden = true;
    tasksGrid.hidden = false;

    filteredTasks.forEach(function (task) {
      const card = document.createElement('article');
      card.className = 'task-card';
      card.setAttribute('data-id', task.id);

      const statusClass = getStatusClass(task.status);
      const priorityClass = getPriorityClass(task.priority);

      card.innerHTML = `
        <div class="task-header">
          <h3 class="task-title">${sanitize(task.title)}</h3>
          <div class="task-badges">
            <span class="badge ${sanitize(statusClass)}">${sanitize(task.status)}</span>
            <span class="badge ${sanitize(priorityClass)}">${sanitize(task.priority)}</span>
          </div>
        </div>
        <p class="task-description">${sanitize(task.description)}</p>
        <div class="task-meta">
          <span><strong>Category:</strong> ${sanitize(task.category)}</span>
          <span><strong>Due:</strong> ${sanitize(task.dueDate)}</span>
        </div>
        <div class="task-progress">
          <div class="progress-top">
            <span>Progress</span>
            <span class="progress-value">${task.progress}%</span>
          </div>
          <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${task.progress}" aria-label="Task progress">
            <div class="progress-bar-fill" style="width: ${task.progress}%"></div>
          </div>
        </div>
        <div class="task-actions">
          <button type="button" class="btn btn-primary btn-small complete-btn" data-action="complete">Mark as Complete</button>
          <button type="button" class="btn btn-secondary btn-small edit-btn" data-action="edit">Edit</button>
          <button type="button" class="btn btn-secondary btn-small delete-btn" data-action="delete">Delete</button>
        </div>
      `;

      tasksGrid.appendChild(card);
    });
  }

  /* --------------------------------------------------
     Filter tasks
     -------------------------------------------------- */
  function updateFilterButtons() {
    filterButtons.forEach(function (button) {
      const isActive = button.dataset.filter === currentFilter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentFilter = button.dataset.filter;
      updateFilterButtons();
      renderTasks();
    });
  });

  /* --------------------------------------------------
     Statistics and progress
     -------------------------------------------------- */
  function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(function (task) {
      return task.status === 'Completed';
    }).length;
    const pending = tasks.filter(function (task) {
      return task.status === 'Pending';
    }).length;
    const high = tasks.filter(function (task) {
      return task.priority === 'High';
    }).length;

    statTotal.textContent = total;
    statCompleted.textContent = completed;
    statPending.textContent = pending;
    statHigh.textContent = high;

    updateProgress(total, completed);
  }

  function getMotivationalMessage(percentage) {
    if (percentage === 0) return 'Start completing tasks to see your progress grow.';
    if (percentage < 25) return 'Good start! Keep completing tasks to build momentum.';
    if (percentage < 50) return 'You are making solid progress. Keep going!';
    if (percentage < 75) return 'More than halfway there. Finish strong!';
    if (percentage < 100) return 'Almost done! You can complete the remaining tasks.';
    return 'Excellent work! All tasks have been completed.';
  }

  function updateProgress(total, completed) {
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    const message = getMotivationalMessage(percentage);

    progressPercentage.textContent = `${percentage}%`;
    progressCount.textContent = `${completed} of ${total} tasks completed`;
    progressMessage.textContent = message;
    progressFill.style.width = `${percentage}%`;
    progressBarLarge.setAttribute('aria-valuenow', percentage);
    weeklyCompleted.textContent = completed;
  }

  /* --------------------------------------------------
     Task actions: complete, edit, delete
     -------------------------------------------------- */
  function markTaskComplete(taskId) {
    const task = tasks.find(function (item) {
      return item.id === taskId;
    });

    if (task) {
      task.status = 'Completed';
      task.progress = 100;
      updateStats();
      renderTasks();
      showFeedback('Task marked as completed.', 'success');
    }
  }

  function deleteTask(taskId) {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (!confirmed) return;

    tasks = tasks.filter(function (item) {
      return item.id !== taskId;
    });

    updateStats();
    renderTasks();
    showFeedback('Task deleted successfully.', 'success');
  }

  function editTask(taskId) {
    const task = tasks.find(function (item) {
      return item.id === taskId;
    });

    if (!task) return;

    const newTitle = prompt('Edit task title:', task.title);
    if (newTitle === null) return;

    const trimmedTitle = newTitle.trim();
    if (trimmedTitle === '') {
      showFeedback('Task title cannot be empty.', 'error');
      return;
    }

    task.title = trimmedTitle;
    renderTasks();
    showFeedback('Task updated successfully.', 'success');
  }

  tasksGrid.addEventListener('click', function (event) {
    const button = event.target.closest('button');
    if (!button) return;

    const card = button.closest('.task-card');
    if (!card) return;

    const taskId = Number(card.dataset.id);
    const action = button.dataset.action;

    if (action === 'complete') {
      markTaskComplete(taskId);
    } else if (action === 'edit') {
      editTask(taskId);
    } else if (action === 'delete') {
      deleteTask(taskId);
    }
  });

  /* --------------------------------------------------
     Add task form
     -------------------------------------------------- */
  function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = `form-feedback ${type}`;

    setTimeout(function () {
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';
    }, 5000);
  }

  function validateForm(formData) {
    const requiredFields = [
      'taskTitle',
      'taskDescription',
      'taskCategory',
      'taskDueDate',
      'taskPriority',
      'taskStatus',
    ];

    for (const field of requiredFields) {
      if (!formData.get(field) || formData.get(field).trim() === '') {
        return 'Please fill in all required fields.';
      }
    }

    const title = formData.get('taskTitle').trim();
    if (title.length < 3) {
      return 'Task title must be at least 3 characters long.';
    }

    const description = formData.get('taskDescription').trim();
    if (description.length < 5) {
      return 'Task description must be at least 5 characters long.';
    }

    const dueDate = formData.get('taskDueDate');
    if (!isValidDate(dueDate)) {
      return 'Please enter a valid due date.';
    }

    return null;
  }

  function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  function getProgressByStatus(status) {
    if (status === 'Completed') return 100;
    if (status === 'In Progress') return 25;
    return 0;
  }

  addTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(addTaskForm);
    const error = validateForm(formData);

    if (error) {
      showFeedback(error, 'error');
      return;
    }

    const status = formData.get('taskStatus');
    const newTask = {
      id: generateTaskId(),
      title: formData.get('taskTitle').trim(),
      description: formData.get('taskDescription').trim(),
      category: formData.get('taskCategory'),
      dueDate: formData.get('taskDueDate'),
      priority: formData.get('taskPriority'),
      status: status,
      progress: getProgressByStatus(status),
    };

    tasks.push(newTask);

    addTaskForm.reset();
    updateStats();
    renderTasks();
    showFeedback('New task added successfully.', 'success');
  });

  addTaskForm.addEventListener('reset', function () {
    formFeedback.textContent = '';
    formFeedback.className = 'form-feedback';
  });

  /* --------------------------------------------------
     Initialization
     -------------------------------------------------- */
  function init() {
    updateFilterButtons();
    updateStats();
    renderTasks();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
