#!/usr/bin/python3
from datetime import datetime
import socket

s = datetime.now()
d = socket.gethostbyname(socket.gethostname())
print("Content-type: text/html\n\n")
print("<html><head><title>Hello CGI World</title></head>")
print("<body>")
print("<h1 align=center>Hello HTML World</h1>\n<hr/>\n")

print("Hello World<br/>\n")
print(f"This program was generated at: {s} \n<br>")
print("Your current IP address is:  ", d)
 
print("</body></html>")