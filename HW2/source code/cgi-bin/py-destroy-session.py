#!/usr/bin/python3
import sys
import os
print("Cache-Control: no-cache")
print("Content-type: text/html")
print("Set-Cookie: destroyed\n")

print("<html>")
print("<head><title>python Session Destroyed</title></head>")
print("<body>")
print("<h1>C Session Destroyed</h1>")

print("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a>")
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
print("<br />")
print("<a href=\"/python-cgiform.html\">Python CGI Form</a>")

print("</body>")
print("</html>")