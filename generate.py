import os
import json
from glob import glob
from pathlib import Path
import shutil
import urllib

files = []
start_dir = os.getcwd()
pattern   = "*.pdf"
books_list = []
for dir,_,_ in os.walk(start_dir):
    files.extend(glob(os.path.join(dir,pattern)))

decoded_files = []
for my_file in files:
    new_name = my_file.encode("UTF-8")    
    decoded_files.append(new_name)
	
rel_files = []
file_names = []
for file in decoded_files:
    name = os.path.basename(file)
    prefix = start_dir.replace("\\","/")
    decoded_file = file.decode("UTF-8")
    rel_file = os.path.relpath(decoded_file, prefix) 
    rel_file = rel_file.replace("\\","/")
    book_json_obj = {"name": name.decode("UTF-8").replace(".pdf",""), "link": rel_file }
    books_list.append(book_json_obj)

books_json = {"books": books_list}
with open('data.json', 'w', encoding='utf-8') as outfile:
    outfile.write(str(books_json))
