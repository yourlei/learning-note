# linux find
find -type f -name '*.php' | xargs grep 'GroupRecord'

# 查找某个目录下的包含指定字符内容的文件
find /etc/ -name '*.pl' | xargs grep '字符内容'
