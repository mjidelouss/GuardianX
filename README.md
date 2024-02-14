# GuardianX

* Implementation of authentication and authorization in Angular

- The Angular application we are going to build is a minimal but complete example. Our goal is to establish an authentication system based on JWT and HTTP-Only cookies, while addressing role-based authorization.

* The endpoints we will use are:

- POST api/v1/auth/authenticate to authenticate users
- POST api/v1/auth/logout to log out users
- POST api/v1/auth/refresh-token-cookie to refresh the JWT
- POST api/v1/user/resource, which returns a message with HTTP code 200 if the user is authenticated, has the role USER or ADMIN with write privilege (WRITE_PRIVILEGE)
- GET api/v1/admin/resource, which returns a message with HTTP 200 if the user is authenticated, has the role ADMIN with read privilege (READ_PRIVILEGE)

* The features to develop are:

- Creation of a login page
- Creation of a Home page accessible to users with the ADMIN or USER role
- Creation of an Admin page accessible only to users with the ADMIN role
- Auto-Login allows authenticated users to stay connected without having to enter their credentials every time
- Auto-Logout enables automatic logout to enhance user session security
- Creation of a dynamic navigation bar that displays based on user roles. The navigation bar will offer specific links based on the user's role
- Automatic JWT Refresh: This feature ensures that users stay connected seamlessly by automatically refreshing their JWT."
