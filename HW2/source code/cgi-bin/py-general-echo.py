#!/usr/bin/python3
import os
import sys

s=[]
for line in sys.stdin: 
    s.append(line.rstrip())
s1 = os.environ['SERVER_PROTOCOL']
s2 = os.environ['REQUEST_METHOD']
s3 = os.environ['QUERY_STRING']
print("Content-type: text/html\n\n")
print("<html><head><title>General Request Echo</title></head> <body><h1 align=center>General Request Echo</h1> <hr/>\n")

print("<table>\n")
print("<tr><td>Protocol:</td><td>%s</td></tr>\n" %(s1))
print("<tr><td>Method:</td><td>%s</td></tr>\n" %(s2))
print("<tr><td>query string:</td><td>%s</td></tr>\n" %(s3))
print("</table>")
print("Message body: ")
print(s[0])
print("</body>")
print("</html>")