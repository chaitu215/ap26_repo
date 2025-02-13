Step-by-Step JWT Authentication Process
1️⃣ User Logs In → Sends credentials (email & password).
2️⃣ Server Validates Credentials → If correct, it creates a JWT token.
3️⃣ Token Sent to User → The client stores JWT in localStorage or cookies.
4️⃣ User Requests a Protected Route → The client sends the JWT in the request header.
5️⃣ Server Verifies Token → If valid, access is granted; otherwise, it's rejected.

differences -> JWT vs.                           Session-Based Authentication

Feature	JWT (Token-Based)	                        Session-Based
Storage	Stored on client (localStorage/cookies)	    Stored on the server
Scalability	✅ Highly scalable	                  ❌ Harder to scale
Security	✅ Signed & encrypted	              ❌ Vulnerable to session hijacking
Performance	✅ Fast (no DB lookup)	              ❌ Slow (checks DB/session)