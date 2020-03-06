# Fetch Rewards Email Checker

A simple web server using [Polka](https://github.com/lukeed/polka "Polka Micro Web Server") which accepts HTTP requests and returns a numeric string representing the number of unique email addresses in the HTTP request. 

"Unique" email addresses are ascertained using Gmail's account matching criteria - e.g. ignoring the placement of a "." character, and ignoring any portion of a username after a "+" character.

To run, simply clone the repo and call `node index.js` from the root directory to start the server. Then call `bash count_emails.sh` from the command line to curl the web server using the example script provided.