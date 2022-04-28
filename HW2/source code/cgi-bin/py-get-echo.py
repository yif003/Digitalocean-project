#!/usr/bin/python3
import os

s = os.environ['QUERY_STRING']
x = s
j = x.split('=')
print("Content-type: text/html\n\n")
print("<html><head><title>GET query string</title></head> <body><h1 align=center>GET query string</h1> <hr/>\n")
print(f"Raw query string: {x}\n<br/><br/>")
print("<table> Formatted Query String: ")
print(j[0] +": "+j[1])
print("</table>")

print("</body></html>")