import re

texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

pattern_9 = re.compile('9')
match1 = re.search(pattern_9, texto)
print("Posições: %s, %s; Valor %s." % (match1.start(), match1.end(), match1.group(0)))

valores = re.findall('[a-f]', texto)
print("Valores: %s" % valores)