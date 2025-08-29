# StudyNotion Edtech Project

```
StudyNotion-EdTech-Project
├─ .editorconfig
├─ .nvmrc
├─ .prettierignore
├─ package.json
├─ prettier.config.js
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo.png
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ _redirects
├─ README.md
├─ server
│  ├─ config
│  │  ├─ cloudinary.js
│  │  ├─ database.js
│  │  └─ razorpay.js
│  ├─ controllers
│  │  ├─ Auth.js
│  │  ├─ Category.js
│  │  ├─ ContactUs.js
│  │  ├─ Course.js
│  │  ├─ courseProgress.js
│  │  ├─ payments.js
│  │  ├─ profile.js
│  │  ├─ RatingandReview.js
│  │  ├─ resetPassword.js
│  │  ├─ Section.js
│  │  └─ Subsection.js
│  ├─ index.js
│  ├─ mail
│  │  └─ templates
│  │     ├─ contactFormRes.js
│  │     ├─ courseEnrollmentEmail.js
│  │     ├─ emailVerificationTemplate.js
│  │     ├─ passwordUpdate.js
│  │     └─ paymentSuccessEmail.js
│  ├─ middleware
│  │  └─ auth.js
│  ├─ models
│  │  ├─ Category.js
│  │  ├─ Course.js
│  │  ├─ CourseProgress.js
│  │  ├─ OTP.js
│  │  ├─ Profile.js
│  │  ├─ RatingandReview.js
│  │  ├─ Section.js
│  │  ├─ Subsection.js
│  │  └─ User.js
│  ├─ package.json
│  ├─ README.md
│  ├─ routes
│  │  ├─ Contact.js
│  │  ├─ Course.js
│  │  ├─ Payments.js
│  │  ├─ profile.js
│  │  └─ user.js
│  ├─ test-email.js
│  └─ utils
│     ├─ imageUploader.js
│     ├─ mailSender.js
│     └─ secToDuration.js
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ Images
│  │  │  ├─ aboutus1.webp
│  │  │  ├─ aboutus2.webp
│  │  │  ├─ aboutus3.webp
│  │  │  ├─ banner.mp4
│  │  │  ├─ bghome.svg
│  │  │  ├─ boxoffice.png
│  │  │  ├─ Compare_with_others.png
│  │  │  ├─ Compare_with_others.svg
│  │  │  ├─ FoundingStory.png
│  │  │  ├─ frame.png
│  │  │  ├─ Instructor.png
│  │  │  ├─ Know_your_progress.png
│  │  │  ├─ Know_your_progress.svg
│  │  │  ├─ login.webp
│  │  │  ├─ Plan_your_lessons.png
│  │  │  ├─ Plan_your_lessons.svg
│  │  │  ├─ signup.webp
│  │  │  └─ TimelineImage.png
│  │  ├─ Logo
│  │  │  ├─ Logo-Full-Dark.png
│  │  │  ├─ Logo-Full-Light.png
│  │  │  ├─ Logo-Small-Dark.png
│  │  │  ├─ Logo-Small-Light.png
│  │  │  └─ rzp_logo.png
│  │  └─ TimeLineLogo
│  │     ├─ Logo1.svg
│  │     ├─ Logo2.svg
│  │     ├─ Logo3.svg
│  │     └─ Logo4.svg
│  ├─ components
│  │  ├─ Common
│  │  │  ├─ ConfirmationModal.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ IconBtn.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ RatingStars.jsx
│  │  │  ├─ ReviewSlider.jsx
│  │  │  └─ Tab.jsx
│  │  └─ core
│  │     ├─ AboutPage
│  │     │  ├─ ContactFormSection.jsx
│  │     │  ├─ LearningGrid.jsx
│  │     │  ├─ Quote.jsx
│  │     │  └─ Stats.jsx
│  │     ├─ Auth
│  │     │  ├─ LoginForm.jsx
│  │     │  ├─ OpenRoute.jsx
│  │     │  ├─ PrivateRoute.jsx
│  │     │  ├─ ProfileDropdown.jsx
│  │     │  ├─ SignupForm.jsx
│  │     │  └─ Template.jsx
│  │     ├─ Catalog
│  │     │  ├─ Course_Card.jsx
│  │     │  └─ Course_Slider.jsx
│  │     ├─ ContactUsPage
│  │     │  ├─ ContactDetails.jsx
│  │     │  ├─ ContactForm.jsx
│  │     │  └─ ContactUsForm.jsx
│  │     ├─ Course
│  │     │  ├─ CourseAccordionBar.jsx
│  │     │  ├─ CourseDetailsCard.jsx
│  │     │  └─ CourseSubSectionAccordion.jsx
│  │     ├─ Dashboard
│  │     │  ├─ AddCourse
│  │     │  │  ├─ CourseBuilder
│  │     │  │  │  ├─ CourseBuilderForm.jsx
│  │     │  │  │  ├─ NestedView.jsx
│  │     │  │  │  └─ SubSectionModal.jsx
│  │     │  │  ├─ CourseInformation
│  │     │  │  │  ├─ ChipInput.jsx
│  │     │  │  │  ├─ CourseInformationForm.jsx
│  │     │  │  │  └─ RequirementsField.jsx
│  │     │  │  ├─ index.jsx
│  │     │  │  ├─ PublishCourse
│  │     │  │  │  └─ index.jsx
│  │     │  │  ├─ RenderSteps.jsx
│  │     │  │  └─ Upload.jsx
│  │     │  ├─ Cart
│  │     │  │  ├─ index.jsx
│  │     │  │  ├─ RenderCartCourses.jsx
│  │     │  │  └─ RenderTotalAmount.jsx
│  │     │  ├─ EditCourse
│  │     │  │  └─ index.jsx
│  │     │  ├─ EnrolledCourses.jsx
│  │     │  ├─ Instructor.jsx
│  │     │  ├─ InstructorCourses
│  │     │  │  └─ CoursesTable.jsx
│  │     │  ├─ InstructorDashboard
│  │     │  │  └─ InstructorChart.jsx
│  │     │  ├─ MyCourses.jsx
│  │     │  ├─ MyProfile.jsx
│  │     │  ├─ Settings
│  │     │  │  ├─ ChangeProfilePicture.jsx
│  │     │  │  ├─ DeleteAccount.jsx
│  │     │  │  ├─ EditProfile.jsx
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ UpdatePassword.jsx
│  │     │  ├─ Sidebar.jsx
│  │     │  └─ SidebarLink.jsx
│  │     ├─ HomePage
│  │     │  ├─ Button.jsx
│  │     │  ├─ CodeBlocks.jsx
│  │     │  ├─ CourseCard.jsx
│  │     │  ├─ ExploreMore.jsx
│  │     │  ├─ HighlightText.jsx
│  │     │  ├─ InstructorSection.jsx
│  │     │  ├─ LearningLanguageSection.jsx
│  │     │  └─ Timeline.jsx
│  │     └─ ViewCourse
│  │        ├─ CourseReviewModal.jsx
│  │        ├─ VideoDetails.jsx
│  │        └─ VideoDetailsSidebar.jsx
│  ├─ data
│  │  ├─ countrycode.json
│  │  ├─ dashboard-links.js
│  │  ├─ footer-links.js
│  │  ├─ homepage-explore.js
│  │  └─ navbar-links.js
│  ├─ hooks
│  │  ├─ useOnClickOutside.js
│  │  └─ useRouteMatch.js
│  ├─ index.js
│  ├─ pages
│  │  ├─ About.jsx
│  │  ├─ Catalog.jsx
│  │  ├─ Contact.jsx
│  │  ├─ CourseDetails.jsx
│  │  ├─ Dashboard.jsx
│  │  ├─ Error.jsx
│  │  ├─ ForgotPassword.jsx
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Signup.jsx
│  │  ├─ UpdatePassword.jsx
│  │  ├─ VerifyEmail.jsx
│  │  └─ ViewCourse.jsx
│  ├─ reducer
│  │  └─ index.js
│  ├─ services
│  │  ├─ apiConnector.js
│  │  ├─ apis.js
│  │  ├─ formatDate.js
│  │  └─ operations
│  │     ├─ authAPI.js
│  │     ├─ courseDetailsAPI.js
│  │     ├─ pageAndComponntDatas.js
│  │     ├─ profileAPI.js
│  │     ├─ SettingsAPI.js
│  │     └─ studentFeaturesAPI.js
│  ├─ slices
│  │  ├─ authSlice.js
│  │  ├─ cartSlice.js
│  │  ├─ courseSlice.js
│  │  ├─ profileSlice.js
│  │  └─ viewCourseSlice.js
│  └─ utils
│     ├─ avgRating.js
│     ├─ constants.js
│     └─ dateFormatter.js
└─ tailwind.config.js

```