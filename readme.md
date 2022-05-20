`head [-n count | -c bytes] file(s)`

```
head file(s)
  displays first 10 lines of the specified files.

head -n count file(s)
  displays first count of lines of the specified files.By default count is 10.

head -c count file(s)
  displays first count of bytes of the specified files.

If more than one file is provided as arguments each file's output is preceded by ==> filename <==
```