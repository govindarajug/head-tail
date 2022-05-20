## TODO

- [ ] consider writing main function
  - [x] hard code values to work for default of 10 lines
  - [x] pass readFileSync as argument
  - [ ] take options as arguments
- [ ] implement head to work on file content instead of file

## MAYBE

- [ ] consider separation of `testHeadLib.js`
- [ ] consider richer structure to pass for head

## DONE

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
