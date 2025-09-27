# Simple-To-Do-List
Simple To-Do List 📝
A clean, responsive, and feature-rich to-do list application built with HTML, CSS, and JavaScript.

Features ✨
✅ Add new tasks with a simple input form

✅ Mark tasks as complete/incomplete with checkboxes or buttons

✅ Delete tasks individually

✅ Filter tasks by All, Active, or Completed

✅ Progress tracking with visual progress bar

✅ Local storage - your tasks persist between sessions

✅ Responsive design that works on all devices

✅ Mobile-friendly with bottom action buttons

✅ Dark mode support (auto-detects system preference)

✅ Smooth animations and transitions

✅ Visual notifications for user actions

Live Demo 🌐
Click here to try the live demo

Installation 🚀
No installation required! This is a single HTML file application.

Download the index.html file

Open it in any modern web browser

Start organizing your tasks!

Usage 📖
Adding Tasks
Type your task in the input field

Press Enter or click the "Add Task" button

Your task will appear in the list

Managing Tasks
Complete a task: Click the checkbox or the checkmark button

Delete a task: Click the trash can button

Filter tasks: Use the All/Active/Completed filter buttons

Clear completed tasks: Use the mobile "Clear" button (on small screens)

Mobile Features
On mobile devices, you'll find convenient bottom buttons for:

➕ Add new tasks

🧹 Clear completed tasks

🔄 Toggle filter visibility

Browser Compatibility 🔍
This application works on all modern browsers including:

Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

File Structure 📁
text
simple-todo-list/
│
├── index.html          # Main application file
└── README.md           # This documentation file
Technical Details 🔧
Technologies Used
HTML5 - Semantic structure

CSS3 - Responsive styling with CSS Grid and Flexbox

Vanilla JavaScript - No frameworks or dependencies

Local Storage API - Data persistence

Font Awesome - Icons

Key Features
Responsive Design: Uses CSS media queries for all screen sizes

CSS Variables: Easy theme customization

Accessibility: Proper ARIA labels and keyboard navigation

Performance: Optimized animations and efficient DOM updates

Customization 🎨
Changing Colors
Modify the CSS variables in the :root selector:

css
:root {
    --primary: #81a3cd;      /* Main primary color */
    --secondary: #beddf2;    /* Secondary color */
    --accent: #2a0219;       /* Accent color */
    --success: #32CD32;      /* Success color (green) */
    --danger: #FF4500;       /* Danger color (red) */
}
Adding New Features
The JavaScript code is modular and well-commented. Key functions include:

addTask() - Add new tasks

toggleTask() - Mark tasks complete/incomplete

deleteTask() - Remove tasks

renderTasks() - Update the task list display

Contributing 🤝
Contributions are welcome! Here's how you can help:

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Known Issues 🐛
None currently reported

Future Enhancements 🔮
Task categories/tags

Due dates and reminders

Task prioritization

Drag and drop reordering

Export/import functionality

Shareable task lists

Support 💬
If you encounter any issues or have questions:

Check the Issues page

Create a new issue with details about the problem

Include browser version and steps to reproduce

License 📄
This project is open source and available under the MIT License.

Acknowledgments 🙏
Icons by Font Awesome

Fonts by Google Fonts

Inspired by modern task management applications

