const cardEl = document.querySelector('[data-testid="test-todo-card"]');
const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');
const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const statusEl = document.querySelector('[data-testid="test-todo-status"]');
const checkboxEl = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const editButtonEl = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteButtonEl = document.querySelector('[data-testid="test-todo-delete-button"]');

const dueDate = new Date(Date.now() + (72 * 60 * 60 * 1000 + 30 * 60 * 1000));

function formatDueDate(date) {
  const readable = date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return `Due ${readable}`;
}

function pluralize(value, unit) {
  return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

function getTimeRemainingText(now, due) {
  const diffMs = due.getTime() - now.getTime();
  const absMs = Math.abs(diffMs);
  const minuteMs = 60 * 1000;
  const hourMs = 60 * minuteMs;
  const dayMs = 24 * hourMs;

  if (absMs <= minuteMs) return "Due now!";

  if (diffMs > 0) {
    const days = Math.floor(diffMs / dayMs);
    if (days >= 2) return `Due in ${pluralize(days, "day")}`;
    if (days === 1) return "Due tomorrow";

    const hours = Math.floor(diffMs / hourMs);
    if (hours >= 1) return `Due in ${pluralize(hours, "hour")}`;

    const minutes = Math.max(1, Math.floor(diffMs / minuteMs));
    return `Due in ${pluralize(minutes, "minute")}`;
  }

  const overdueDays = Math.floor(absMs / dayMs);
  if (overdueDays >= 1) return `Overdue by ${pluralize(overdueDays, "day")}`;

  const overdueHours = Math.floor(absMs / hourMs);
  if (overdueHours >= 1) return `Overdue by ${pluralize(overdueHours, "hour")}`;

  const overdueMinutes = Math.max(1, Math.floor(absMs / minuteMs));
  return `Overdue by ${pluralize(overdueMinutes, "minute")}`;
}

function updateTimeUI() {
  const now = new Date();
  dueDateEl.textContent = formatDueDate(dueDate);
  dueDateEl.setAttribute("datetime", dueDate.toISOString());

  timeRemainingEl.textContent = getTimeRemainingText(now, dueDate);
  timeRemainingEl.setAttribute("datetime", now.toISOString());
}

function updateCompletionUI(isDone) {
  const statusText = isDone ? "Done" : "In Progress";
  statusEl.textContent = statusText;
  statusEl.setAttribute("aria-label", `Task status ${statusText}`);
  cardEl.classList.toggle("is-complete", isDone);
}

checkboxEl.addEventListener("change", (event) => {
  updateCompletionUI(event.target.checked);
});

editButtonEl.addEventListener("click", () => {
  console.log("edit clicked");
});

deleteButtonEl.addEventListener("click", () => {
  alert("Delete clicked");
});

updateTimeUI();
updateCompletionUI(false);
setInterval(updateTimeUI, 30 * 1000);
