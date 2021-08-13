
import json

adj_dict =[]
noun_dict =[]

adj_src = open('adjectives.txt', 'r')
adjectives = adj_src.readlines()
for adj in adjectives:
    adj_dict.append(adj.strip())

noun_src = open('nouns.txt', 'r')
for noun in noun_src.readlines():
    noun_dict.append(noun.strip())

with open("prompts.js", "w") as prompts_out:
    prompts_out.write(f"var adjectives = {json.dumps(adj_dict)}\n")
    prompts_out.write(f"var nouns = {json.dumps(noun_dict)}\n")