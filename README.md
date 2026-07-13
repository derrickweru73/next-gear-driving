## Next Gear Driving LMS

---

## Project Overview

Next Gear Driving LMS is a modern driving school learning management system built with React and Vite. It enables students to register, access driving courses, book driving lessons, track learning progress, complete quizzes, and manage their profiles through an intuitive and responsive interface. The application focuses on reusable components, responsive design, and an engaging learning experience.

---

## Problems It Solves

* Easy Course Access: Browse and enroll in driving courses from one platform.
* Convenient Lesson Booking: Schedule driving lessons with available instructors.
* Interactive Learning: Access road signs, traffic rules, videos, and study materials.
* Progress Tracking: Monitor completed lessons, quizzes, and overall course progress.
* Secure Student Access: Restricts learning resources and dashboards to authenticated users.

---

## Features

### Driving Courses
* Display driving courses using reusable course cards.
* Responsive course grid layout.
* Course descriptions, duration, and learning objectives.
* Individual course details page.

### Learning Resources
* Road signs and meanings.
* Traffic rules and regulations.
* Driving tutorials and videos.
* Downloadable study materials.
* Interactive learning content.

### Lesson Booking
* Book practical driving lessons.
* Select preferred instructor.
* Choose lesson date and time.
* View upcoming bookings.

### Student Dashboard
* Personalized welcome message.
* Track course progress.
* View completed and pending lessons.
* Monitor quiz performance.
* Access booked driving sessions.

### User Authentication
* Student login page.
* Student registration page.
* Protected student dashboard.
* Personalized greeting after login.

### Assessments
* Interactive quizzes.
* Instant score calculation.
* Review correct answers.
* Progress tracking based on performance.

### Navigation
* Responsive navigation bar.
* Quick navigation between pages.
* Active route highlighting using `React Router`.

### Responsive Design
* Mobile-friendly layouts.
* Tablet optimization.
* Desktop support.
* Flexible `Grid` and `Flexbox` layouts.

---

## Technical Concepts Implemented

### React Fundamentals
* Functional Components
* JSX
* Props
* Component Reusability

### React Hooks
* `useState`
* `useEffect`
* `useContext`
* Custom Context API

### Routing
* `React Router DOM`
* Nested Routes
* Protected Routes
* Dynamic Routing

### State Management
* Context API
* Global User State
* Course Progress State
* Lesson Booking State

### Data Handling
* JSON Course Dataset
* Array Filtering
* Array Mapping
* Dynamic Rendering

### Styling
* Tailwind CSS
* CSS Utilities
* Responsive Design
* Flexbox
* CSS Grid

### User Experience
* Toast Notifications
* Loading States
* Success Messages
* Booking Confirmations
* Progress Indicators

---

## Project Structure

```text
next-gear-driving-lms/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── courses/
│   │   │   └── courses.json
│   │   ├── instructors/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   ├── InstructorCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── QuizCard.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── BookingConfirmation.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── UserContext.jsx
│   │   └── CourseContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Booking.jsx
│   │   ├── Instructors.jsx
│   │   ├── Quiz.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Technologies Used

* React 19+
* Vite
* React Router DOM
* Tailwind CSS
* Context API
* Local Storage
* JavaScript (ES6+)

---

## Visual Identity

* **Brand Name:** Next Gear Driving LMS
* **Primary Color:** Navy Blue
* **Secondary Color:** Gold
* **Accent Color:** White & Dark Gray

---

## Requirements

Before running this project, install:
* Node.js
* npm

---

## Installation

### Clone Repository
```bash
git clone https://github.com/your-username/next-gear-driving-lms.git
```

### Open Project
```bash
cd next-gear-driving-lms
code .
```

### Install Dependencies
```bash
npm install
```

---

## Running the Project

Start the development server:
```bash
npm run dev
```

Open the `localhost` link shown in the terminal.

---

## How to Use

1. Register or log in as a student.
2. Browse available driving courses.
3. Access learning materials and tutorials.
4. Book a practical driving lesson.
5. Complete quizzes and assessments.
6. Track your learning progress.
7. View upcoming lessons from the dashboard.
8. Complete the course and earn a certificate.

---

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## Deployment

### Vercel
1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Deploy.

### GitHub Pages
```bash
npm run deploy
```

---

## Future Improvements

* Online driving theory exams
* AI-powered quiz recommendations
* Instructor dashboard
* Admin management system
* Student attendance tracking
* Payment gateway integration
* Driving lesson reminders
* Certificate generation
* Dark mode
* Real-time notifications
* Backend database integration

---

## Privacy & Data Storage

Student information, lesson bookings, and learning progress are stored locally using the browser's Local Storage API during development. No personal information is transmitted to external servers unless a backend service is integrated.

---

## Contributing

### How to Contribute
1. Fork the repository.
2. Create a feature branch.
```bash
git checkout -b feature/NewFeature
```
3. Commit your changes.
```bash
git commit -m "Add new feature"
```
4. Push your branch.
```bash
git push origin feature/NewFeature
```
5. Open a Pull Request.

---

## Author

Derrick Weru

---

## License

This project is developed for educational purposes only.