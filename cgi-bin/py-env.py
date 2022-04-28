#!/usr/bin/python3
import os

print("Content-type: text/html\n\n")
print("<html><head><title>Environment Variables</title></head> <body><h1 align=center>Environment Variables</h1> <hr/>\n")

for param in os.environ.keys():
    print("<b>%20s</b>: %s <br>" % (param, os.environ[param]))

print("</body></html>")
