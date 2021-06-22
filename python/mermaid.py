# python 与使用 mermaid.ink 服务的 mermaid-js 集成
# https://mermaid-js.github.io/mermaid/#/./Tutorials
import base64
import requests, io
from PIL import Image
import matplotlib.pyplot as plt

graph = """
graph LR;
    A--> B & C & D3;
    B--> A & E;
    C--> A & E;
    D3--> A & E;
    E--> B & C & D3;
"""

graphbytes = graph.encode("ascii")
base64_bytes = base64.b64encode(graphbytes)
base64_string = base64_bytes.decode("ascii")
print('https://mermaid.ink/img/' + base64_string)
#img = Image.open(io.BytesIO(requests.get('https://mermaid.ink/img/' + base64_string).content))
#plt.imshow(img)


