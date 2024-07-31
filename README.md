# PolicyExplained

User Story:
As an American concerned about the information available, I want to access accurate and reliable details about the federal level of our government all in one place.

Acceptance Criteria:

Legislation Search:
WHEN I use the search bar for keywords, 
THEN legislation matching my keywords appears on a search results screen.

User Login and Tracking:
WHEN I am able to log in, 
THEN I am able to save legislation information so that I can track it.

Elected Officials Information:
WHEN I am able to see all current elected officials serving in the offices of President, Vice President, Congress, and SCOTUS, 
THEN I am able to save these officials to my profile so that I can see who the officials in my districts are.

Homepage News Articles:
WHEN I visit/click on the homepage, 
THEN there will be two boxes inside each containing a current news article related to election news on the federal level.

Hamburger Menu Navigation:
WHEN I click on the hamburger menu on the top left of the page, 
THEN I am able to see a menu with options to go to pages for House of Representatives Members, Senators, Office of the President, Office of the Vice President, SCOTUS, Current Legislation, Previous Legislation, and Congressional News.

Filtering and Sorting:
WHEN I view legislation or elected officials, 
THEN I can filter and sort them by various criteria such as date, topic, committee, policy area, Chamber (House or Senate), sponsor/cosponsor, status, and congressional session (e.g., 118th Congress 2023-2024).

Notifications:
WHEN I track legislation or save officials, 
THEN I can opt to receive email or SMS notifications for updates.

Interactive Maps:
WHEN I view the district information, 
THEN I can see an interactive map showing the districts of the elected officials.

Educational Resources:
WHEN I visit the educational resources section, 
THEN I can access explanations of how legislation is made and the roles of different government branches, along with FAQs and a glossary.

Personalized Dashboard:
WHEN I log in, 
THEN I can see a personalized dashboard with my tracked legislation and saved officials at a glance.

Accessibility Options:
WHEN I need accessibility options, 
THEN I can choose larger text, high contrast, and screen reader compatibility settings.

Mobile Compatibility:
WHEN I access the website on a mobile device, 
THEN the site is fully responsive and functions well.

Data Visualization:
WHEN I view legislative data, 
THEN I can see visual summaries such as pie charts or bar graphs.

Historical Data:
WHEN I visit the historical data section, 
THEN I can access past legislation and elected officials' information.

Security:
WHEN I use the website, 
THEN my data is protected with strong security measures including HTTPS, secure login mechanisms, and regular security audits.

District Search:
WHEN I search for my district using my address,
THEN I can find the relevant district information.

Voting Records:
WHEN I view the information of any given official,
THEN I can access their voting records.


Work Breakdown Structure:
Phase 1: Initial Setup and Basic Structure

Project Initialization
[x] Initialize project with Vite
[x] Manual Testing: Verify project setup and dependencies

Basic Components and Layout
[] Create basic components (Header, Footer, Home, etc.)
[] Set up React Router
[]Jest Testing: Write basic unit tests for each component
[] Manual Testing: Verify navigation works correctly with React Router

UI/UX Design
[] Implement basic styling and layout
[] Jest Testing: Write snapshot tests for key components
[] Manual Testing: Test UI elements for responsiveness and visual consistency

Phase 2: Core Functionalities

Search Functionality
[] Implement search bar component
[] Integrate with legislation API
[] Jest Testing: Write tests for search functionality to ensure API integration works correctly
[] Manual Testing: Verify search results are displayed as expected

User Authentication
[] Implement login and registration forms
[] Set up JWT authentication
[] Jest Testing: Write tests for authentication flow (login, registration, token handling)
[] Manual Testing: Verify user profile data is correctly displayed

Homepage News Articles
[] Fetch and display current news articles
[] Jest Testing: Write tests to ensure news articles are fetched and displayed correctly
[] Manual Testing: Verify the layout of news articles on the homepage

Navigation Menu
[] Implement hamburger menu
[] Manual Testing: Test the functionality of the hamburger menu and verify navigation links work as expected

Phase 3: Additional Essential Features

Elected Officials Information
[] Fetch and display information for elected officials
[] Jest Testing: Write tests for fetching and displaying officials' information
[] Manual Testing: Verify the functionality of saving officials to the user profile

Personalized Dashboard
[] Implement dashboard to display tracked legislation and saved officials
[] Jest Testing: Write tests for dashboard functionality
[] Manual Testing: Verify tracked legislation and saved officials are displayed correctly

Basic Filtering and Sorting
[] Implement filtering and sorting for legislation and officials
[] Jest Testing: Write tests for filtering and sorting functionality
[] Manual Testing: Verify filtering and sorting work as expected

Responsive Design
[] Ensure responsive design across all components
[] Manual Testing: Perform manual and automated tests for responsiveness
[] Manual Testing: Verify the site functions well on different devices

Phase 4: Deployment and Testing

Deployment
[] Deploy to a platform (e.g., Netlify, Render)
[] Manual Testing: Verify deployment works correctly and the site is accessible
[] Manual Testing: Perform smoke tests to ensure critical functionalities work post-deployment

Comprehensive Testing
[] Write additional unit tests for any untested components
[] Jest Testing: Implement end-to-end tests using Cypress or a similar tool (not Jest, but automated)
[] Manual Testing: Perform thorough manual testing to ensure all core functionalities work as expected

Phase 5: Documentation and Polishing

Documentation
[] Create and update documentation for the project
[] Manual Testing: Verify that the documentation is accurate and easy to follow
[] Manual Testing: Ensure API endpoints are well-documented

UI/UX Polishing
[] Refine UI/UX design based on feedback
[] Manual Testing: Conduct usability testing
[] Manual Testing: Verify visual consistency across all pages

Ongoing Development

Enhanced Filtering and Sorting
[] Add more filtering and sorting options
[] Jest Testing: Write tests for enhanced filtering and sorting functionality

Notifications
[] Implement notifications for tracked legislation and officials
[] Jest Testing: Write tests for notification functionality

Interactive Maps
[] Integrate interactive maps for district information
[] Manual Testing: Write tests for interactive map functionality (if using a library like Leaflet, testing might be more manual)

Educational Resources
[] Add educational resources section
[] Jest Testing: Write tests for educational resources content

Advanced Data Visualization
[] Implement data visualization for legislative data
[] Jest Testing: Write tests for data visualization components

Historical Data and Voting Records
[] Fetch and display historical data and voting records
[] Jest Testing: Write tests for historical data and voting records functionality

Accessibility and Security Enhancements
[] Implement accessibility options and security measures
[] Jest Testing: Write tests for accessibility features
[] Manual Testing: Perform security testing and audits