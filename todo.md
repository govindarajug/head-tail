# TAIL

## TODO

- [ ] implement tail for `-q` option
- [ ] implement tail for `-r` option

## MAYBE

- [ ] consider sending richer structure to tail
- [ ] consider writing parser for parsing options

## DONE

- [x] consider implementing tail to work for multiple files
- [x] implement tail to work from command line
- [x] implement tail for `-c` option
- [x] update readme.md with new requirements
- [x] implement tail for `-n` option
- [x] make tail work when only filename is given

# HEAD

## TODO


## MAYBE

## DONE

- [x] extract conditions in headMain
- [x] change processFile work for head only
- [x] consider richer structure to pass for head
- [x] implement head.js to work for multiple files
- [x] parse filenames as array on `parseArgs.js`
- [x] validation for arguments in `parseArgs.js`
- [x] make `parseArgs.js` work for option and value given without space
- [x] split args in parser
- [x] throw error when next argument to switch is not a number
- [x] format the error when file cannot be read
- [x] consider throwing error when given option is invalid
- [x] print error file cannot be read to command line
- [x] implement head.js to work on command line
- [x] throw error if file cannot be read
- [x] change the way of parsing options
- [x] consider parsing of options
  - [x] parse for just filename with defaults
  - [x] parse with the options
- [x] consider richer structure to pass for headMain
- [x] implement head to work on file content instead of file
- [x] consider separation of `testHeadLib.js`
- [x] consider writing main function
  - [x] hard code values to work for default of 10 lines
  - [x] pass readFileSync as argument
  - [x] take options as arguments
- [x] consider moving misc functions to respective files
- [x] write tests for joinLines and splitLines in head
- [x] implement option (-c) to specify number of bytes on head
- [x] pass delimiter to the head to join the content
- [x] pass delimiter to the head to split the content
- [x] make splitLines to take delimiter to split by
- [x] implement option (-n) to specify number of lines on head
- [x] write tests for sliceUpto in head
- [x] consider extraction of joining and splitting in head
- [x] consider extraction of slicing in head
- [x] make head work for default value of 10
- [x] make head work with one line
- [x] make testHeadLib.js
- [x] create src and test structure
