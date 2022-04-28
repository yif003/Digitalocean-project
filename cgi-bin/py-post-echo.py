#!/usr/bin/python3
import sys

s=[]
for line in sys.stdin: 
    s.append(line.rstrip())
print("Content-type: text/html\n\n")
print("<html><head><title>Post Echo</title></head> <body><h1 align=center>Post Echo</h1> <hr/>\n")

print("<table>\n")
print("Message body: ")
print(s[0])
print("</table>")
print("</body>")
print("</html>")