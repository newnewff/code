# 处理引号等问题
import json

s="{'dataFile':'F:\\project\\python\\json.txt'}"
data=json.loads(json.dumps(eval(s)))
print(type(data))
print(data['dataFile'])
