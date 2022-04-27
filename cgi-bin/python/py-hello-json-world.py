#!/usr/bin/python3
import json
from datetime import datetime
import socket

s = datetime.now()
d = socket.gethostbyname(socket.gethostname())

print("Content-type: application/json\r\n\r\n")

print("{\n\t\"message\": \"Hello World\",\n")
print(f"\t\"date\": \"{s}\",\n")
print("\t\"currentIP\": \"\"\n}\n")