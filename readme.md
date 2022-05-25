## HEAD

`head [-n lines | -c bytes] file(s)`

```
head file(s)
  displays first 10 lines of the specified files.

head -n count file(s)
  displays first count of lines of the specified files.By default count is 10.

head -c count file(s)
  displays first count of bytes of the specified files.

If more than one file is provided as arguments each file's output is preceded by ==> filename <==
```

## TAIL

`tail  [-r] [-q] [-c bytes | -n lines] [file ...]`

```
tail file(s)
  displays last 10 lines of the specified files.

tail -n count file(s)
  displays last count of lines of the specified files.By default count is 10.

tail -c count file(s)
  displays last count of bytes of the specified files.

tail -q
  suppresses printing headers  when multiple files are being examined.

tail -r
  input to be displayed in reverse order, by line.

If more than one file is provided as arguments each file's output is preceded by ==> filename <==
```
