# 📱 ITMultiverse App

**ITMultiverse App** is a React Native mobile application built with **Expo**, designed to showcase services, courses, contact form, and more — inspired by [ITMultiverse.com](https://itmultiverse.com/).  
Built for Android & iOS using **React Navigation**, **Expo Icons**, and **custom components**.

---

## 🚀 Features

- 🏠 Home screen with services and stats
- 📚 Courses list with images & navigation to details
- ℹ️ About page
- 📞 Contact form with Name, Email, Message & contact info
- 🧭 Bottom Tab Navigation with icons
- 💻 Designed for mobile responsiveness
- 🎨 Clean and modern UI

---

## 📁 Folder Structure
ITMultiverseApp/
│
├── assets/                 → Local images (home.jpg, course1.png, etc.)
│
├── components/             → Reusable components (optional)
│
├── navigation/             → Stack navigators (e.g. CoursesStack.js)
│
├── screens/                → All main screens
│   ├── Home.js             → Home screen
│   ├── Courses.js          → Courses listing
│   ├── CourseDetails.js    → Detailed course info
│   ├── About.js            → About screen
│   └── Contact.js          → Contact form + info
│
├── App.js                  → Main entry point with BottomTabNavigation
├── app.json                → Expo configuration file
├── package.json            → Project metadata & dependencies
├── README.md               → Project documentation
└── .gitignore              → Git ignored files

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ITMultiverseApp.git
cd ITMultiverseApp
```
### 2. Install dependencies

```bash
npm install
# or
yarn install
```
### 3. Start Expo project
```bash
npx expo start
# Or use tunnel if on different network
npx expo start --tunnel
```
---

## 📱 Run on Mobile
- Install Expo Go from Play Store / App Store
- Scan QR code from terminal/browser
- App will load on your phone

 ## 📦 Tech Stack
- React Native (Expo)
- React Navigation (Bottom Tabs + Stack)
- @expo/vector-icons
- JSX & Functional Components
- ScrollView, TouchableOpacity, SafeAreaView

## 🧑‍💻 Author
- Developed by UMAMA AQEEL
- For training / learning / demo purposes inspired by itmultiverse.com.




