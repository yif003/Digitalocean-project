#!/usr/bin/python3
from datetime import datetime
import socket

s = datetime.now()
d = socket.gethostbyname(socket.gethostname())

print("Content-type: application/json\r\n\r\n")

print("{\n\t\"message\": \"Hello World\",\n")
print(f"\t\"Time\": {s}, \n")

print("\t\"currentIP\": "+ d + ',\n}\n')