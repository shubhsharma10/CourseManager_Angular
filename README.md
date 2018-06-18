# CS5610 - Course Manager - Angular Front end - Shubham Sharma

## Angular front end:
- Hosted at: https://cs5610-summer1-angular-ssharma.herokuapp.com/

## NodeJS server repo:
- https://github.com/shubhsharma10/cs5610-summer1-nodejs-ssharma

## Workflow:
- To see course/module/lesson/topic/widgets flow with data Follow below path:
- CS5610(Course) -> React(Module) -> State(Lesson) -> Topic 2(Topic)
- You can also go to https://cs5610-summer1-react-ssharma.herokuapp.com/ and
  more data, however that is work in progress as I am including MaterialUI on that,
  so dialog box have extra space around them.

## Functionalities:
- Top nav bar shows logged in user name and clicking on it takes to Profile page
- Bottom nav bar shows user icon which also takes to Profile page
- When user is logged in, he can see courses enrolled at Home page and course with sections
  on Profile page.
- When admin is logged in, Admin button will be enabled on Admin profile page, which 
  goes to Admin page for adding, updating section and deleting section.
- If a section is selected for update, Add Section button is disabled and Update,Delete enabled.
- If no section is selected, then Add Section is enabled.
- User can only enroll if he is Student i.e. Anonymous user and Admin user can't enroll.
- Student can enroll or withdraw from sections page.
- Student can enroll in multiple sections of a course.
- Logged in user gets logged out and taken to home page if user is inactive for 30 minutes.
- Admin user credentials: admin/admin
- Student user credentials: nit/987, hari/123, Raju/123
- Username is case sensitive and passwords is of number format.
