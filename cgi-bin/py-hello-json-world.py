#!/usr/bin/python3
from datetime import datetime
import os

s = datetime.now()
d = os.environ["REMOTE_ADDR"]

print("Content-type: application/json\r\n\r\n")

print("{\n\t\"message\": \"Hello World\",\n")
print(f"\t\"Time\": {s}, \n")

print("\t\"currentIP\": "+ d + ',\n}\n')