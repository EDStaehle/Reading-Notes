# class 15 notes

## What is Oauth

Oauth is a way to create a login to your application to create authorization methods and limit unauthorized users from accessing data or to create user accounts.

Give an example of what using OAuth would look like.

logging into facebook or when you are creating an account and you have the option to log in through google.

How does OAuth work? What are the steps that it takes to authenticate the user?

        |   auth req =>           |
        |  <= auth grant          |
 *app*  |  auth grant =>          |    *server
        |  <=access token         |
        |  access token =>        |
        |  <= protected resource  |

What is OpenID?

OpenID is a authentication app to verify a login

## Authorization and Authentication flows

What is the difference between authorization and authentication?

Authorization is granting permission - Authentication is verifying identity.

What is Authorization Code Flow?

The user clicks login within the web application.

Auth0's SDK redirects the user to the Auth0 Authorization Server (/authorize endpoint).
Your Auth0 Authorization Server redirects the user to the login and authorization prompt.

The user authenticates using one of the configured login options and may see a consent page listing the permissions Auth0 will give to the regular web application.

Your Auth0 Authorization Server redirects the user to the application with an authorization code, which is suitable for one use.

Auth0's SDK sends this code to the Auth0 Authorization Server (/OAuth/token endpoint) along with the
application's Client ID and Client Secret.

Your Auth0 Authorization Server verifies the code, Client ID, and Client Secret.

Your Auth0 Authorization Server responds with an ID Token and Access Token (optionally, a Refresh
Token).

Your application can use the Access Token to call an API to access information about the user.

The API responds with the requested data.

What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?

The user clicks login within the application.

Auth0's SDK creates a cryptographically-random code_verifier and, from this, generates a code_challenge.

Auth0's SDK redirects the user to the Auth0 Authorization Server (/authorize endpoint) along with the code_challenge.

Your Auth0 Authorization Server redirects the user to the login and authorization prompt.

The user authenticates using one of the configured login options and may see a consent page listing the permissions Auth0 will give to the application.

Your Auth0 Authorization Server stores the code_challenge and redirects the user back to the application with an authorization code, which is suitable for one use.

Auth0's SDK sends this code and the code_verifier (created in step 2) to the Auth0 Authorization Server (/OAuth/token endpoint).

Your Auth0 Authorization Server verifies the code_challenge and code_verifier.

Your Auth0 Authorization Server responds with an ID token and access token (optionally, a refresh token).

Your application can use the access token to call an API to access information about the user.

The API responds with the requested data.

What is Implicit Flow with Form Post?

The user clicks login in the app.

2.Auth0's SDK redirects the user to the Auth0 Authorization Server (/authorize endpoint), passing along a response_type parameter of id_token that indicates the type of requested credential. It also passes along a response_mode parameter of form_post to ensure security.

Your Auth0 Authorization Server redirects the user to the login and authorization prompt.

The user authenticates using one of the configured login options and may see a consent page listing the permissions Auth0 will give to the app.

Your Auth0 Authorization Server redirects users to the app with an ID Token.

What is Client Credentials Flow?

The application authenticates with the Auth0 Authorization Server using its Client ID and Client Secret (/OAuth/token endpoint).

Auth0 Authorization Server validates the Client ID and Client Secret.

Auth0 Authorization Server responds with an Access Token.

The application can use the access token to call an API on its behalf of itself.

The API responds with the requested data.

What is Device Authorization Flow?

The user starts the app on the device.

The device app requests authorization from the Auth0 Authorization Server using its Client ID (/OAuth/device/code endpoint).

The Auth0 Authorization Server responds with a device_code, user_code, verification_uri, verification_uri_complete expires_in (lifetime in seconds for device_code and user_code), and polling interval.

The device app asks the user to activate using their computer or smartphone. The app may accomplish this by:

asking the user to visit the verification_uri and enter the user_code after displaying these values on-screen

asking the user to interact with either a QR Code or shortened URL with embedded user code generated from the verification_uri_complete

directly navigating to the verification page with embedded user code using verification_uri_complete, if running natively on a browser-based device

The device app begins polling your Auth0 Authorization Server for an Access Token (/OAuth/token endpoint) using the time specified by interval and counting from receipt of the last polling request's response. The device app continues polling until the user completes the browser flow path or the user code expires.

When the user completes the browser flow path, your Auth0 Authorization Server responds with an Access Token (and, optionally, a Refresh Token). The device app should now forget its device_code because it will expire.

Your device app can use the Access Token to call an API to access information about the user.

The API responds with the requested data.

What is Resource Owner Password Flow?

The user clicks login within the application and enters their credentials.

Your application forwards the user's credentials to your Auth0 Authorization Server (/OAuth/token endpoint).

Your Auth0 Authorization Server validates the credentials.

Your Auth0 Authorization Server responds with an Access Token (and, optionally, a Refresh Token).

Your application can use the Access Token to call an API to access information about the user.

The API responds with the requested data.
