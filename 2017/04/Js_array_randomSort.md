#### JS 实现数组随机排序

给定一个有序数组，要求进行随机排序；
实现思路：
　１、主要做到每次每次push到新数组的元素是唯一的即可；
 2、已push的元素因从原始数组中移除，以保证不会重新插入；

``` js
let a = [];
for(let i = 0; i < 10; i++)
{
  a[i] = i;
}

if(!Array.prototype.randomSort)
{
  Array.prototype.randomSort = function () {
  var length = this.length,
      temp = [],
      _index;
  while(temp.length != length)
  {
 _index = Math.floor(Math.random()*this.length);
 temp.push(this[_index]);
 this.splice(_index, 1);
  }
    return temp;
 }
}
console.log(a.randomSort());
```