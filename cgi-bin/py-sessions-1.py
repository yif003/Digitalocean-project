#!/usr/bin/python3
import sys
import os

print("Cache-Control: no-cache")
s=[]
name = ''
for line in sys.stdin: 
    s.append(line.rstrip())
    
if (len(s) > 0) and (s[0][0] == 'u'):
    name = s[0][9:]

if len(name) > 0:
    print("Content-type: text/html")
    print("Set-Cookie: %s\n" %(name))
else:
    print("Content-type: text/html\n\n")

print("<html><head><title>python Session-1</title></head> <body><h1 align=left>python session 1</h1>\n")
print("<table>")

if (len(name) > 0):
    print("<tr><td>Cookie:</td><td>%s</td></tr>\n" %(name))
elif (os.environ["HTTP_COOKIE"] != None) and (os.environ['HTTP_COOKIE'] != "destroyed"):
    print("<tr><td>Cookie:</td><td>%s</td></tr>\n" %(os.environ['HTTP_COOKIE']))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")

#Links for other pages
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a>")
print("<br />")
print("<a href=\"/python-cgiform.html\">C CGI Form</a>")
print("<br /><br />")

print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body></html>")