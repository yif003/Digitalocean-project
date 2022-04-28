#!/usr/bin/python3
import sys
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\n")

print("<html><head><title>python Session-2</title></head> <body><h1 align=left>python session 2</h1>\n")


print("<table>")
if (os.environ["HTTP_COOKIE"] != None) and (os.environ['HTTP_COOKIE'] != "destroyed"):
    print("<tr><td>Cookie:</td><td>%s</td></tr>\n" %(os.environ['HTTP_COOKIE']))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")

#Links for other pages
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a>")
print("<br />")
print("<a href=\"/python-cgiform.html\">Python CGI Form</a>")
print("<br /><br />")

print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body></html>")